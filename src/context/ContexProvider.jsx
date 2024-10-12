import React, { useState } from "react";
import UserContext from "./UseContext";
//create provider
//children means provider the all component
//value is like props
const ContextProvider = ({children})=>{
    const[user,setUser]= useState(null)
    return(
        <UserContext.Provider value={{user,setUser}}>
        {children}
        
        </UserContext.Provider>
    )
}
export default ContextProvider