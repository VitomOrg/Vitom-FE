import { Card } from "@/components/ui";
import React from "react";

const className = {
  cardContainer:
    "border border-foreground p-4 rounded-lg bg-secondary bg-opacity-30 shadow-lg shadow-primary/40 ",
  heading: "text-lg font-semibold text-secondary-foreground",
  value: "text-4xl font-bold text-primary",
  text: "text-sm text-secondary-foreground",
};

interface PreCardProps {
  heading: string;
  value: string;
  text: string;
}

const PreCard: React.FC<PreCardProps> = ({ heading, value, text }) => {
  return (
    <Card className={className.cardContainer}>
      <h2 className={className.heading}>{heading}</h2>
      <p className={className.value}>{value}</p>
      <p className={className.text}>{text}</p>
    </Card>
  );
};

export default PreCard;
