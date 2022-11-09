import { useState } from "react";
import UserContext from "./context";

export default function AppProvider({children}){
 const [token ,setToken] = useState({token:null})
 return(
     <UserContext.Provider value={{token,setToken}}>{children}</UserContext.Provider>
 )
}
