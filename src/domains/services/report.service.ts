import { axiosInstance } from "@/configs";
import {
  ReportsParamsRequest,
  ReportsResponse,
} from "@/domains/models/reports";
import { RootResponse } from "@/domains/models/root/root.response";
import axios from "axios";

export const ReportApi = {
  getReport: async (
    data?: ReportsParamsRequest
  ): Promise<RootResponse<ReportsResponse> | undefined> => {
    try {
      const response = await axiosInstance.get<RootResponse<ReportsResponse>>(
        "/report",
        { params: data }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },
};
