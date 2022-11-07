
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'

import Button from '../components/Button'
import TextField from '../components/TextField'
import TextInput from '../components/TextInput'
import { Sizes } from '../utils/constant/constant'


const ResetPasswordScreen = () => {

    const router = useRouter()

    return (
        <Div>

            <Image src={'https://res.cloudinary.com/doouwbecx/image/upload/v1667845935/LOGO_FULL_COLOUR_nfevgw.png'} />
            <LoginDiv>
                <View>
                    <TextField text='Reset Password' fontSize={'22px'} fontFamily='Mont-Bold' fontWeight='bold' />
                </View>
                <Hr />
                <View2>
                    <TextInput label={'Enter your email address to get the reset link'} value={''} />
                   
                    <Br />
                    <Button children='Send link' handlePress={() => { }} />
                </View2>
            </LoginDiv>
           <Subdiv onClick={() => router.push('/login')}>
           <TextField text='Remember now?' color='gray' />
            <TextField text='Log In' fontFamily='Mont-SemiBold' textAlign='center' fontWeight='600' margin='0px 0px 0px 5px' />
           </Subdiv>
        </Div>
    )
}

export default ResetPasswordScreen

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

const Subdiv = styled.div`
    display: flex;
    align-items: center;
    margin-top: 25px;
    cursor: pointer;
`