import { createContext, useState } from "react";

export const AppContxt = createContext();

const AppContextProvider = (props) => {
 const[user , setUser] = useState(false);
 const [showLogin ,setShowlogin] = useState(true);

 const value = {
  user,setUser,showLogin,setShowlogin
 }

 return(
  <AppContxt.Provider value={value}>
   {props.children}
  </AppContxt.Provider>
 )
}

export default AppContextProvider