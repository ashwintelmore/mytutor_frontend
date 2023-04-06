import React, { useEffect, useState } from "react";
import { getUser } from "../App/Api";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const userStorage = localStorage.getItem("_id");

    async function fetchData() {
      const res = await getUser(userStorage);
      console.log('userStorage :>> ', userStorage);
      if (res.data.error) {
        console.log('response :>> ', res.data.error);
        setUser({})
      } else if (res.data.payload) {
        setUser(res.data.payload)
      }
    }
    if (userStorage) {
      fetchData();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
