import { createContext, useState } from "react";

export const USERDATA = createContext();

export default function UserContext({ children }) {
  const data = "Ram";
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <USERDATA.Provider value={[data, isAdmin, setIsAdmin]}>
      {children}
    </USERDATA.Provider>
  );
}
