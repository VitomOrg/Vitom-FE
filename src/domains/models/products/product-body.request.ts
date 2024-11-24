export interface ProductBodyRequest {
  license: number;
  name: string;
  description: string;
  price: number;
  typeIds: string[];
  softwareIds: string[];
  files: [string | Blob];
  modelMaterialFiles: [string | Blob];
  fbx: string | Blob;
  obj: string | Blob;
  glb: string | Blob;
}

export interface ProductEditRequest {
  license: number;
  name: string;
  description: string;
  price: number;
  typeIds: string[];
  softwareIds: string[];
  files: string[];
  modelMaterialFiles: string[];
  fbx: string;
  obj: string;
  glb: string;
}
