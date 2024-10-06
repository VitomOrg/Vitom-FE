import ImageWithFallback from "@/components/common/image_with_callback";
import {
  Badge,
  Button,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui";
import { ProductResponse } from "@/domains/models/products/product.response";
import { getFirebaseImageUrl, pastOfDate } from "@/lib/helper";
import Show from "@/lib/show";
import {
  DownloadIcon,
  ClipboardList,
  Award,
  CircleDollarSign,
  HeartIcon,
} from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface CardItemProps {
  data: ProductResponse;
}

const CardItem: React.FC<CardItemProps> = ({ data }) => {
  const navigation = useNavigate();
  const [image, setImage] = useState<string>();

  if (data.imageUrls && data.imageUrls.length > 0 && data.imageUrls[0]) {
    getFirebaseImageUrl(data.imageUrls[0]).then((url) => setImage(url));
  }

  return (
    <div
      className={`relative mb-4 rounded-lg shadow-md shadow-muted border-2 ${
        data.license.toLowerCase() === "pro"
          ? "border-primary"
          : "border-secondary"
      }`}
    >
      <div className="relative w-full overflow-hidden rounded-lg shadow-lg group h-72">
        <ImageWithFallback src={image!} alt={data.name} />
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
      <div>
        <Show>
          <Show.When isTrue={data.license.toLowerCase() === "pro"}>
            <div className="absolute top-0 right-0 flex items-center gap-2 p-2 rounded-tr-sm rounded-bl-sm bg-primary/65">
              <Award className="size-5" />
              <span className="hidden font-semibold">Pro</span>
            </div>
          </Show.When>
        </Show>
      </div>

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
