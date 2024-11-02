export interface BlogEditResponse {
  topBlogs: TopBlog[];
}

export interface TopBlog {
  id: string;
  title: string;
  createdAt: Date;
  author: string;
}
