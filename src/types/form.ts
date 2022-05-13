import { ChangeEventHandler, FocusEventHandler } from "react"
export interface Form {
    id: string,
    name: string,
    slug: string
}
export interface FormSchema {
    schema: Schema[]
    campaingId: string
}

export interface Input extends Schema {
    onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    onBlur: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
    error: Err[]
}

export interface Schema {
    name:string,
    type:string,
    label: string,
    placeholder: string,
    description: string,
    validations:InputValidations[]
}

export interface InputValidations{
    name:string,
    props:string[]
}

export interface Validation{
    ({
        props,
        value
    }:{
        props:string[],
        value: any
    }):Err | null 
}


export interface Validations {
    [key:string]:Validation
}

export interface Err {
    message:string
}