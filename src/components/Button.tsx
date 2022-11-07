import React from 'react'
import styled from 'styled-components'

import { ButtonType } from "../utils/types/type"
import { LoadingOutlined } from "@ant-design/icons"
import { Colors } from '../utils/constant/constant'

const Button: React.FC<ButtonType> = ({ handlePress, children, isLoading, type, disabled }) => {
  return (
    <>
      {
        type === 'cancel' ?
          <ButtonErrorText
            type='button'
            onClick={handlePress}
            disabled={disabled}
          >{isLoading ? <LoadingOutlined /> : children}</ButtonErrorText>
          : type === 'filter' ?
            <ButtonFilterText
              type='button'
              onClick={handlePress}
              disabled={disabled}
            >{isLoading ? <LoadingOutlined /> : children}</ButtonFilterText>
            :
            <ButtonText
              type='button'
              onClick={handlePress}
              disabled={disabled}
            >{isLoading ? <LoadingOutlined /> : children}</ButtonText>

      }

    </>
  )
}

export default Button


const ButtonText = styled.button`
    background: #C7C7C7;
    width: 100%;
    padding: 10px;
    font-size: 14px;
    color: ${Colors?.primary0};
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-family: Mont-Bold;
    font-weight: 900
`

const ButtonFilterText = styled.button`
    background: transparent;
    border: 1px solid ${Colors?.primary900};
    width: 100%;
    padding: 10px;
    font-size: 14px;
    color: ${Colors?.primary900};
    border-radius: 10px;
    cursor: pointer;
    font-family: Mont-Bold;
    font-weight: 900
`

const ButtonErrorText = styled.button`
    background: ${Colors?.primary900};
    width: 100%;
    padding: 10px;
    font-size: 14px;
    color: ${Colors?.primary0}
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-family: Mont-Bold;
    font-weight: 900
`