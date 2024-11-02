export interface BlogOntopResponse {
  topBlogs: TopBlog[];
}

export interface TopBlog {
  id: string;
  title: string;
  createdAt: Date;
  author: string;
}
