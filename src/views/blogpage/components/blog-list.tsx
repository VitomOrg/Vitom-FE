import Pagination from "@/components/common/pagination";
import { BlogResponse } from "@/domains/models/blogs/blog.response";
import { Value } from "@/domains/models/root/root.response";
import { usePaginationStore } from "@/domains/stores/zustand/pagination";
import CartBlog from "@/views/blogpage/components/cart-blog";
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
      <Pagination
        totalPages={data.totalPages}
        currentPage={activePage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default BlogList;
