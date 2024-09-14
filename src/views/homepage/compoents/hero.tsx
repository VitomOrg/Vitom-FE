import { Button } from "@/components/ui";
import { ArrowBigRight } from "lucide-react";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {}, []);

  return (
    <section className="container py-12 hero md:py-20">
      <div className="container px-4 mx-auto text-center">
        <h1 className="mb-4 text-3xl font-bold md:text-5xl text-accent-foreground">
          Vitom - Unleash Your 3D World
        </h1>
        <h2 className="mb-6 text-xl font-semibold md:text-2xl text-accent-foreground/80">
          Discover a Treasure Trove of Unique 3D Models
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-base text-center md:text-lg text-accent-foreground/70">
          Browse, purchase, and download high-quality 3D model files. Unlock
          your creativity with detailed designs, ready for any project.
        </p>
        <Button className="space-x-2 font-semibold">
          <span>Get start</span>
          <ArrowBigRight className="size-6" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
