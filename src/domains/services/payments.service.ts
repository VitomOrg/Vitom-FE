import { PaymentBodyRequest } from "@/domains/models/payments/payment-body.request";
import { PaymentParamsRequest } from "@/domains/models/payments/payment-params.request";
import { PaymentResponse } from "@/domains/models/payments/payment.response";
import { Value } from "@/domains/models/root/root.response";
import { handleApiCall } from "@/lib/handle-api-call";

export const PaymentApi = {
  getPaymentReturn: async (
    params: PaymentParamsRequest
  ): Promise<Value<PaymentResponse>> => {
    return handleApiCall<Value<PaymentResponse>>("get", "/payment/return", {
      params: params,
    }) as Promise<Value<PaymentResponse>>;
  },

  getPaymentCancel: async (
    params: PaymentParamsRequest
  ): Promise<Value<PaymentResponse>> => {
    return handleApiCall<Value<PaymentResponse>>("get", "/payment/cancel", {
      params: params,
    }) as Promise<Value<PaymentResponse>>;
  },

  postPaymentCheckout: async (body: PaymentBodyRequest): Promise<null> => {
    return handleApiCall<null>(
      "post",
      "/payment/webhook",
      body
    ) as Promise<null>;
  },
};
