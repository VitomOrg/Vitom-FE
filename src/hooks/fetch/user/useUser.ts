import { createGlobalState } from "@/configs";

import { QueryKey } from "@/constants/query_key";
import { userApi } from "@/feature";
import { User } from "@/models/responses";

export const useUserState = createGlobalState<User>(
  QueryKey.USER,
  userApi.getProfile
);
