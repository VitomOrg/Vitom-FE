import { Button } from "@/components/ui";
import { BlogResponse } from "@/domains/models/blogs/blog.response";
import { Value } from "@/domains/models/root/root.response";
import { usePaginationStore } from "@/domains/stores/zustand/pagination";
import CartBlog from "@/views/blogpage/components/cart-blog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

interface BlogListProps {
  data: Value<BlogResponse[]>;
  isLoading: boolean;
  error: Error | null;
}

const BlogList: React.FC<BlogListProps> = ({ data, isLoading, error }) => {
  const [activePage, setActivePage] = useState(1);
  const { setPage } = usePaginationStore();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= data.totalPages) {
      setActivePage(page);
      setPage({ pageIndex: page, pageSize: 6 });
    }
  };

  return (
    <div>
      {/* <!-- Blog List --> */}
      <div className="grid grid-cols-2 grid-rows-3 gap-6">
        {data.data.map((blog, index) => (
          <CartBlog key={index} blogData={blog} />
        ))}
      </div>

      {/* <!-- Pagination --> */}
      <div className="flex justify-center w-full gap-4 mt-4">
        {/* Previous button */}
        <Button
          variant="ghost"
          onClick={() => handlePageChange(activePage - 1)}
          disabled={activePage === 1} // Disabled when on the first page
        >
          <ChevronLeft />
          <span className="hidden font-semibold ">Previous</span>
        </Button>

        {/* Page numbers */}
        {[...Array(data.totalPages)].map((_, page) => (
          <Button
            key={page + 1}
            variant={activePage === page + 1 ? "default" : "ghost"}
            onClick={() => handlePageChange(page + 1)}
          >
            {page + 1}
          </Button>
        ))}

        {/* Next button */}
        <Button
          variant="ghost"
          onClick={() => handlePageChange(activePage + 1)}
          disabled={activePage === data.totalPages} // Disabled when on the last page
        >
          <span className="hidden font-semibold ">Next</span>
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default BlogList;
