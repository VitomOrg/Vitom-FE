export interface PaymentParamsRequest {
  code: string;
  id: string;
  cancel: boolean;
  status: string;
  orderCode: number;
}
