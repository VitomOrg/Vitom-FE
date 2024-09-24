export interface CollectionsResponse {
  id: string;
  name: string;
  description: string;
  totalLiked: number;
  user: User;
}

export interface User {
  id: string;
  username: string;
  avatar: string;
}
