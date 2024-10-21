export interface SoftwareResponse {
  id: string;
  createdAt: Date;
  name: string;
  description: string;
  totalPurchases: number;
}

export interface SoftwareOfProductResponse {
  software: string;
  products: Product[];
}

export interface Product {
  id: string;
  createdAt: Date;
  userId: string;
  license: string;
  name: string;
  description: string;
  types: string[];
  imageUrls: string[];
  price: number;
  downloadUrl: string;
  totalPurchases: number;
  totalLiked: number;
}
