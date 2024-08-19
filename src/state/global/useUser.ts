import { createGlobalState } from "@/configs";

import { QueryKey } from "../query_key";
import { User } from "../../models/responses";
import { userApi } from "../../feature";

export const useUserState = createGlobalState<User>(
  QueryKey.USER,
  userApi.getProfile
);
