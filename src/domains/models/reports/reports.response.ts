import { Value } from "@/domains/models/root/root.response";

export interface ReportsResponse {
  systemTotalIncome: number;
  systemTotalTransaction: number;
  systemTotalProduct: number;
  systemTotalUser: number;
  updateAt: null;
  monthlyIncomeResponses: Value<MonthlyIncomeResponses[]>;
}

export interface MonthlyIncomeResponses {
  year: number;
  month: number;
  TotalIncome: number;
  TotalTransaction: number;
  CreatedAt: Date;
  UpdatedAt: Date;
}
