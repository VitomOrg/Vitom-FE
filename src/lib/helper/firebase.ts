import { storage } from "@/configs";
import { getDownloadURL, ref } from "firebase/storage";

export const getFirebaseImageUrl = async (
  imagePath: string
): Promise<string> => {
  const storageRef = ref(storage, imagePath);
  try {
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.error("Error fetching image URL from Firebase:", error);
    return "";
  }
};
