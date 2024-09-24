export interface ClerkTokenResponse {
  azp: string;
  created_at: number;
  email: string;
  exp: number;
  iat: number;
  id: string;
  imageurl: string;
  iss: string;
  jti: string;
  nbf: number;
  phonenumber: string | null;
  sub: string;
  username: string;
}
