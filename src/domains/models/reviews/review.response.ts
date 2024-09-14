export interface ReviewResponse {
  id: string;
  createdAt: Date;
  productId: string;
  productName: string;
  userId: string;
  username: string;
  rating: number;
  content: string;
}
