import { ReviewPageRequest } from "@/domains/models/reviews/review-page.request";
import { ReviewResponse } from "@/domains/models/reviews/review.response";
import { Value } from "@/domains/models/root/root.response";
import { ReviewApi } from "@/domains/services/reviews.service";
import { QueryKey } from "@/domains/stores/query-key";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

type UseListReviewParams = {
  queryOptions?: Omit<
    UseQueryOptions<Value<ReviewResponse[]>>,
    "queryKey" | "queryFn"
  >;
  options?: ReviewPageRequest;
};

export function UseReviewList({ queryOptions, options }: UseListReviewParams) {
  const {
    data: review,
    isLoading: isLoadingReview,
    error: errorReview,
    refetch: refetchReview,
  } = useQuery({
    ...queryOptions,
    queryKey: [QueryKey.LIST_REVIEW, options],
    queryFn: () => ReviewApi.getReviewByProduct(options!),
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return {
    review,
    isLoadingReview,
    errorReview,
    refetchReview,
  };
}
