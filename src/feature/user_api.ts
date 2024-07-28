import { axiosInstance } from "../configs";

export const userApi = {
  getProfile: () => axiosInstance.get("/user/profile"),
  // updateProfile: (data: any) => axiosInstance.put("/user/profile", data),
  // changePassword: (data: any) => axiosInstance.put("/user/profile/change-password", data),
};
