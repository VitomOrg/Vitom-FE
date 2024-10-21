import Content from "@/views/main-layout/blog-page/components/content";
import Hero from "@/views/main-layout/blog-page/components/hero";

const BlogPage = () => {
  return (
    <div>
      <div className="w-full">
        <Hero />
        <Content />
      </div>
    </div>
  );
};

export default BlogPage;
