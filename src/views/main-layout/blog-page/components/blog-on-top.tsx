import { Separator } from "@/components/ui";
import { useBlogTop } from "@/domains/stores/query-hook/blogs/useBlogTop";
import { formatFromISOString, FormatType } from "@/lib";

const BlogOnTop = () => {
  const { data, isLoading, error } = useBlogTop();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <main className="container py-8 rounded-lg bg-secondary">
      <div>Top Blog</div>
      <Separator className="my-4 border border-muted-foreground" />
      <div className="space-y-5">
        {data.value.topBlogs.map((blog, index) => (
          <div className="flex gap-4" key={index}>
            <div>
              <span className="text-3xl font-semibold">{index + 1}</span>
            </div>
            <div>
              <div>{blog.title}</div>
              <span className="text-muted-foreground">
                <span>{blog.author}</span>
                <span className="mx-2">|</span>
                <span>
                  {formatFromISOString(blog.createdAt, FormatType.DATE)}
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default BlogOnTop;
