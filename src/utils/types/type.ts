
import { FormikErrors, FormikTouched } from "formik";
import { StaticImageData } from "next/image";
import { type } from "os";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

import { number } from "yup";


export type LoginFormData = {
    email: string;
    password: string;
}

export type ResetFormData = {
    email: string;
}

export type InstallerType = {
    first_name: string, 
    last_name: string, 
    password: string,
    email: string, 
    phone: number, 
    business_name: string, 
    address: string, 
    user_type: string, 
}

export type EquipmentType = {
    equipment_type: string, 
    name: string, 
    brand: string, 
    price: number, 
    description: string
}

export type SignupType = {
    email: string;
    password: string;
    fName: string;
    lName: string;
    // mobile: string;

}
export type LoginState = {
    userData: [];
    userInfo: any;
    loading: boolean;
    error: any
}
export type ButtonType = {
    children: string,
    isLoading?: boolean,
    handlePress?: () => void,
    type?: string,
    disabled?: boolean
}

export type AddEquipment = {
    type: string,
    name: string,
    brand: string,
    price: string,
    file: string,
    description: string
}

export type AddAppliance = {
    type: string,
    watt: string
}

export type InputType = {
    label: string,
    value: string,
    errorMsg?: string,
    multiple?: boolean,
    isMultiline?: boolean,
    isPassword?: boolean,
    disabled?: boolean,
    type?: string,
    required?: boolean,
    handleClick?: (value?: any) => void,
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
    handleTextChange?: (value?: any) => void
}


export type TextProps = {
    text: string;
    onClick?: (value?: any) => void;
    fontSize?: string;
    textAlign?: 'left' | 'right' | 'center' | 'justify';
    color?: string;
    lineHeight?: string;
    fontFamily?: string;
    textDecoration?: 'none' | 'underline' | 'overline' | 'line-through' | 'underline overline';
    textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'initial' | 'inherit';
    fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900',
    margin?: string
};