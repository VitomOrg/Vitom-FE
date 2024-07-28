export interface AI {
  id: string;
  model_urls: ModelUrls;
  thumbnail_url: string;
  progress: number;
  started_at: number;
  created_at: number;
  expires_at: number;
  finished_at: number;
  status: string;
  texture_urls: TextureURL[];
}

export interface ModelUrls {
  glb: string;
  fbx: string;
  usdz: string;
}

export interface TextureURL {
  base_color: string;
  metallic: string;
  normal: string;
  roughness: string;
}
