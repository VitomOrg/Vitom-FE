import React from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "@/configs";
import { Button, ButtonProps } from "@/components/ui";
import { Download } from "lucide-react";

interface DownloadFileProps extends ButtonProps {
  filePath: string;
  fileName: string;
  title: string;
}

const DownloadFile: React.FC<DownloadFileProps> = ({
  filePath,
  fileName,
  title,
  ...props
}) => {
  const handleDownload = async () => {
    try {
      // Tạo tham chiếu đến file trong Firebase Storage
      const fileRef = ref(storage, filePath);

      // Lấy URL tải file
      const url: string = await getDownloadURL(fileRef);

      // Tạo thẻ <a> để tải file
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <Button
      {...props}
      onClick={handleDownload}
      className="w-full space-x-2 bg-foreground text-background hover:bg-foreground/90 hover:text-background/90"
      variant="outline"
    >
      <Download className="size-4" />
      <span>{title}</span>
    </Button>
  );
};

export default DownloadFile;
