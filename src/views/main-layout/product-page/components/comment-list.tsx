import ReviewItem from "@/components/common/review_item";
import { Label, Separator } from "@/components/ui";
import { ReviewResponse } from "@/domains/models/reviews/review.response";
import { Value } from "@/domains/models/root/root.response";
import { cn } from "@/lib";
import React from "react";

interface CommentListProps {
  className?: string;
  data: Value<ReviewResponse[]>;
  isLoading: boolean;
}

const CommentList: React.FC<CommentListProps> = ({ className, data }) => {
  return (
    <div className={cn("", className)}>
      <Label className="text-xl">
        ({data?.data.length}) {data?.data.length === 1 ? "Review" : "Reviews"}
      </Label>
      <div className="py-4 space-y-3">
        {data &&
          data.data.map((review) => (
            <div key={review.id} className="space-y-3">
              <ReviewItem review={review} />
              <Separator />
            </div>
          ))}
      </div>
    </div>
  );
};

export default CommentList;
