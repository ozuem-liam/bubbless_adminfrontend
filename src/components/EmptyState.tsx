import React from 'react'
import styled from 'styled-components'
import { placeholder } from '../assets'
import Image from "next/image"
import TextField from './TextField'

function EmptyState({header, btnTitle, isBtn, handleClick}) {
  return (
   <Div>
    <Image src={placeholder} alt="" />
    <TextField text={header} fontWeight='bold' fontSize='18px' margin='20px 0px' />
    {isBtn && <ButtonTextColored onClick={() => handleClick()}> + {btnTitle}</ButtonTextColored>}
   </Div>
  )
}

export default EmptyState

const Div = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 40vh
`

const ButtonTextColored = styled.button`
    background: #FFC268;
    width: 200px;
    padding: 12px;
    font-size: 14px;
    color: black;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-family: Mont-Bold;
    font-weight: 900;
    border-radius: 8px;
    margin-left: 20px;
`