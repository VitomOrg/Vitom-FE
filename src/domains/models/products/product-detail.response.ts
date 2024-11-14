import { listField } from "@/domains/models/products/product.response";

export interface ProductDetail {
  id: string;
  createdAt: Date;
  userId: string;
  license: string;
  name: string;
  description: string;
  types: listField[];
  softwares: listField[];
  images: Image[];
  modelMaterials: Image[];
  fbxUrl: string;
  objUrl: string;
  glbUrl: string;
  price: number;
  downloadUrl: string;
  totalPurchases: number;
  totalLiked: number;
  isLiked: boolean;
}

export interface Image {
  id: string;
  url: string;
}
