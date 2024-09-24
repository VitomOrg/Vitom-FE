import { ReviewPageRequest } from "@/domains/models/reviews/review-page.request";
import { ReviewsRequest } from "@/domains/models/reviews/review.request";
import { ReviewResponse } from "@/domains/models/reviews/review.response";
import { Value } from "@/domains/models/root/root.response";
import { handleApiCall } from "@/lib/handle-api-call";

export const ReviewApi = {
  getReviewByProduct: async (
    options: ReviewPageRequest
  ): Promise<Value<ReviewResponse[]>> => {
    return handleApiCall<Value<ReviewResponse[]>>(
      "get",
      `/reviews/product/${options.productId}`,
      {
        params: options,
      }
    ) as Promise<Value<ReviewResponse[]>>;
  },

  createReview: async (data: ReviewsRequest): Promise<null> => {
    return handleApiCall<null>("post", "/reviews", data) as Promise<null>;
  },
};
