import { ProductDetail } from "@/domains/models/products/product-detail.response";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Skeleton,
  useToast,
} from "@/components/ui";
import { BookmarkPlus, CreditCard, Download, Heart } from "lucide-react";
import React from "react";
import { CartApi } from "@/domains/services/carts.service";
import { RootResponse, Value } from "@/domains/models/root/root.response";
import DownloadFile from "@/components/download-file/download-file";
import { ModelViewer } from "@/components/test/view";

interface InformationProductProps {
  product: ProductDetail;
  isLoading: boolean;
}

const InformationProduct: React.FC<InformationProductProps> = ({
  product,
  isLoading,
}) => {
  const { toast } = useToast();

  const handleAddToCart = async (id: string) => {
    await CartApi.postCart({ productId: id })
      .then(() => {
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
      })
      .finally(() => {});
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
    <div className="container px-4 py-8 mx-auto">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <div className="flex items-center justify-center w-full mb-4 bg-gray-100 rounded-lg aspect-square">
            <ModelViewer glbUrl={product.glbUrl} />
          </div>
          <div className="grid grid-cols-4 gap-2"></div>
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold ">{product.name}</h1>
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold">
                ${product.price.toFixed(2)}
              </span>
              <Button onClick={() => handleAddToCart(product.id)}>
                <BookmarkPlus className="size-5" />
              </Button>
            </div>
            <p className="mb-4 text-gray-600">{product.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {product.types.map((type) => (
                <Badge key={type} variant="secondary">
                  {type}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {product.softwares.map((software) => (
                <Badge key={software} variant="outline">
                  {software}
                </Badge>
              ))}
            </div>
            <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
              <span>License: {product.license}</span>
              <span>
                Created: {new Date(product.createdAt).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="flex items-center">
                <Download className="w-4 h-4 mr-1" /> {product.totalPurchases}{" "}
                purchases
              </span>
              <span className="flex items-center">
                <Heart className="w-4 h-4 mr-1" /> {product.totalLiked} likes
              </span>
            </div>
            {product.license === "Free" ? (
              <div className="flex justify-center gap-3">
                <DownloadFile
                  fileName={product.name}
                  filePath={product.glbUrl}
                  title="GLB"
                />
                <DownloadFile
                  fileName={product.name}
                  filePath={product.fbxUrl}
                  title="FBX"
                />
                <DownloadFile
                  fileName={product.name}
                  filePath={product.objUrl}
                  title="OBJ"
                />
              </div>
            ) : (
              // <Button variant="outline" className="w-full">
              //   <Download className="w-4 h-4 mr-2" /> Download
              // </Button>
              <Button
                variant="outline"
                className="w-full bg-foreground text-background hover:bg-foreground/80 hover:text-background/80"
              >
                <CreditCard className="w-4 h-4 mr-2" /> Purchase
              </Button>
            )}
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>
                <h2 className="text-xl font-bold">Information</h2>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{product.description}</CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InformationProduct;
