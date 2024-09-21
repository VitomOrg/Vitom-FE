import { Card, Label, Skeleton } from "@/components/ui";

const Introduction = () => {
  return (
    <section className="flex flex-col gap-8 p-8 md:flex-row ">
      {/* Left side: Content section */}
      <article className="space-y-4 md:w-1/2">
        <Label className="text-lg ">Lorem Ipsum</Label>

        <h1 className="text-3xl font-bold text-primary">Heading</h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
          porttitor quis nisl turpis eget volutpat turpis et. Etiam rutrum
          viverra. Non vel amet, pharetra, faucibus viverra mi sollicitudin id
          mattis. Aliquet sed viverra dictum nunc ultrices dui dictum ut
          sagittis. Lacus nunc sed in et vitae omare elementum.
        </p>
      </article>

      {/* Right side: Image section */}
      <aside className="md:w-1/2">
        <Card className="flex items-center justify-center transition-shadow duration-300 ease-in-out border border-dashed h-96 border-primary bg-muted hover:shadow-lg">
          <Skeleton className="w-1/2 h-3/4 animate-pulse" />
        </Card>
      </aside>
    </section>
  );
};

export default Introduction;
