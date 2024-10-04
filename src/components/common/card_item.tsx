import {
  Badge,
  Button,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui";
import { ProductResponse } from "@/domains/models/products/product.response";
import { useImageError } from "@/hooks";
import { pastOfDate } from "@/lib/helper";
import Show from "@/lib/show";
import {
  DownloadIcon,
  ClipboardList,
  Award,
  Frown,
  CircleDollarSign,
  HeartIcon,
} from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

interface CardItemProps {
  data: ProductResponse;
}

const CardItem: React.FC<CardItemProps> = ({ data }) => {
  const navigation = useNavigate();
  const { imgError, handleImageError } = useImageError();

  return (
    <div className="relative w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(20%-0.5rem)] mb-4 shadow-md shadow-white rounded-lg">
      <div className="relative w-full overflow-hidden rounded-lg shadow-lg group h-72">
        {!imgError ? (
          <img
            src={data.downloadUrl}
            alt={data.name}
            className="object-cover w-full h-full"
            onError={handleImageError}
          />
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-full gap-3 text-center bg-secondary">
            <Frown className="w-16 h-16 text-gray-500" />
            <span>Sorry for the inconvenience!</span>
          </div>
        )}
        <CardContent className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
          <CardDescription className="flex flex-col gap-2">
            <div className="absolute top-1 start-0">
              <span className="px-4 py-2 text-white bg-opacity-50 rounded-sm bg-primary/60">
                {data.name}
              </span>
            </div>
            <div className="absolute space-x-3 bottom-2 start-2">
              <Button variant="secondary" className="space-x-2">
                <DownloadIcon className="size-4" />
                <span>Download</span>
              </Button>
              <Button className="space-x-2" onClick={() => navigation(data.id)}>
                <ClipboardList className="size-4" />
                <span>View</span>
              </Button>
            </div>
          </CardDescription>
        </CardContent>
      </div>
      <Show>
        <Show.When isTrue={data.license.toLowerCase() === "pro"}>
          <div className="absolute top-0 z-10 p-2 rounded-[0px_0px_20px_20px] end-2 bg-primary">
            <Award className="size-6" />
          </div>
        </Show.When>
      </Show>
      <CardFooter className="flex flex-col items-start gap-3 mt-4 ">
        <div className="flex items-center justify-start w-full gap-4">
          <div className="flex items-center gap-2">
            <CircleDollarSign className="w-5 h-5 text-primary" />
            <span className="text-lg font-semibold">{data.price}</span>
          </div>
          <div className="flex items-center gap-2">
            <HeartIcon className="w-5 h-5 text-red-500" />
            <span className="text-lg">{data.totalLiked}</span>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          {pastOfDate(data.createdAt.toString())}
        </div>

        <div className="flex flex-wrap gap-2">
          {data.types.map((type) => (
            <Badge
              key={type}
              variant="secondary"
              className="px-2 py-1 text-xs rounded-full"
            >
              {type}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </div>
  );
};

export default CardItem;
