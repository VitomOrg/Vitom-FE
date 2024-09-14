import { ReviewPageRequest } from "@/domains/models/reviews/review-page.request";
import { ReviewResponse } from "@/domains/models/reviews/review.response";
import { Value } from "@/domains/models/root/root.response";
import { handleApiCall } from "@/lib/handle-api-call";

export const ReviewApi = {
  listReview: async (
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

  createReview: async () => {},
  updateReview: async () => {},
  deleteReview: async () => {},
};
