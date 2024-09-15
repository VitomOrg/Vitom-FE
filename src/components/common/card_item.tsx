import ObjView from "@/components/test";
import { Card } from "@/components/ui";
import { cn } from "@/lib";
import React from "react";

interface CardItemProps {
  filePath: string;
  className?: string;
}

const CardItem: React.FC<CardItemProps> = ({ className }) => {
  return (
    <Card className={cn("py-14 min-h-[450px] ", className)}>
      <ObjView />
      {/* <CardHeader>
        <div className="rounded-lg bg-secondary min-h-[350px] relative">
          <Button
            variant="ghost"
            className="absolute z-10 right-2 top-2"
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            <LucideHeart size={24} />
          </Button>
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
      </CardFooter> */}
    </Card>
  );
};

export default CardItem;
