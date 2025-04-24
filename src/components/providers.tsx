import React from "react";
import { AuthContextProvider } from "../contexts/AuthContext";

export const Providers = ({ children }: React.PropsWithChildren): React.ReactElement => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};
