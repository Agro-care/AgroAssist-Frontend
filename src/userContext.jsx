// UserContext.js
import { createContext, useState } from 'react';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]); // null means no user is logged in initially

  const Login = (userData) => {
    setUser(userData);
  };

  const Logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, Login, Logout }}>
      {children}
    </UserContext.Provider>
  );
};
