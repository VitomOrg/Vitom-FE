import { RootResponse } from "@/domains/models/root/root.response";
import axios from "axios";

class ApiError extends Error {
  constructor(public message: string, public statusCode: number) {
    super(message);
    this.name = "ApiError";
  }
}

export const handleApi = async <T>(
  api: () => Promise<T>
): Promise<RootResponse<T>> => {
  try {
    const response = await api();
    return response as RootResponse<T>;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || error.message;
      const statusCode = error.response?.status || 500;
      throw new ApiError(message, statusCode);
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
};
