import { Card } from "@/components/ui";
import React from "react";

const cardContainerClasses = "border border-foreground p-4 rounded-lg";
const headingClasses = "text-xl font-semibold text-secondary-foreground";
const valueClasses = "text-2xl font-bold text-primary";
const textClasses = "text-sm text-secondary-foreground";

interface PreCardProps {
  heading: string;
  value: string;
  text: string;
}

const PreCard: React.FC<PreCardProps> = ({ heading, value, text }) => {
  return (
    <Card className={cardContainerClasses}>
      <h2 className={headingClasses}>{heading}</h2>
      <p className={valueClasses}>{value}</p>
      <p className={textClasses}>{text}</p>
    </Card>
  );
};

export default PreCard;
