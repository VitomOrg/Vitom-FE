import { createGlobalState } from "@/configs";
import { User } from "@/models";
import { QueryKey } from "../query_key";

export const useUserState = createGlobalState<User>(QueryKey.USER, {
  id: "",
  name: "",
  createdAt: "",
  updatedAt: "",
  deletedAt: "",
  isDeleted: false,
  phoneNumber: "",
});
