import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui";
import { BlogResponse } from "@/domains/models/blogs/blog.response";
import { cn } from "@/lib";
import { ArrowRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

interface CartBlogProps {
  className?: string;
  blogData: BlogResponse;
}

const CartBlog: React.FC<CartBlogProps> = ({ className, blogData }) => {
  const navigation = useNavigate();

  return (
    <Card className={cn("", className)}>
      <CardHeader>
        {/* <ImageWithFallback src="/images/blog/1.jpg" alt="blog" /> */}
        <div>
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage
                src={blogData.userImageUrl}
                alt={blogData.username}
              />
              <AvatarFallback>
                <span>
                  {blogData.username.charAt(0).toUpperCase()}
                  {blogData.username.charAt(1).toUpperCase()}
                </span>
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold text">{blogData.username}</div>
              <div className="text-sm text-muted-foreground">
                {new Date(blogData.createdAt).toDateString()}
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-2xl font-semibold">
          {blogData.title}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button
          variant="ghost"
          className="space-x-2 "
          onClick={() => navigation(blogData.id)}
        >
          <span className="font-semibold hover:underline">Read More</span>
          <ArrowRight className="size-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CartBlog;
