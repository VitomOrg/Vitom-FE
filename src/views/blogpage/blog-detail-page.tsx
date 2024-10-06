import { useDetailBlog } from "@/domains/stores/query-hook/blogs/useDetailBlog";
import BlogOnTop from "@/views/blogpage/components/blog-on-top";
import DetailContent from "@/views/blogpage/components/detail-content";
import { useParams } from "react-router-dom";

const BlogDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    throw new Error("ID is required");
  }

  const { data, isLoading, error } = useDetailBlog({
    id,
  });

  return (
    <div className="container grid grid-cols-12 gap-10 my-12">
      <div className="col-span-8">
        <DetailContent data={data!} isLoading={isLoading} error={error} />
      </div>
      <div className="col-span-4">
        <BlogOnTop />
      </div>
    </div>
  );
};

export default BlogDetailPage;
