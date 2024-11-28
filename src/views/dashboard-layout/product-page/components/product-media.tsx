import ViewGlTF from "@/components/three_ui/gltf/view-gltf";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui";
import { ProductDetail } from "@/domains/models/products";

interface ProductMediaProps {
  product: ProductDetail;
}

export function ProductMedia({ product }: ProductMediaProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Media</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="images">
          <TabsList className="mb-4">
            <TabsTrigger value="images">Images</TabsTrigger>
            <TabsTrigger value="materials">Materials</TabsTrigger>
            <TabsTrigger value="models">Models</TabsTrigger>
          </TabsList>
          <TabsContent value="images">
            <div className="grid grid-cols-2 gap-4">
              {product.images.map((image) => (
                <div
                  key={image.id}
                  className="relative overflow-hidden border rounded-lg aspect-square"
                >
                  <img
                    src={image.url}
                    alt="Product image"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="materials">
            <div className="grid grid-cols-2 gap-4">
              {product.modelMaterials.map((material) => (
                <div
                  key={material.id}
                  className="relative overflow-hidden border rounded-lg aspect-square"
                >
                  <img
                    src={material.url}
                    alt="Material image"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="models">
            <div className="grid grid-cols-3 gap-2 h-96">
              <ViewGlTF url={product.fbxUrl} format="fbx" />
              <ViewGlTF url={product.glbUrl} format="gltf" />
              <ViewGlTF url={product.objUrl} format="obj" />
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
