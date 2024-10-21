import { BlogResponse } from "@/domains/models/blogs/blog.response";
import { formatFromISOString, FormatType } from "@/lib";
import BlogImageSwiper from "@/views/main-layout/blog-page/components/blog-image-swiper";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui";

interface DetailContentProps {
  data: BlogResponse;
  isLoading: boolean;
  error: Error | null;
}

const DetailContent: React.FC<DetailContentProps> = ({
  data,
  isLoading,
  error,
}) => {
  if (isLoading) {
    return (
      <section className="container p-4 mx-auto my-12 rounded-lg shadow-lg md:p-8 bg-card text-card-foreground">
        <Skeleton className="h-64 mb-4 rounded-lg" />
        <Skeleton className="h-8 mb-4" />
        <Skeleton className="h-4 mb-2" />
        <Skeleton className="h-4 mb-2" />
        <Skeleton className="h-4 mb-2" />
      </section>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-destructive">
        Error: {error.message}
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen text-muted-foreground">
        Data not found
      </div>
    );
  }

  return (
    <section className="container p-6 mx-auto border border-gray-300 rounded-lg shadow-lg md:p-8 bg-card text-card-foreground">
      <h1 className="mb-4 text-4xl font-extrabold text-center transition duration-200 hover:text-primary">
        {data.title}
      </h1>

      <div className="mb-6">
        <BlogImageSwiper imageList={data.imageUrl || []} />
      </div>

      <p className="mb-4 text-sm text-center text-gray-500">
        Published on {formatFromISOString(data.createdAt, FormatType.DATETIME)}
      </p>

      <article className="leading-relaxed prose lg:prose-xl max-w-none">
        <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
      </article>

      <div className="mt-8 text-center">
        <Avatar className="mx-auto transition duration-200 border-2 border-gray-200 hover:shadow-lg">
          <AvatarImage src={data.userImageUrl} alt={data.username} />
          <AvatarFallback>
            {data.username.slice(0, 1).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <span className="inline-block px-4 py-2 mt-2 text-sm font-semibold rounded-full bg-muted">
          Written by {data.username}
        </span>
      </div>
    </section>
  );
};

export default DetailContent;
