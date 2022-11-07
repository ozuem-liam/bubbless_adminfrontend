
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'

import Button from '../components/Button'
import TextField from '../components/TextField'
import TextInput from '../components/TextInput'
import { Sizes } from '../utils/constant/constant'


const LoginScreen = () => {
    const router = useRouter()
    return (
        <Div>

            <Image src={'https://res.cloudinary.com/doouwbecx/image/upload/v1667845935/LOGO_FULL_COLOUR_nfevgw.png'} />
            <LoginDiv>
                <View>
                    <TextField text='Log in to your account' fontSize={'22px'} fontFamily='Mont-Bold' fontWeight='bold' />
                </View>
                <Hr />
                <View2>
                    <TextInput label={'Email address'} value={''} />
                    <TextInput label={'Password'} value={''} isPassword />
                    <div style={{cursor:'pointer'}}  onClick={() => router.push('/reset-password')}>
<TextField text='Forgot your password' fontFamily='Mont-SemiBold' fontWeight='600' margin='5px 0px 0px 0px'  />
                    </div>
                    
                    <Br />
                    <Button children='Log In' handlePress={() => { }} />
                </View2>

            </LoginDiv>
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