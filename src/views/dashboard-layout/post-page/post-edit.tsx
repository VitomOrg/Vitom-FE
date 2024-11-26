import { FileInput } from "@/components/common/file-input";
import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
  useToast,
} from "@/components/ui";
import { FileEnum } from "@/domains/enums/file.enum";
import { BlogEditRequest } from "@/domains/models/blogs";
import { BlogsSchema, BlogsSchemaType } from "@/domains/schemas/blogs.schema";
import { BlogApi } from "@/domains/services/blogs.service";
import useBlog from "@/domains/stores/query-hook/blogs/useBlog";
import { FilesApi } from "@/domains/stores/query-hook/files/files.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { XCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useParams } from "react-router-dom";

const PostEdit = () => {
  const { toast } = useToast();
  const { id } = useParams<{ id: string }>();
  const { refetch } = useBlog({});
  const [image, setImage] = useState<string[]>([]);
  const { state: BlogState } = useLocation();

  const form = useForm<BlogsSchemaType>({
    resolver: zodResolver(BlogsSchema),
    defaultValues: {
      title: BlogState?.title || "",
      content: BlogState?.content || "",
      images: BlogState?.imageUrl || [],
    },
  });

  useEffect(() => {
    const state = BlogState?.imageUrl || [];
    if (state.length) {
      setImage(state);
    }
  }, [BlogState]);

  const onSubmit = async (data: BlogsSchemaType) => {
    const image = await Promise.all(
      data.images.map(async (file, index) => {
        if (file instanceof File) {
          const response = await FilesApi.postFile(
            data.images[index] as Blob,
            FileEnum.BLOG
          );

          return response?.value || "";
        }
        return file;
      })
    );

    const payload: BlogEditRequest = {
      title: data.title,
      content: data.content,
      images: image.filter((img) => typeof img === "string") as string[],
    };

    const response = id
      ? await BlogApi.putBlog(id, payload)
      : await BlogApi.postBlog(payload);

    if (response?.isSuccess) {
      toast({
        title: "Success",
        description: id ? "Blog post updated" : "Blog post created",
      });
      refetch();
    } else {
      toast({
        title: "Error",
        description: "Failed to create blog post",
      });
    }
  };

  return (
    <div className="p-4 ">
      <h1 className="mb-4 text-2xl font-bold">
        {id ? "Edit Blog Post" : "Create Blog Post"}
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-4"
        >
          <FormField
            control={form.control}
            name="images"
            render={() => (
              <FormItem>
                <FormLabel className="space-y-4">
                  <span>
                    Images <span className="font-bold text-red-500">*</span>{" "}
                    &nbsp;
                  </span>
                  <span className="text-sm text-muted-foreground">
                    (Max 4 file)
                  </span>
                </FormLabel>
                <FormControl>
                  <FileInput
                    accept=".img,.png"
                    multiple
                    maxFiles={4}
                    onFilesSelected={(files) => {
                      const filesUrl = files.map((file) =>
                        URL.createObjectURL(file)
                      );

                      setImage([...image, ...filesUrl]);
                      form.setValue("images", [
                        ...form.getValues("images"),
                        ...files,
                      ]);
                    }}
                  />
                </FormControl>
                <FormMessage />
                <div className="grid grid-cols-4 gap-4">
                  {image.map((img, index) => (
                    <div key={index} className="relative gap-2">
                      <div className="absolute p-1 rounded-sm cursor-pointer top-2 right-2 bg-destructive text-destructive-foreground">
                        <XCircle
                          size={16}
                          onClick={() => {
                            setImage(image.filter((_, i) => i !== index));
                            form.setValue(
                              "images",
                              image.filter((_, i) => i !== index)
                            );
                          }}
                        />
                      </div>
                      <img
                        src={img}
                        alt="product"
                        className="object-cover rounded-lg size-full"
                      />
                    </div>
                  ))}
                </div>
              </FormItem>
            )}
          />
          <div className="grid space-y-3">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your blog post title"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Give your blog post a catchy title.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write your blog post content here"
                      className="min-h-[200px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Write your blog post content. Minimum 10 characters.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Create Blog Post</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default PostEdit;
