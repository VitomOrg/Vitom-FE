import { Alert, Button } from "@/components/ui";
import { UseReviewList } from "@/domains/stores/query-hook/reviews/use-review-list";
import Show from "@/lib/show";
import CommentForm from "@/views/main-layout/product-page/components/comment-form";
import CommentList from "@/views/main-layout/product-page/components/comment-list";
import { Eye, Loader, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Comment = () => {
  const { id } = useParams<{ id: string }>();
  const [pageSize, setPageSize] = useState<number>(5);

  const { review, isLoadingReview, refetchReview } = UseReviewList({
    options: {
      productId: id || "",
      pageIndex: 1,
      pageSize: pageSize,
    },
  });

  return (
    <section className="grid grid-cols-1 gap-4 my-10 md:grid-cols-5">
      <div className="md:col-span-3">
        <CommentList data={review!} isLoading={isLoadingReview} />
        <Show>
          <Show.When isTrue={review?.data.length !== 0}>
            <Button
              className="w-full mt-4 space-x-2"
              variant="outline"
              onClick={() => setPageSize(pageSize + 5)}
              disabled={isLoadingReview}
            >
              {isLoadingReview ? (
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
          </Show.When>
          <Show.Else>
            <Alert className="">
              <div className="flex items-center justify-center w-full gap-3">
                <MessageCircle className=" size-5 text-muted-foreground" />
                <span className="text-muted-foreground">No comments yet</span>
              </div>
            </Alert>
          </Show.Else>
        </Show>
      </div>
      <div className="md:col-span-2">
        <CommentForm refetch={refetchReview} />
      </div>
    </section>
  );
};

export default Comment;
