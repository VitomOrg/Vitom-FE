import Content from "@/views/main-layout/blog-page/components/content";
import Hero from "@/views/main-layout/blog-page/components/hero";

const BlogPage = () => {
  return (
    <div className="container py-3">
      <Hero />
      <Content />
    </div>
  );
};

export default BlogPage;
