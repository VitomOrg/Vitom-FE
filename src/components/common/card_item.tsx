import ObjView from "@/components/test";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { LucideHeart } from "lucide-react"; // Added filled heart icon
import React from "react";

interface CardItemProps {
  filePath: string;
}

const CardItem: React.FC<CardItemProps> = ({ filePath }) => {
  return (
    <Card>
      <CardHeader>
        <div className="rounded-lg bg-secondary h-[350px] relative">
          <Button
            variant="ghost"
            className="absolute z-10 right-2 top-2"
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            <LucideHeart size={24} />
          </Button>
          <ObjView />
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle>Card</CardTitle>
        <CardDescription className="text-wrap">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quae
          doloremque
        </CardDescription>
      </CardContent>
      <CardFooter>
        <div className="flex justify-between w-full">
          <Button>View</Button>
          <Button>Download</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CardItem;
