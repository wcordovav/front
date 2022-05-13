import { useMutation, useQuery } from "@apollo/client";
import { FC, createContext, Context, useEffect } from "react"
import { GETTOKEN } from "../graphql/getToken";
import { GETUSER } from "../graphql/getUser";
import { AuthContextType, AuthSignin } from "../types/auth";
import { Props } from "../types/prop";

export const AuthContext:Context<AuthContextType> = createContext({})

const AuthContextProvider:FC<Props> = ({children}) => {

    const {
        data:userData,
        loading: userLoading,
        error: userError,
        refetch
    } = useQuery(GETUSER)

    const [getToken, { data:tokenData, loading:tokenLoading, error: tokenError}] = useMutation(GETTOKEN)

    useEffect(()=>{
        if(localStorage.getItem("auth_token")){
            refetch()
        }
    })

    if(tokenData && tokenData.signIn?.token){
        localStorage.setItem('auth_token', tokenData.signIn.token)
    }

    const signin:({email,password}:AuthSignin) => void = ({email, password}) => {
        getToken({
            variables:{
              email,
              password
            }
        })
    }
    
    return (
        <AuthContext.Provider value={{
            signin,
            session:userData?.user,
            isLoading: userLoading || tokenLoading,
            error: userError || tokenError
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider