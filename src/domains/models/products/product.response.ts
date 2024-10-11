export interface ProductResponse {
  id: string;
  createdAt: Date;
  userId: string;
  license: string;
  name: string;
  description: string;
  types: string[];
  imageUrls: string[];
  model: {
    fbx: string;
    obj: string;
    glb: string;
  };

  price: number;
  downloadUrl: string;
  totalPurchases: number;
  totalLiked: number;
}
