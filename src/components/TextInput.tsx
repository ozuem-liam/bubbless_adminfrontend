import React, { useState, useEffect } from 'react'
import TextField from './TextField'
import styled from "styled-components"
import { InputType } from '../utils/types/type'
import { Input } from 'antd';

import { NextPage } from 'next'
import dynamic from 'next/dynamic';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Sizes } from '../utils/constant/constant';


const TextInput: NextPage<InputType> = ({ label, onChange, value, errorMsg, isPassword, isMultiline, disabled, type, handleTextChange, required, multiple }) => {
    const [showPassword, setShowPassword] = useState(true)
    const handleClickShowPassword = () => {
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleChange = () => {
        setShowPassword(!showPassword)
    }

    return (
        <Container>
            <TextField text={label} fontSize={Sizes?.size30} lineHeight='34px' />
            {
                multiple ? <Textarea rows={5} value={value} onChange={onChange} />
                    : <div>
                        {
                            isPassword ? <PasswordField
                                placeholder={label}
                                value={value} onChange={onChange}
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            /> : <InputField placeholder={label} value={value} onChange={onChange} />
                        }
                    </div>
            }
            {errorMsg !== undefined ? (
                <ErrorDiv>
                    <Text>{errorMsg}</Text>
                </ErrorDiv>
            ) : null}
        </Container>


    )
}


export default TextInput

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

const Textarea = styled.textarea`
width: 100%;
border: 1px solid #D1D1D1;
border-radius: 16px;
padding: 10px;
`

const Text = styled.p`
  font-size: 12px;
  color: red;
  text-transform: capitalize
`



const ErrorDiv = styled.div`
  margin-top: 5px;
`
