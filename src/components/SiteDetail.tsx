import { Modal } from 'antd'
import React from 'react'
import styled from 'styled-components'
import TextField from './TextField'

function SiteDetail({ modalOpen, handleCancel, info }) {

  return (
    <Modals title="Site details" open={modalOpen} onCancel={handleCancel} footer={null}>
      <Div>
        <TextField text='Name' fontWeight='bold' />
        <Subdiv>
          <TextField text={info?.name} fontWeight='bold' />
        </Subdiv>
      </Div>
      <Div>
        <TextField text='ID' fontWeight='bold' />
        <Subdiv>
          <TextField text={info?.id} fontWeight='bold' />
        </Subdiv>
      </Div>
      <Div>
        <TextField text='Address' fontWeight='bold' />
        <Subdiv>
          <TextField text={info?.site_address} fontWeight='bold' />
        </Subdiv>
      </Div>
      <Div>
        <TextField text='Status' fontWeight='bold' />
        <Subdiv>
          <TextField text={info?.status} fontWeight='bold' />
        </Subdiv>
      </Div>
      <Div>
        <TextField text='Consumer name' fontWeight='bold' />
        <Subdiv>
          <TextField text={info?.consumer_name}  fontWeight='bold' />
        </Subdiv>
      </Div>
      <Div>
        <TextField text='Installer name' fontWeight='bold' />
        <Subdiv>
          <TextField text={info?.installer} fontWeight='bold' />
        </Subdiv>

      </Div>
      <Div>
        <TextField text='Installer ID' fontWeight='bold' />
        <Subdiv>
          <TextField text={info?.installer_id} fontWeight='bold' />
        </Subdiv>

      </Div>
      <Div>
        <TextField text='Sizing  ID' fontWeight='bold' />
        <Subdiv>
          <TextField text={info?.sizing_id} fontWeight='bold' />
        </Subdiv>

      </Div>
      <Div></Div>
      <TextField text='Equipments' fontWeight='bold' />
      <ul>
      {
        info?.equipmentrequests?.map(data => {
          return <li>
             <Div style={{marginTop: '5px'}}>
        <TextField text={data} fontWeight='bold' />
      </Div>
          </li>
        })
      }
      </ul>
    
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