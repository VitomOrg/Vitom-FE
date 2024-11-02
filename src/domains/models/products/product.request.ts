export interface ProductRequest {
  license: number;
  name: string;
  description: string;
  price: number;
  typeIds: string[];
  softwareIds: string[];
  files: Blob[];
  modelMaterialFiles: Blob[];
  fbx: Blob;
  obj: Blob;
  glb: Blob;
}
