import { Modal } from 'antd'
import React from 'react'
import styled from 'styled-components'
import TextField from './TextField'

function EquipmentDetail({ modalOpen, handleCancel }) {
  return (
    <Modals title="Equipment details" open={modalOpen} onCancel={handleCancel} footer={null}>
      <Div>
        <TextField text='Equipment type' fontWeight='bold' />
        <Subdiv>
          <TextField text='Inverter' fontWeight='bold' />
        </Subdiv>
      </Div>
      <Div>
        <TextField text='Name' fontWeight='bold' />
        <Subdiv>
          <TextField text='SolarEdge Hybrid 24KVA Solar Inverter, Dual Interface Port' fontWeight='bold' />
        </Subdiv>
      </Div>
      <Div>
        <TextField text='Brand' fontWeight='bold' />
        <Subdiv>
          <TextField text='Supplier' fontWeight='bold' />
        </Subdiv>
      </Div>
      <Div>
        <TextField text='Price' fontWeight='bold' />
        <Subdiv>
          <TextField text='N234,000' fontWeight='bold' />
        </Subdiv>
      </Div>
      <Div>
        <TextField text='Specifications File' fontWeight='bold' />
        <Subdiv>
          <TextField text='Axpert-MKS-III-5K-manual.pdf' color='#54A6FF' fontWeight='bold' />
        </Subdiv>
      </Div>
      <Div>
        <TextField text='Description' fontWeight='bold' />
        <Subdiv>
          <TextField text='SolarEdge Hybrid 24KVA Solar Inverter, Dual Interface Port' fontWeight='bold' />
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