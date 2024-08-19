import { User } from "./user";

export interface TokenResponse {
  User: User;
  aud: string;
  exp: number;
  role: string;
  nameidentifier: string;
  iss: string;
  jti: string;
}
