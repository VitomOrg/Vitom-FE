import { useToast } from "@/components/ui";
import { ReviewsSchema } from "@/domains/schemas/reviews.schema";
import { ReviewApi } from "@/domains/services";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface CreateReviewProps {
  id: string | undefined;
  refetch: () => void;
}

const useCreateReview = ({ id, refetch }: CreateReviewProps) => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof ReviewsSchema>>({
    resolver: zodResolver(ReviewsSchema),
    defaultValues: {
      productId: id,
      rating: 0,
      content: "",
    },
  });

  const onSubmit = form.handleSubmit(
    async (values: z.infer<typeof ReviewsSchema>) => {
      const response = await ReviewApi.createReview(values);

      if (response.isSuccess) {
        refetch();
        toast({
          title: "Review created successfully",
          description: "Your review has been created successfully",
        });
      } else {
        toast({
          title: "Review creation failed",
          description: "There was an error creating your review",
        });
      }

      form.reset();
    }
  );

  return {
    form,
    onSubmit,
  };
};

export default useCreateReview;
