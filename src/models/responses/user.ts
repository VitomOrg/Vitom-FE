export interface User {
  Id: string;
  Email: string;
  UserName: string;
  EmailConfirm: number;
  PasswordHash: string;
  FirstName: string;
  LastName: string;
  Phone: string;
  Gender: number;
  Address: string | null;
  Code: string | null;
  Role: number;
  AccessFailedCount: number;
  Status: number;
  OrderGroup: string | null;
  Orders: string | null;
}
