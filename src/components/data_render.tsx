import React from "react";
import Spinner from "./ui/spinner";

interface DataRenderProps {
  children: React.ReactNode;
  error: string | null;
  isLoading: boolean;
}

const DataRender = ({ children, error, isLoading }: DataRenderProps) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <div className="flex justify-center w-full h-screen">{error}</div>;
  }

  return children;
};

export default DataRender;
