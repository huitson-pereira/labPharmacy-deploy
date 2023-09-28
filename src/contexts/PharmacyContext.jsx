import { createContext, useState } from "react";

export const PharmacyContext = createContext({});

export const PharmacyContextProvider = ({children}) => {
    const [userEmail, setUserEmail] = useState();
    const [userSenha, setUserSenha] = useState();
    const [showFarmacia, setShowFarmacia] = useState(false);
  
    return(
        <PharmacyContext.Provider value={{
            setUserEmail,
            setShowFarmacia,
            setUserSenha,
            showFarmacia,
            userEmail,
            userSenha
        }}>
            {children}
        </PharmacyContext.Provider>
    )
  }