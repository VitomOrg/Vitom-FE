import { axiosInstance } from "@/configs";
import { FileEnum } from "@/domains/enums/file.enum";
import { RootResponse } from "@/domains/models/root/root.response";
import axios from "axios";

export const FilesApi = {
  postFile: async (
    file: Blob,
    FileEnum: FileEnum
  ): Promise<RootResponse<string> | undefined> => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("fileEnum", FileEnum.toString());

      const response = await axiosInstance.post("/files", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message);
      }
    }
  },

  // deleteImage: async (productId: string, imageIds: string[]) => {},
};
