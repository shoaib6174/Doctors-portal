import React, { useContext, useEffect } from 'react';

import { useState, createContext } from "react";





const AuthContext = createContext();

export const AuthContextProvider = (props) =>{
    const auth = Auth();
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);



const Auth = () => {
    const [appointmentDate, setAppoinmentDate] = useState(new Date());
    const [treatmentType, setTreatmentType] = useState('bye');

    
    
  
   
    return {
      setAppoinmentDate,
      appointmentDate,
      treatmentType,
      setTreatmentType,
      
    }
}

export default Auth;