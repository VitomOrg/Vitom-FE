import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { CloudUpload } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui";
import { cn } from "@/lib";

interface FileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onFilesSelected: (files: Blob[]) => void;
  maxFiles?: number;
}

export function FileInput({
  onFilesSelected,
  maxFiles = Infinity,
  disabled = false,
  ...props
}: FileInputProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileSelection = (files: FileList | null) => {
    if (files) {
      const selectedFiles = Array.from(files);

      if (selectedFiles.length > maxFiles) {
        setError(
          `You can only upload a maximum of ${maxFiles} file${
            maxFiles > 1 ? "s" : ""
          }.`
        );
        return;
      }

      setError(null);
      onFilesSelected(selectedFiles); // pass File[] directly to the parent
    }
  };

  // const handleFileSelection = (files: FileList | null) => {
  //   if (files) {
  //     const selectedFiles = Array.from(files);

  //     if (selectedFiles.length > maxFiles) {
  //       setError(
  //         `You can only upload a maximum of ${maxFiles} file${
  //           maxFiles > 1 ? "s" : ""
  //         }.`
  //       );
  //       return;
  //     }

  //     const filePromises = selectedFiles.map((file) => {
  //       return new Promise<string>((resolve, reject) => {
  //         const reader = new FileReader();
  //         reader.onload = () => {
  //           const dataUrl = reader.result as string;
  //           const base64String = dataUrl.split(",")[1];
  //           resolve(base64String);
  //         };
  //         reader.onerror = () => reject(new Error("File reading error"));
  //         reader.readAsDataURL(file);
  //       });
  //     });

  //     Promise.all(filePromises)
  //       .then((dataUrls) => {
  //         console.log("dataUrls", dataUrls);

  //         setError(null);
  //         onFilesSelected(dataUrls);
  //       })
  //       .catch(() => {
  //         setError("An error occurred while reading the files.");
  //       });
  //   }
  // };
  // const filePromises = selectedFiles.map((file) => {
  //   return new Promise<string>((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       const dataUrl = reader.result as string;
  //       const base64String = dataUrl.split(",")[1];
  //       resolve(base64String);
  //     };
  //     reader.onerror = () => reject(new Error("File reading error"));
  //     reader.readAsDataURL(file);
  //   });
  // });

  // Promise.all(filePromises)
  //   .then((dataUrls) => {
  //     setError(null);
  //     onFilesSelected(dataUrls);
  //   })
  //   .catch(() => {
  //     setError("An error occurred while reading the files.");
  //   });

  // const handleFileSelection = (file: FileList | null) => {
  //   if (file) {
  //     const selectedFiles = Array.from(file);

  //     if (selectedFiles.length > maxFiles) {
  //       setError(
  //         `You can only upload a maximum of ${maxFiles} file${
  //           maxFiles > 1 ? "s" : ""
  //         }.`
  //       );
  //       return;
  //     }

  //     const filePromises = selectedFiles.map((file) => {
  //       return new Promise<string>((resolve, reject) => {
  //         const reader = new FileReader();
  //         reader.onload = () => {
  //           const dataUrl = reader.result as string;
  //           resolve(dataUrl);
  //         };
  //         reader.onerror = () => reject(new Error("File reading error"));
  //         reader.readAsDataURL(file);
  //       });
  //     });

  //     Promise.all(filePromises)
  //       .then((dataUrls) => {
  //         setError(null);
  //         onFilesSelected(dataUrls);
  //       })
  //       .catch(() => {
  //         setError("An error occurred while reading the files.");
  //       });
  //   }
  // };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleFileSelection(event.target.files);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    if (!disabled) {
      handleFileSelection(event.dataTransfer.files);
    }
  };

  return (
    <div>
      <div
        className={cn(
          "p-8 text-center transition-colors border-2 border-dashed rounded-lg",
          {
            "border-primary": isDragging,
            "border-muted-foreground cursor-pointer hover:border-primary":
              !isDragging && !disabled,
            "border-muted-foreground/70 cursor-not-allowed": disabled,
          }
        )}
        onClick={() => !disabled && fileInputRef.current?.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Input
          type="file"
          multiple
          onChange={handleFileChange}
          className="hidden"
          ref={fileInputRef}
          disabled={disabled}
          {...props}
        />
        <CloudUpload
          className={`w-12 h-12 mx-auto ${
            disabled ? "text-gray-300" : "text-gray-400"
          }`}
        />
        <p
          className={`mt-2 text-sm ${
            disabled ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {disabled
            ? "File upload limit reached"
            : "Drag and drop files here, or click to select files"}
        </p>
        {maxFiles < Infinity && (
          <p className="mt-1 text-xs text-gray-500">
            Maximum {maxFiles} file{maxFiles > 1 ? "s" : ""}
          </p>
        )}
      </div>
      {error && (
        <Alert variant="destructive" className="mt-2">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
