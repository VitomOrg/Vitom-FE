import axios from "axios";
import { axiosInstance } from "../configs";

export const userApi = {
  getProfile: async () => {
    try {
      const response = await axiosInstance("/user");
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },
};
