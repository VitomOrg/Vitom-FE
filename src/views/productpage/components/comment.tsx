import { Button } from "@/components/ui";
import { UseReviewList } from "@/domains/stores/query-hook/reviews/use-review-list";
import CommentForm from "@/views/productpage/components/comment-form";
import CommentList from "@/views/productpage/components/comment-list";
import { Eye, Loader } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Comment = () => {
  const { id } = useParams<{ id: string }>();
  const [pageSize, setPageSize] = useState<number>(5);

  const { data, refetch, isLoading } = UseReviewList({
    options: {
      productId: id || "",
      pageIndex: 1,
      pageSize: pageSize,
    },
  });

  return (
    <section className="grid grid-cols-1 gap-4 my-10 md:grid-cols-5">
      <div className="md:col-span-3">
        <CommentList data={data!} isLoading={isLoading} />
        <Button
          className="w-full mt-4 space-x-2"
          variant="outline"
          onClick={() => setPageSize(pageSize + 5)}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex flex-row items-center gap-2">
              <Loader className="animate-spin size-4" />
              <span>Loading...</span>
            </div>
          ) : (
            <>
              <Eye className="size-4" />
              <span>View More</span>
            </>
          )}
        </Button>
      </div>
      <div className="md:col-span-2">
        <CommentForm refetch={refetch} />
      </div>
    </section>
  );
};

export default Comment;
