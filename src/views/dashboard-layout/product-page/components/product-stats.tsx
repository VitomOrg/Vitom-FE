import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import { ProductDetail } from "@/domains/models/products";
import { Heart, Download } from "lucide-react";

interface ProductStatsProps {
  product: ProductDetail;
}

export function ProductStats({ product }: ProductStatsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Statistics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 p-4 border rounded-lg">
            <Download className="w-5 h-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Total Purchases</p>
              <p className="text-2xl font-bold">{product.totalPurchases}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-4 border rounded-lg">
            <Heart className="w-5 h-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium">Total Likes</p>
              <p className="text-2xl font-bold">{product.totalLiked}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
