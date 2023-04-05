import { Modal } from 'antd'
import React from 'react'
import styled from 'styled-components'
import TextField from './TextField'
import CurrencyFormat from "react-currency-format"



function EquipmentDetail({ modalOpen, handleCancel, info }) {
 
  return (
    <Modals title="Equipment details" open={modalOpen} onCancel={handleCancel} footer={null}>
      <Div>
        <TextField text='Equipment type' fontWeight='bold' />
        <Subdiv>
          <TextField text={info?.equipment_type} fontWeight='bold' textTransform='capitalize' />
        </Subdiv>
      </Div>
      <Div>
        <TextField text='Name' fontWeight='bold' />
        <Subdiv>
          <TextField text={info?.name} fontWeight='bold' textTransform='capitalize' />
        </Subdiv>
      </Div>
      <Div>
        <TextField text='Brand' fontWeight='bold' />
        <Subdiv>
          <TextField text={info?.brand} fontWeight='bold' textTransform='capitalize' />
        </Subdiv>
      </Div>
      <Div>
        <TextField text='Price' fontWeight='bold' />
        <Subdiv>
          <CurrencyFormat value={info?.price} displayType={'text'} thousandSeparator={true} prefix={'₦'} renderText={value => <TextField text={value} fontFamily='Mont-SemiBold' fontWeight='bold' fontSize={'14px'} lineHeight='28px' />} />
       
        </Subdiv>
      </Div>
      <Div>
        <TextField text='Specifications File' fontWeight='bold' />
        <Subdiv>
         <a href={info?.specification_file} target="_blank">
         <TextField text={info?.specification_file} color='#54A6FF' fontWeight='bold' textTransform='capitalize' />
         </a>
        </Subdiv>
      </Div>
      <Div>
        <TextField text='Description' fontWeight='bold' />
        <Subdiv>
          <TextField text={info?.description} fontWeight='bold' textTransform='capitalize' />
        </Subdiv>

      </Div>
    </Modals>
  )
}

export default EquipmentDetail

const Modals = styled(Modal)`

`

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0px;
`

const Subdiv = styled.div`
  width: 50%;
`