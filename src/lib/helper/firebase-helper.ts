import { storage } from "@/configs";
import { getDownloadURL, ref } from "firebase/storage";

export const getModelUrl = async (model: string) => {
  try {
    const modelRef = ref(storage, model);

    await getDownloadURL(modelRef);
  } catch (error) {
    console.error(error);
  }
};
