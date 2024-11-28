export interface CartResponse {
  cartId: string;
  product: Product;
  priceAtPurchase: number;
}

export interface Product {
  id: string;
  createdAt: Date;
  userId: string;
  license: string;
  name: string;
  description: string;
  types: Software[];
  softwares: Software[];
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

export interface Software {
  id: string;
  name: string;
}
