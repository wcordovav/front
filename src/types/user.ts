export interface User {
    firstName?: string
    lastName?: string
}

export type UserAction = 
    { type: 'signin', credentials:Credentials } | { type: 'signout'}

type Credentials = {
    email: string,
    password: string
}