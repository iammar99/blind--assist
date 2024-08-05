import React, { useState, createContext,  useContext, useEffect } from 'react'
// import audio from "../Assets/"


export const AuthContext = createContext()





const  AuthContextProvider = ({ children }) => {

    // const [state, dispatch] = useReducer(reducer, initalState)
    const [isApploading, setIsApploading] = useState(true)


    useEffect(() => {    
        setTimeout(() => {
            setIsApploading(false)
        }, 2000)
    }, [])

    return (
        <>
            <AuthContext.Provider value={{  isApploading }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export const useAuthContext = () => useContext(AuthContext)

export { AuthContextProvider }