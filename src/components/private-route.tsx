import React from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }: React.PropsWithChildren): React.ReactNode => {
  const { isLoggedIn } = useAuthContext();

  if (!isLoggedIn) return <Navigate to="/login" />;

  return children;
};
