import { storage } from "@/configs";
import { getDownloadURL, ref } from "firebase/storage";

export const getFirebaseImageUrl = async (
  imagePath: string
): Promise<string> => {
  if (!imagePath) {
    throw new Error("Image path is required and cannot be empty.");
  }

  const storageRef = ref(storage, imagePath); // Non-root reference
  try {
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.error("Error fetching image URL from Firebase:", error);
    return "";
  }
};
