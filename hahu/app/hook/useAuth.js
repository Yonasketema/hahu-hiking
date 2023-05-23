import React from "react";

export const AuthContext = React.createContext();

// const AuthProvider = () => {
//   return <AuthContext.Provider></AuthContext.Provider>;
// };

export default useAuth = () => {
  const { user, setUser } = React.useContext(AuthContext);

  return { user, setUser };
};
