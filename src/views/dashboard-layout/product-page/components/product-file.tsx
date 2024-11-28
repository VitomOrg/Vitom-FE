import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import { ProductDetail } from "@/domains/models/products";

interface ProductFilesProps {
  product: ProductDetail;
}

export function ProductFiles({ product }: ProductFilesProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Files</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div>
            <p className="font-medium">FBX File</p>
            <p className="text-sm text-muted-foreground">Download FBX format</p>
          </div>
          <Button variant="outline" size="sm" asChild>
            <a href={product.fbxUrl} download>
              <FileDown className="w-4 h-4 mr-2" />
              Download
            </a>
          </Button>
        </div>
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div>
            <p className="font-medium">OBJ File</p>
            <p className="text-sm text-muted-foreground">Download OBJ format</p>
          </div>
          <Button variant="outline" size="sm" asChild>
            <a href={product.objUrl} download>
              <FileDown className="w-4 h-4 mr-2" />
              Download
            </a>
          </Button>
        </div>
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div>
            <p className="font-medium">GLB File</p>
            <p className="text-sm text-muted-foreground">Download GLB format</p>
          </div>
          <Button variant="outline" size="sm" asChild>
            <a href={product.glbUrl} download>
              <FileDown className="w-4 h-4 mr-2" />
              Download
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
