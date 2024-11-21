export interface ProductBodyRequest {
  license: number;
  name: string;
  description: string;
  price: number;
  typeIds: string[];
  softwareIds: string[];
  files: (string | Blob)[];
  modelMaterialFiles: (string | Blob)[];
  fbx: Blob | string;
  obj: Blob | string;
  glb: Blob | string;
}
