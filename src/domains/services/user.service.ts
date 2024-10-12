import { handleApiCall } from "@/lib/handle-api-call";

export const UserApi = {
  getUser: async (): Promise<string> => {
    return handleApiCall<string>("get", "/users", true) as Promise<string>;
  },
};
