import { handleApiCall } from "@/lib/handle-api-call";

export const UserApi = {
  getUser: async (): Promise<string> => {
    return handleApiCall("get", "/users") as Promise<string>;
  },
  changeUserToArtist: async () => {},
  getProductUserLiked: async () => {},
};
