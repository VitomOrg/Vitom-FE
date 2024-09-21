import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui";
import { SendHorizonal } from "lucide-react";

const ListReason = [
  {
    title: "High-Quality Models",
    description:
      "Our 3D models are meticulously crafted to meet the highest standards.",
  },
  {
    title: "Instant Download",
    description:
      "Get instant access to your models immediately after purchase.",
  },
  {
    title: "Diverse Categories",
    description:
      "Explore a wide range of categories tailored to your project needs.",
  },
  {
    title: "Affordable Pricing",
    description:
      "We offer competitive pricing without compromising on quality.",
  },
  {
    title: "Support for Multiple Formats",
    description:
      "Our models are available in various formats to suit your workflow.",
  },
  {
    title: "24/7 Customer Support",
    description: "Our dedicated team is here to assist you anytime.",
  },
  {
    title: "Frequent Updates",
    description:
      "We constantly update our collection with new models and features.",
  },
];

const ReasonList = () => {
  return (
    <section className="container my-14">
      <div className="mb-8 space-y-4 text-center">
        <h6 className="text-xl font-semibold text-secondary-foreground">
          Why Choose Us?
        </h6>
        <h2 className="text-4xl font-bold text-primary">
          Top Reasons to Buy from Vitom
        </h2>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {ListReason.map((reason, index) => (
          <AccordionItem value={index.toString()} key={index}>
            <AccordionTrigger className="py-3 text-lg font-semibold text-left focus:outline-none hover:no-underline">
              <div className="flex items-center gap-6">
                <SendHorizonal className="size-5" />
                <span>{reason.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="py-2 pl-6 pr-4 text-muted-foreground">
              <p>{reason.description}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default ReasonList;
