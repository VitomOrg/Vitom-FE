import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import { ProductDetail, ProductEditRequest } from "@/domains/models/products";
import { Button } from "@/components/ui";
import { Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProductHeaderProps {
  product: ProductDetail;
}

export function ProductHeader({ product }: ProductHeaderProps) {
  const navigate = useNavigate();
  const handleEditProduct = (product: ProductDetail) => {
    const value: ProductEditRequest = {
      // license: product.license === "Free" ? License.Free : License.Pro,
      name: product.name,
      description: product.description,
      price: product.price,
      typeIds: product.types.map((type) => type.id),
      softwareIds: product.softwares.map((software) => software.id),
      files: product.images.map((image) => image.url),
      modelMaterialFiles: product.modelMaterials.map((model) => model.url),
      fbx: product.fbxUrl,
      obj: product.objUrl,
      glb: product.glbUrl,
    };

    navigate(`/dashboard/products/${product.id}/edit`, { state: value });
  };

  return (
    <Card className="relative">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-2xl font-bold">{product.name}</CardTitle>
            <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
              <span>Created {formatDate(product.createdAt)}</span>
              <span>•</span>
              <span>ID: {product.id}</span>
            </div>
          </div>
          <Badge variant="outline">{product.license}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{product.description}</p>
      </CardContent>
      <Button
        className="absolute bottom-3 right-3"
        onClick={() => handleEditProduct(product)}
      >
        <Pencil className="size-4" />
        <span className="ml-2">Edit</span>
      </Button>
    </Card>
  );
}
