import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import { UseProductDetail } from "@/domains/stores/query-hook/product/use-product-detail";
import Comment from "@/views/productpage/components/comment";
import InformationProduct from "@/views/productpage/components/information-product";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [tab, setTab] = useState<string>("descriptions");

  const { data, isLoading } = UseProductDetail({
    queryOptions: {},
    id: id!,
  });

  return (
    <main className="container">
      <InformationProduct data={data!} isLoading={isLoading} />
      <Tabs className="mt-10" value={tab} onValueChange={setTab}>
        <TabsList className="grid w-full grid-cols-2 h-fit ">
          <TabsTrigger value="descriptions">Description</TabsTrigger>
          <TabsTrigger value="comments">Comments</TabsTrigger>
        </TabsList>
        <TabsContent value="descriptions">
          <div className="my-10">
            <h2 className="text-2xl font-bold text-foreground">Description</h2>
            <p>{data?.description}</p>
          </div>
        </TabsContent>
        <TabsContent value="comments">
          <Comment />
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default ProductDetailPage;
