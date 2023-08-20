"use client";
import { useContext } from "react";
import UserContext from "./userContext";
import react, { useEffect, useState } from "react";
import { connect } from "../services/userservice";

function userProvider({ children }) {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    const currentUser = async () => {
      try {
        const uuser = await connect();
        setUser({ ...uuser });
      } catch (error) {
        console.error(error.message);
      }
    };

    currentUser();
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default userProvider;
