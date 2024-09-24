import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui";
import { ReviewResponse } from "@/domains/models/reviews/review.response";
import { pastOfDate } from "@/lib/helper";
import { Star } from "lucide-react";
import React from "react";

interface ReviewItemProps {
  review: ReviewResponse;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ review }) => {
  return (
    <div className="grid grid-cols-9 gap-4 p-4 rounded-lg shadow-md bg-primary/5">
      <div className="flex items-start justify-center col-span-1">
        <Avatar className="w-12 h-12">
          <AvatarImage src={review.productId} alt={review.username} />
          <AvatarFallback>
            {review.username.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="col-span-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-semibold">{review.username}</div>
            <div className="text-sm text-muted-foreground">
              {pastOfDate(review.createdAt.toString())}
            </div>
          </div>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={`w-5 h-5 ${
                  index < review.rating ? "text-yellow-400" : "text-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
        <article className="mt-4 leading-relaxed ">{review.content}</article>
      </div>
    </div>
  );
};

export default ReviewItem;
