import React, { createContext, useContext, useMemo, useState } from "react";

interface IAuthContext {
  isLoggedIn: boolean;
}

const AuthContext = createContext<IAuthContext>(null! as IAuthContext);

export const AuthContextProvider = ({ children }: React.PropsWithChildren): React.ReactElement => {
  const [isLoggedIn] = useState(false);

  const value = useMemo(() => ({ isLoggedIn }), [isLoggedIn]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("You must use useAuthContext inside AuthContextProvider.");
  return context;
};
