import { ApolloError } from "@apollo/client"
import { User } from "./user"

export interface AuthSignin {
    email: string,
    password: string
}

export interface AuthContextType {
    signin?: ({email,password}:AuthSignin) => void,
    session?: User,
    isLoading?: Boolean,
    error?: ApolloError | undefined
}