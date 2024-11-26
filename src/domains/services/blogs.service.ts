import { axiosInstance } from "@/configs";
import { BlogEditResponse, BlogOntopResponse } from "@/domains/models/blogs";
import { BlogPageRequest } from "@/domains/models/blogs/blog-page.request";
import { BlogEditRequest } from "@/domains/models/blogs/blog.request";
import { BlogResponse } from "@/domains/models/blogs/blog.response";
import { RootResponse, Value } from "@/domains/models/root/root.response";
import { handleApiCall } from "@/lib/handle-api-call";
import axios from "axios";

export const BlogApi = {
  getBlog: async (
    options?: BlogPageRequest
  ): Promise<Value<BlogResponse[]>> => {
    return handleApiCall<Value<BlogResponse[]>>("get", "/blogs", {
      params: options,
    }) as Promise<Value<BlogResponse[]>>;
  },

  getBlogById: async (Id: string): Promise<BlogResponse> => {
    return handleApiCall<BlogResponse>(
      "get",
      `/blogs/${Id}`
    ) as Promise<BlogResponse>;
  },

  getBlobTop: async (): Promise<
    RootResponse<BlogOntopResponse> | undefined
  > => {
    try {
      const response = await axiosInstance.get("/blogs/top");
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },

  postBlog: async (
    data: BlogEditRequest
  ): Promise<RootResponse<BlogEditResponse> | undefined> => {
    try {
      const response = await axiosInstance.post("/blogs", data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },

  putBlog: async (
    id: string,
    data: BlogEditRequest
  ): Promise<RootResponse<{ imageUrl: string[] }> | undefined> => {
    try {
      const response = await axiosInstance.put(`/blogs/${id}`, data);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },

  deleteBlog: async (Id: string): Promise<null> => {
    return handleApiCall<null>("delete", `/blogs/${Id}`) as Promise<null>;
  },
};
