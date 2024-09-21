import { Button, Label } from "@/components/ui";
import { ArrowBigRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const Content = () => {
  return (
    <section className="flex flex-col items-start justify-center md:w-1/2 gap-7">
      <article className="space-y-4 ">
        <Label className="text-lg">Lorem Ipsum</Label>
        <h1 className="text-4xl font-bold text-primary">Heading</h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
          porttitor quis nisl turpis eget volutpat turpis et. Etiam rutrum
          viverra. Non vel amet, pharetra, faucibus viverra mi sollicitudin id
          mattis. Aliquet sed viverra dictum nunc ultrices dui dictum ut
          sagittis. Lacus nunc sed in et vitae omare elementum.
        </p>
      </article>
      <NavLink to="/sign-in">
        <Button className="space-x-2">
          <span>Get Started</span>
          <ArrowBigRight className="w-6 h-6" />
        </Button>
      </NavLink>
    </section>
  );
};

export default Content;
