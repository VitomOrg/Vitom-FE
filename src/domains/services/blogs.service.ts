import { BlogPageRequest } from "@/domains/models/blogs/blog-page.request";
import { BlogRequest } from "@/domains/models/blogs/blog.request";
import { BlogResponse } from "@/domains/models/blogs/blog.response";
import { Value } from "@/domains/models/root/root.response";
import { handleApiCall } from "@/lib/handle-api-call";

export const BlogApi = {
  getBlog: async (options: BlogPageRequest): Promise<Value<BlogResponse[]>> => {
    return handleApiCall<Value<BlogResponse[]>>("get", "/blogs", {
      params: options,
    }) as Promise<Value<BlogResponse[]>>;
  },

  postBlog: async (data: BlogRequest): Promise<null> => {
    return handleApiCall<null>("post", "/blogs", data) as Promise<null>;
  },

  putBlog: async (data: BlogRequest, id: string): Promise<null> => {
    return handleApiCall<null>("put", `/blogs/${id}`, data) as Promise<null>;
  },
};
