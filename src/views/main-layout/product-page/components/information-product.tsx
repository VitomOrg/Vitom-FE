import DownloadFile from "@/components/download-file/download-file";
import { ModelViewer } from "@/components/test/view";
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
import { ProductDetail } from "@/domains/models/products/product-detail.response";
import { RootResponse, Value } from "@/domains/models/root/root.response";
import { ProductApi } from "@/domains/services";
import { CartApi } from "@/domains/services/carts.service";
import { BookmarkPlus, CreditCard, Download, Heart } from "lucide-react";
import React from "react";

interface InformationProductProps {
  product: ProductDetail;
  isLoading: boolean;
  refetch: () => void;
}

const InformationProduct: React.FC<InformationProductProps> = ({
  product,
  isLoading,
  refetch,
}) => {
  const { toast } = useToast();

  const handlePurchase = async (id: string) => {
    const response = await CartApi.postCart({ productId: id });

    if (response.isSuccess) {
      const checkoutResponse = await CartApi.postCartCheckout();

      if (checkoutResponse) {
        window.location.href = checkoutResponse.checkoutUrl;
      }
    } else {
      toast({
        title: "Error",
        description: response.errors[0] as string,
      });
    }
  };

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

  const handleLike = async (id: string) => {
    await ProductApi.putProductLiked(id)
      .then(() => {
        refetch();
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
        <div className="w-full lg:w-1/2">
          <Card>
            <Skeleton className="h-[400px]" />
          </Card>
        </div>

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
          <ModelViewer
            glbUrl={product.glbUrl}
            productName={product.name}
            handleLike={() => {
              handleLike(product.id);
            }}
            isLiked={product.isLiked}
          />
        </div>
        <div className="space-y-4">
          {/* <h1 className="text-3xl font-bold ">{product.name}</h1> */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(product.price)}
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
                <Heart className="mr-1 size-4" /> {product.totalLiked} likes
              </span>
            </div>
            {product.downloadUrl.length !== 0 ? (
              <div className="flex justify-center gap-3">
                <DownloadFile
                  fileName={product.name}
                  filePath={product.downloadUrl}
                  title="Download"
                />
              </div>
            ) : (
              <Button
                variant="outline"
                className="w-full bg-foreground text-background hover:bg-foreground/80 hover:text-background/80"
                onClick={() => handlePurchase(product.id)}
              >
                <CreditCard className="mr-2 size-4" /> Purchase
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
