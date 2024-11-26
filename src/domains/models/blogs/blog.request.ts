export interface BlogRequest {
  title: string;
  content: string;
  images: [Blob | string];
}

export interface BlogEditRequest {
  title: string;
  content: string;
  images: string[];
}
