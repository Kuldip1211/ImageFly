import { createContext, useState } from "react";

export const AppContxt = createContext();

const AppContextProvider = (props) => {
 const[user , setUser] = useState(null);

 const value = {
  user,setUser
 }

 return(
  <AppContxt.Provider value={value}>
   {props.children}
  </AppContxt.Provider>
 )
}

export default AppContextProvider