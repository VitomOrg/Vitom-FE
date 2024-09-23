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
      <section className="flex flex-wrap justify-start w-full gap-2.5">
        {[...Array(8)].map((_, index) => (
          <Card className="h-[400px]" key={index}>
            <CardHeader>
              <Skeleton className="w-[200px] h-[260px]" />
            </CardHeader>
            <CardFooter className="flex flex-col gap-3">
              <Skeleton className="w-[200px] h-5" />
              <Skeleton className="w-[200px] h-5" />
            </CardFooter>
          </Card>
        ))}
      </section>
    );
  }

  return (
    <section className="flex flex-wrap justify-start w-full gap-2.5">
      {data && data.data.map((item) => <CardItem key={item.id} data={item} />)}
    </section>
  );
};

export default ListItem;
