import axios from "axios";
import { axiosInstance } from "@/configs";
import { RootResponse, Value } from "@/domains/models/root/root.response";

/**
 * A generic API call handler that wraps an API call and handles errors.
 * It returns a RootResponse of the desired data type.
 * @param method The HTTP method to use (get, post, put, delete).
 * @param url The API endpoint.
 * @param data Optional data for POST and PUT requests.
 * @param isRootResponse Flag to indicate if the response should be of type RootResponse<T>.
 * @returns A promise resolving to the RootResponse of the desired type.
 */
export async function handleApiCall<T>(
  method: "get" | "post" | "put" | "delete",
  url: string,
  option?: unknown,
  isRootResponse: boolean = false
): Promise<T | Value<T> | RootResponse<T>> {
  try {
    // Execute the API call using the specified method

    const response = await axiosInstance[method]<RootResponse<T>>(url, option);

    if (isRootResponse) {
      return response.data;
    }

    return response.data.value;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data as RootResponse<T>;
    } else {
      console.error("Unknown error:", error);
      return Promise.reject(error);
    }
  }
}
