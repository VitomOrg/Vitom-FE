export interface BlogResponse {
  id: string;
  title: string;
  content: string;
  userId: string;
  username: string;
  userImageUrl: string;
  createdAt: Date;
  imageUrl: string[];
}
