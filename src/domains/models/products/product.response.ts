export interface ProductResponse {
  id: string;
  createdAt: Date;
  userId: string;
  license: string;
  name: string;
  description: string;
  types: string[];
  price: number;
  downloadUrl: string;
  totalPurchases: number;
  totalLiked: number;
}
