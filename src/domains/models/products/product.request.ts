export interface ProductRequest {
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
