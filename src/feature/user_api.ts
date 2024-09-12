import { axiosInstance } from "../configs";
import { User } from "@/models/responses";
import { handleApi } from "@/lib/handle-api";

export const userApi = {
  getProfile: async (): Promise<User> => {
    const response = await handleApi<User>(async () => {
      const { data } = await axiosInstance.get<User>("/users");
      return data;
    });

    return response as User;
  },
};
