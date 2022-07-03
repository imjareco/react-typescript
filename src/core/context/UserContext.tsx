import { IUser } from "core/models";
import React, { useMemo, useState } from "react";

interface IUserContext {
    user: IUser | undefined;
    setUser: (user: IUser | undefined) => void;
}
export const UserContext = React.createContext<IUserContext>({ user: undefined, setUser: () => ({})});

interface IUserProvider { children: React.ReactNode }
const UserProvider: React.FunctionComponent<IUserProvider> = ({ children }) => {
  const [user, setUser] = useState<IUser | undefined>(undefined);

  const value = useMemo(() => {
    return ({
      user,
      setUser: (userLogged: IUser | undefined) => setUser(userLogged)
    });
  }, [user]);

  return (
    <UserContext.Provider value={value}>
      {children} 
    </UserContext.Provider>
  );
};

export default UserProvider;
