import assert from "@/assets";
import GlbViewer from "@/components/three_ui/glb";
import { ProductDetail } from "@/domains/models/products/product-detail.response";
import { Button, Card, Skeleton, useToast } from "@/components/ui";
import { Heart, ShoppingCart } from "lucide-react";
import React from "react";
import { useCart } from "@/domains/stores/query-hook/carts/add-to-cart";
import { CartApi } from "@/domains/services/carts.service";
import { RootResponse, Value } from "@/domains/models/root/root.response";

interface InformationProductProps {
  data: ProductDetail;
  isLoading: boolean;
}

const InformationProduct: React.FC<InformationProductProps> = ({
  data,
  isLoading,
}) => {
  const { refetchCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = async (id: string) => {
    await CartApi.postCart({ productId: id })
      .then(() => {
        refetchCart();
        toast({
          title: "Success",
          description: "Added to cart",
        });
      })
      .catch((error: RootResponse<Value<null>>) => {
        toast({
          title: "Error",
          description: error.errors[0] as string,
        });
      });
  };

  if (isLoading) {
    return (
      <section className="flex flex-col gap-6 p-4 lg:flex-row">
        {/* Viewer 3D model skeleton */}
        <div className="w-full lg:w-1/2">
          <Card>
            <Skeleton className="h-[400px]" />
          </Card>
        </div>

        {/* Thông tin sản phẩm skeleton */}
        <div className="w-full lg:w-1/2">
          <Card>
            <div className="p-4">
              <Skeleton className="mb-2 h-[40px]" />
              <Skeleton className="mb-2 h-[20px]" />
              <Skeleton className="mt-4 mb-2 h-[30px]" />
              <Skeleton className="mt-1 mb-2 h-[20px]" />
              <div className="flex gap-4 mt-4">
                <Skeleton className="w-[100px] h-[20px]" />
                <Skeleton className="w-[100px] h-[20px]" />
              </div>
              <Skeleton className="mt-4 mb-2 h-[20px]" />
              <Skeleton className="mt-6 h-[40px]" />
            </div>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-6 p-4 lg:flex-row">
      {/* Viewer 3D model */}
      <div className="w-full lg:w-1/2">
        <GlbViewer filePath={assert.glb} children />
      </div>

      {/* Thông tin sản phẩm */}
      <div className="w-full lg:w-[45%]">
        <Card className="p-8 space-y-6">
          {/* Tên sản phẩm */}
          <h1 className="text-3xl font-bold text-foreground lg:text-4xl">
            {data.name}
          </h1>

          {/* Giá sản phẩm */}
          <p className="text-2xl font-semibold text-primary lg:text-3xl">
            ${data.price.toFixed(2)}
          </p>

          {/* Thông tin bổ sung */}
          <div className="flex flex-wrap gap-4 lg:gap-6">
            <div className="flex items-center space-x-2">
              <Heart className="text-red-500" />
              <span className="text-base text-gray-600 lg:text-lg">
                {data.totalLiked} likes
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <ShoppingCart />
              <span className="text-base text-gray-600 lg:text-lg">
                {data.totalPurchases} purchases
              </span>
            </div>
          </div>

          {/* Giấy phép và ngày tạo */}
          <div className="space-y-2 text-base text-gray-500 lg:text-lg">
            <p>License: {data.license}</p>
            <p>Created on: {new Date(data.createdAt).toLocaleDateString()}</p>
          </div>

          {/* Nút hành động */}
          <div className="flex justify-start gap-6 mt-6">
            <Button className="w-full text-white lg:w-auto bg-primary">
              Buy now
            </Button>
            <Button
              className="w-full text-white lg:w-auto bg-secondary"
              variant="outline"
              onClick={() => {
                handleAddToCart(data.id);
              }}
            >
              Add to cart
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default InformationProduct;
