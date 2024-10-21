export interface ProductBodyRequest {
  license: number;
  name: string;
  description: string;
  price: number;
  typeIds: string[];
  softwareIds: string[];
  file: [];
  modelMaterialFiles: [];
  fbx: string;
  obj: string;
  glb: string;
}
