import { Modal } from 'antd'
import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import TextInput from './TextInput'

function AddEquipmentApplianceModal({modalOpen, handleCancel}) {
  return (
    <Modals title="Add Applaince" open={modalOpen} onCancel={handleCancel} footer={null}>
                <Div>
                    <TextInput label={'Appliance type'} value={''} />
                    <TextInput label={'Watt'} value={''} />
                    <br/>
                    <br/>
                    <Button children='Add' />
                </Div>
        </Modals>
  )
}

export default AddEquipmentApplianceModal

const Modals = styled(Modal)`

`

const Div = styled.div`

`