import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { Badge } from "@/components/ui/badge";
import { ProductDetail } from "@/domains/models/products";

interface ProductMetadataProps {
  product: ProductDetail;
}

export function ProductMetadata({ product }: ProductMetadataProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Metadata</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div>
          <p className="text-sm font-medium">Types</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {product.types.map((type) => (
              <Badge key={type.id} variant="secondary">
                {type.name}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-medium">Software Compatibility</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {product.softwares.map((software) => (
              <Badge key={software.id} variant="secondary">
                {software.name}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
