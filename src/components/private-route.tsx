import useRoleStore from "@/domains/stores/zustand/role";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
  roles?: string[];
}

const PrivateRoute = ({ children, roles = [] }: PrivateRouteProps) => {
  const location = useLocation();
  const { role } = useRoleStore();

  if (roles.length && !roles.includes(role))
    return <Navigate to="/" state={{ from: location }} replace />;

  return <>{children}</>;
};

export default PrivateRoute;
