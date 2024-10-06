import { Separator } from "@/components/ui";

const BlogOnTop = () => {
  return (
    <main className="container py-8 rounded-lg bg-secondary">
      <div>Top Blog</div>
      <Separator className="my-4 border border-muted-foreground" />
      <div className="space-y-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <div className="flex gap-4" key={index}>
            <div>
              <span className="text-3xl font-semibold">{index + 1}</span>
            </div>
            <div>
              <div>Blog Title</div>
              <span className="text-muted-foreground">
                <span>Author</span>
                <span className="mx-2">|</span>
                <span>Date</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default BlogOnTop;
