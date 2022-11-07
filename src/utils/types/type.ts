
import { FormikErrors, FormikTouched } from "formik";
import { StaticImageData } from "next/image";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

import { number } from "yup";


export type LoginFormData = {
    email: string;
    password: string;
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