
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useAppDispatch } from '../app/hook'

import Button from '../components/Button'
import TextField from '../components/TextField'
import TextInput from '../components/TextInput'
import { signInUser } from '../slices/AuthSlice'
import { Sizes } from '../utils/constant/constant'
import { LoginSchema } from '../utils/schemas/schema'
import { LoginFormData } from '../utils/types/type'
import { ToastContainer, toast } from 'react-toastify';
import secureLocalStorage from 'react-secure-storage'



const LoginScreen = () => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const [loader, setLoader] = useState(false)

    const initialValues: LoginFormData = {
        email: '',
        password: '',
    };

    const handleFormSubmit = async (data: any) => {
        setLoader(true)
        try {
            var response = await dispatch(signInUser(data))
            if(signInUser.fulfilled.match(response)){
                console.log({response})
                secureLocalStorage.setItem("token", response?.payload?.data?.token)
                secureLocalStorage.setItem("user", JSON.stringify(response?.payload?.data))
                setLoader(false)

                return router.push('/')
            }
            else {
                var errMsg = response?.payload as string
                toast.error(errMsg)
                setLoader(false)
            
            }
        }
        catch(e){
            console.log({e})
            setLoader(false)
        }
    }
    
    const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
        useFormik({
            initialValues,
            validationSchema: LoginSchema,
            onSubmit: (data: LoginFormData) => handleFormSubmit(data),
        });


        
    return (
        <Div>

            <Image src={'https://res.cloudinary.com/doouwbecx/image/upload/v1667845935/LOGO_FULL_COLOUR_nfevgw.png'} />
            <LoginDiv>
                <View>
                    <TextField text='Log in to your account' fontSize={'22px'} fontFamily='Mont-Bold' fontWeight='bold' />
                </View>
                <Hr />
                <View2>
                    <TextInput label={'Email address'} value={values?.email} onChange={handleChange('email')}    errorMsg={touched.email ? errors.email : undefined} />
                    <TextInput label={'Password'} value={values?.password} onChange={handleChange('password')}    errorMsg={touched.password ? errors.password : undefined} isPassword />
                    <div style={{ cursor: 'pointer' }} onClick={() => router.push('/reset-password')}>
                        <TextField text='Forgot your password' fontFamily='Mont-SemiBold' fontWeight='600' margin='5px 0px 0px 0px' />
                    </div>

                    <Br />
                    <Button isLoading={loader} children='Log In' handlePress={handleSubmit} />
                </View2>

            </LoginDiv>

            <ToastContainer position='top-center' />
        </Div>
    )
}

export default LoginScreen

const Div = styled.div`
    background: #E2E2E1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    height: 100vh;
`

const LoginDiv = styled.div`
    width: 400px;
    background: #FFFFFF;
    border-radius: 20px;
`
const Br = styled.br`

`

const Image = styled.img`
    margin-top: 150px;
    margin-bottom: 82px;
`
const Hr = styled.hr`
    margin: 0;
    height:1px;
    border-width:0;
    background-color: #D1D1D1 !important;
`

const View = styled.div`
padding: 20px 20px;
`
const View2 = styled.div`
padding: 10px 20px;
margin-bottom: 20px;
`