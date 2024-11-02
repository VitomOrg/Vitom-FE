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
import { BlogsSchema, BlogsSchemaType } from "@/domains/schemas/blogs.schema";
import { BlogApi } from "@/domains/services/blogs.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useLocation, useParams } from "react-router-dom";

const PostEdit = () => {
  const { toast } = useToast();
  const { id } = useParams<{ id: string }>();
  const { state: BlogState } = useLocation();

  const form = useForm<BlogsSchemaType>({
    resolver: zodResolver(BlogsSchema),
    defaultValues: {
      title: BlogState?.title || "",
      content: BlogState?.content || "",
      images: BlogState?.imageUrl || [],
    },
  });

  const onSubmit = async (data: BlogsSchemaType) => {
    const response = id
      ? await BlogApi.putBlog(id, data)
      : await BlogApi.postBlog(data);

    if (response?.isSuccess) {
      toast({
        title: "Success",
        description: "Blog post created successfully",
      });
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
          className="grid grid-cols-2 gap-4 "
        >
          <FormField
            control={form.control}
            name="images"
            render={({ field: { onChange, value, ...field } }) => (
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
                      console.log("value", value);
                      onChange(files);
                    }}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
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
