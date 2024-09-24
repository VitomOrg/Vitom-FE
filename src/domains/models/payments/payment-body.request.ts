export interface PaymentBodyRequest {
  code: string;
  desc: string;
  success: boolean;
  data: Data;
  signature: string;
}

export interface Data {
  orderCode: number;
  amount: number;
  description: string;
  accountNumber: string;
  reference: string;
  transactionDateTime: string;
  currency: string;
  paymentLinkId: string;
  code: string;
  desc: string;
}
