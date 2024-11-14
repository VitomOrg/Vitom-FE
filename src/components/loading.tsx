import { Loader } from "lucide-react";

export const Loading = () => {
  return (
    <div className="z-50 grid place-content-center">
      <Loader className="size-28 animate-spin-slow " />
    </div>
  );
};
