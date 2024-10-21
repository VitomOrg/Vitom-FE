import { Button } from "@/components/ui";
import { useAuth } from "@clerk/clerk-react";
import { ArrowBigRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  const { isSignedIn } = useAuth();
  return (
    <section className="container grid py-56 hero place-content-center">
      <div className="container px-4 mx-auto text-center">
        <h1 className="mb-2 text-2xl font-bold md:text-4xl text-accent-foreground">
          Vitom - Unleash Your 3D World
        </h1>
        <h2 className="mb-4 text-lg font-semibold md:text-xl text-accent-foreground/80">
          Discover a Treasure Trove of Unique 3D Models
        </h2>
        <p className="max-w-full mx-auto mb-4 text-sm text-center md:text-base text-accent-foreground/70">
          Browse, purchase, and download high-quality 3D model files. Unlock
          your creativity with detailed designs, ready for any project.
        </p>

        {!isSignedIn && (
          <NavLink to="/sign-in">
            <Button className="space-x-2 font-semibold">
              <span>Get Started</span>
              <ArrowBigRight className="size-6" />
            </Button>
          </NavLink>
        )}
      </div>
    </section>
  );
};

export default Hero;
