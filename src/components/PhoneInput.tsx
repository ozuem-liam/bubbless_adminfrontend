import React, { useState, useEffect } from 'react'
import TextField from './TextField'
import styled from "styled-components"
import { InputType } from '../utils/types/type'
import { Input } from 'antd';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { NextPage } from 'next'
import dynamic from 'next/dynamic';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Sizes } from '../utils/constant/constant';


const PhoneInputs= ({ label, onChange, value, errorMsg, handleTextChange,  }) => {
  

    return (
        <Container>
            <TextField text={label} fontSize={Sizes?.size30} lineHeight='34px' />
            <PhoneInputField
                    country={'us'}
                    value={value}
                    onChange={phone => console.log(phone)}
                    inputStyle={{
                        width: '100%',
                        border: 'none'
                    }}
                    containerStyle={{
                        padding: '10px'
                    }}
                    buttonStyle={{
                        background: 'none',
                        border: 'none'
                    }}
                />
        </Container>


    )
}


export default PhoneInputs

const Container = styled.div`

`

const InputField = styled(Input)`
    width: 100%;
    padding: 15px;
    border: 10px;
    font-size: 12px;
    border: 1px solid #D1D1D1;
    border-radius: 16px;
    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px red;
    }
`

const PasswordField = styled(InputField.Password)`
width: 100%;
padding: 15px;
border: 10px;
font-size: 12px;
border: 1px solid #D1D1D1;
border-radius: 16px;
&:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
}
`

const PhoneInputField = styled(PhoneInput)`
width: 100%;
border: 1px solid #D1D1D1;
border-radius: 16px;
`