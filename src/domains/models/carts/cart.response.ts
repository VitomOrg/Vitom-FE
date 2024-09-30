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
  types: string[];
  imageUrls: string[];
  price: number;
  downloadUrl: string;
  totalPurchases: number;
  totalLiked: number;
}
