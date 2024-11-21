export interface ProductResponse {
  id: string;
  createdAt: Date;
  userId: string;
  license: "Free" | "Pro";
  name: string;
  description: string;
  types: listField[];
  images: Image[];
  modelMaterials: Image[];
  fbxUrl: string;
  objUrl: string;
  glbUrl: string;
  price: number;
  softwares: listField[];
  downloadUrl: string;
  totalPurchases: number;
  totalLiked: number;
}

export interface Image {
  id: string;
  url: string;
}

export interface listField {
  id: string;
  name: string;
}
