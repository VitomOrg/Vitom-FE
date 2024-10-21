export interface ReportsResponse {
  systemTotalIncome: number;
  systemTotalTransaction: number;
  systemTotalProduct: number;
  systemTotalUser: number;
  updateAt: null;
  monthlyIncomeResponses: MonthlyIncomeResponses;
}

export interface MonthlyIncomeResponses {
  data: [];
  pageIndex: number;
  pageSize: number;
  totalPages: number;
}
