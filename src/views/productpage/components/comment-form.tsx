/* eslint-disable react-refresh/only-export-components */
import {
  Avatar,
  AvatarImage,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Form,
  Textarea,
  useToast,
} from "@/components/ui";
import { ClerkTokenResponse } from "@/domains/models/clerk/clerk_token.response";
import useCreateReview from "@/domains/stores/query-hook/reviews/use-create-review";
import { getItem } from "@/lib";
import { jwtDecode } from "jwt-decode";
import { Star } from "lucide-react";
import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

interface CommentFormProps {
  refetch: () => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ refetch }) => {
  const { id } = useParams<{ id: string }>();
  const [token, setToken] = useState<string | null>(null);
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const storedToken = getItem("token");
    setToken(storedToken);
  }, []);

  const user = useMemo(() => {
    if (token) {
      return jwtDecode<ClerkTokenResponse>(token);
    }
    return null;
  }, [token]);

  const { form, onSubmit } = useCreateReview({
    id,
    refetch: refetch,
  });

  const {
    formState: { errors },
  } = form;

  useEffect(() => {
    if (errors.content || errors.rating) {
      toast({
        title: "Review creation failed",
        description: errors.content?.message || errors.rating?.message,
      });
    }
  }, [errors.content, errors.rating, toast]);

  // Memoize rating change handlers
  const handleRatingChange = useCallback(
    (index: number) => {
      setRating(index + 1);
      form.setValue("rating", index + 1);
    },
    [form]
  );

  const handleRatingHover = useCallback((index: number) => {
    setHoverRating(index + 1);
  }, []);

  const handleRatingHoverLeave = useCallback(() => {
    setHoverRating(null);
  }, []);

  // Memoize Stars rendering to avoid unnecessary renders
  const starElements = useMemo(
    () =>
      Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={28}
          className={`transition-transform duration-200 cursor-pointer hover:scale-110 ${
            (hoverRating || rating) > index
              ? "text-yellow-400"
              : "text-gray-400"
          }`}
          onClick={() => handleRatingChange(index)}
          onMouseEnter={() => handleRatingHover(index)}
          onMouseLeave={handleRatingHoverLeave}
        />
      )),
    [
      hoverRating,
      rating,
      handleRatingChange,
      handleRatingHover,
      handleRatingHoverLeave,
    ]
  );

  return (
    <div className="flex items-center justify-center py-20">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-col items-center text-center">
          <Avatar className="w-16 h-16">
            <AvatarImage
              src={user?.imageurl}
              alt={user?.id}
              className="object-cover rounded-full"
              loading="lazy" // Lazy loading the avatar image
            />
          </Avatar>

          <CardTitle className="mt-4 text-xl font-semibold">
            Share Your Review
          </CardTitle>
        </CardHeader>

        <Form {...form}>
          <form onSubmit={onSubmit}>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between gap-4 p-4 rounded-lg shadow-lg md:flex-row bg-primary/10">
                <p className="mt-4 text-sm text-center md:text-start md:w-36 text-muted-foreground">
                  Your feedback is important to us
                </p>
                <div className="flex gap-1">{starElements}</div>
              </div>

              <Textarea
                className="w-full"
                placeholder="Write your feedback here... (e.g., product quality, usability, experience)"
                {...form.register("content")}
              />
            </CardContent>

            <CardFooter className="flex flex-col items-center space-y-3">
              <Button type="submit" className="w-full">
                Submit Review
              </Button>
              <span className="text-sm text-center text-muted-foreground">
                Your review will be public after submission
              </span>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default memo(CommentForm);
