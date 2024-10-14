export interface ProductResponse {
  id: string;
  createdAt: Date;
  userId: string;
  license: string;
  name: string;
  description: string;
  types: string[];
  images: Image[];
  modelMaterials: Image[];
  fbxUrl: string;
  objUrl: string;
  glbUrl: string;
  price: number;
  softwares: string[];
  downloadUrl: string;
  totalPurchases: number;
  totalLiked: number;
}

export interface Image {
  id: string;
  url: string;
}
