import axios from "axios";
import { useState,createContext,useEffect } from "react";
import {data} from "autoprefixer";

export const UserContext = createContext({});

export function UserContextProvider({children}){
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);
  
  useEffect(() => {
      if (!user) {
          axios.get('/profile')
              .then(({data}) => {
                  setUser(data);
                  setReady(true);
              })
              .catch(error => {
                  console.error("Failed to fetch profile:", error);
                  setReady(true); // Set ready to true even if there's an error
              });
      } else {
          setReady(true);
      }
  }, [user]);
  
  return (
      <UserContext.Provider value={{user, setUser, ready}}>
          {children}
      </UserContext.Provider>
  );
}
