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
import { zodResolver } from "@hookform/resolvers/zod";
import { X, PlusCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const PostEdit = () => {
  const { toast } = useToast();
  const [imageUrls, setImageUrls] = useState<string[]>([""]);

  const form = useForm<BlogsSchemaType>({
    resolver: zodResolver(BlogsSchema),
    defaultValues: {
      title: "",
      content: "",
      images: [""],
    },
  });

  function onSubmit(data: BlogsSchemaType) {
    toast({
      title: "Blog post created",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  const addImageField = () => {
    setImageUrls([...imageUrls, ""]);
  };

  const removeImageField = (index: number) => {
    const updatedUrls = imageUrls.filter((_, i) => i !== index);
    setImageUrls(updatedUrls);
    form.setValue("images", updatedUrls);
  };
  return (
    <div className="p-4 ">
      <h1 className="mb-4 text-2xl font-bold">Create a New Blog Post</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your blog post title" {...field} />
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
          <div>
            <FormLabel>Images</FormLabel>
            <FormDescription className="mb-2">
              Add at least one image URL for your blog post.
            </FormDescription>
            {imageUrls.map((_, index) => (
              <FormField
                key={index}
                control={form.control}
                name={`images.${index}`}
                render={({ field }) => (
                  <FormItem className="flex items-center mb-2 space-x-2">
                    <FormControl>
                      <Input placeholder="Enter image URL" {...field} />
                    </FormControl>
                    {index > 0 && (
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => removeImageField(index)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-2"
              onClick={addImageField}
            >
              <PlusCircle className="w-4 h-4 mr-2" />
              Add Another Image
            </Button>
          </div>
          <Button type="submit">Create Blog Post</Button>
        </form>
      </Form>
    </div>
  );
};

export default PostEdit;
