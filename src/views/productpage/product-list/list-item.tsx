import CardItem from "@/components/common/card_item";
import { Card, CardFooter, CardHeader, Skeleton } from "@/components/ui";
import { ProductResponse } from "@/domains/models/products/product.response";
import { Value } from "@/domains/models/root/root.response";
import React from "react";

interface ListItemProps {
  data: Value<ProductResponse[]>;
  isLoading: boolean;
}

const ListItem: React.FC<ListItemProps> = ({ data, isLoading }) => {
  if (isLoading) {
    return (
      <section className="grid grid-cols-2 gap-5 my-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {[...Array(8)].map((_, index) => (
          <Card className="col-span-1" key={index}>
            <CardHeader>
              <Skeleton className="w-full h-[260px]" />
            </CardHeader>
            <CardFooter className="flex flex-col gap-3">
              <Skeleton className="w-full h-5" />
              <Skeleton className="w-full h-5" />
            </CardFooter>
          </Card>
        ))}
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 gap-5 my-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:grid-cols-2">
      {data &&
        data.data.map((item) => (
          <div key={item.id} className="col-span-1">
            <CardItem data={item} />
          </div>
        ))}
    </section>
  );
};

export default ListItem;
