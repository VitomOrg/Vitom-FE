import { axiosInstance } from "@/configs";
import { handleApiCall } from "@/lib/handle-api-call";
import axios from "axios";

export const UserApi = {
  getUser: async (): Promise<string> => {
    return handleApiCall<string>("get", "/users", true) as Promise<string>;
  },

  putUserAdmin: async (): Promise<boolean | undefined> => {
    try {
      const response = await axiosInstance.put("/users/admin");
      if (response.status === 204) {
        return true;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },

  putUserArtist: async (): Promise<boolean | undefined> => {
    try {
      const response = await axiosInstance.put("/users/artist");
      if (response.status === 204) {
        return true;
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },
};
