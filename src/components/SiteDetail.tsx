import { Modal } from 'antd'
import React from 'react'
import styled from 'styled-components'
import TextField from './TextField'

function SiteDetail({ modalOpen, handleCancel }) {
  return (
    <Modals title="Site details" open={modalOpen} onCancel={handleCancel} footer={null}>
      <Div>
        <TextField text='Name' fontWeight='bold' />
        <Subdiv>
          <TextField text='Site name' fontWeight='bold' />
        </Subdiv>
      </Div>
      <Div>
        <TextField text='ID' fontWeight='bold' />
        <Subdiv>
          <TextField text='ID' fontWeight='bold' />
        </Subdiv>
      </Div>
      <Div>
        <TextField text='Address' fontWeight='bold' />
        <Subdiv>
          <TextField text='Site Address' fontWeight='bold' />
        </Subdiv>
      </Div>
      <Div>
        <TextField text='Status' fontWeight='bold' />
        <Subdiv>
          <TextField text='Active' fontWeight='bold' />
        </Subdiv>
      </Div>
      <Div>
        <TextField text='Consumer name' fontWeight='bold' />
        <Subdiv>
          <TextField text='Jane Doe'  fontWeight='bold' />
        </Subdiv>
      </Div>
      <Div>
        <TextField text='Installer name' fontWeight='bold' />
        <Subdiv>
          <TextField text='Malcolm Gladwell' fontWeight='bold' />
        </Subdiv>

      </Div>
      <Div>
        <TextField text='Installer ID' fontWeight='bold' />
        <Subdiv>
          <TextField text='DQ234890ABC' fontWeight='bold' />
        </Subdiv>

      </Div>
      <Div>
        <TextField text='Sizing  ID' fontWeight='bold' />
        <Subdiv>
          <TextField text='DQ234890ABC' fontWeight='bold' />
        </Subdiv>

      </Div>
      <Div></Div>
      <Div>
        <TextField text='Equipments on site:' fontWeight='bold' />
      </Div>
      <Div>
        <TextField text='Equipment 1 ' fontWeight='bold' />
      </Div>
      <Div>
        <TextField text='Equipment 1 ' fontWeight='bold' />
      </Div>
      <Div>
        <TextField text='Equipment 1 ' fontWeight='bold' />
      </Div>
      <Div>
        <TextField text='Equipment 1 ' fontWeight='bold' />
      </Div>
    </Modals>
  )
}

export default SiteDetail

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