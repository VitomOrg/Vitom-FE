import { axiosInstance } from "@/configs";
import {
  ReportsParamsRequest,
  ReportsResponse,
} from "@/domains/models/reports";
import { RootResponse, Value } from "@/domains/models/root/root.response";
import axios from "axios";

export const ReportApi = {
  getReport: async (
    data: ReportsParamsRequest
  ): Promise<RootResponse<Value<ReportsResponse[]>> | undefined> => {
    try {
      const response = await axiosInstance.get("/reports", {
        params: data,
      });

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },
};
