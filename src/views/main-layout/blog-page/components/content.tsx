import Search from "@/components/common/search";
import useBlog from "@/domains/stores/query-hook/blogs/useBlog";
import { usePaginationStore } from "@/domains/stores/zustand/pagination";
import { useSearchStore } from "@/domains/stores/zustand/search";
import BlogList from "@/views/main-layout/blog-page/components/blog-list";
import BlogOnTop from "@/views/main-layout/blog-page/components/blog-on-top";

const Content = () => {
  const { page } = usePaginationStore();
  const { search } = useSearchStore();

  const { data, isLoading, error } = useBlog({
    options: {
      keyword: search ? search : undefined,
      pageIndex: page.pageIndex,
      pageSize: 6,
    },
  });

  return (
    <main className="container grid grid-cols-6 gap-6 my-10 ">
      <div className="col-span-4">
        <BlogList data={data!} isLoading={isLoading} error={error} />
      </div>
      <div className="col-span-2 space-y-3">
        <Search placeholder="Find a blog ..." />
        <BlogOnTop />
      </div>
    </main>
  );
};

export default Content;
