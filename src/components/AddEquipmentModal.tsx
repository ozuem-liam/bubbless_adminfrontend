import { Modal } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import TextInput from './TextInput';





function AddEquipmentModal({ modalOpen, handleCancel }) {
    return (
        <Modals title="Add Equipment" open={modalOpen} onCancel={handleCancel} footer={null}>
                <Div>
                    <TextInput label={'Equipment type'} value={''} />
                    <TextInput label={'Name'} value={''} />
                    <TextInput label={'Brand'} value={''} />
                    <TextInput label={'Price'} value={''} />
                    <TextInput label={'File'} value={''} />
                    <TextInput label={'Description'} multiple={true} value={''} />
                    <br/>
                    <br/>
                    <Button type='cancel' children='Add' />
                </Div>
        </Modals>
    )
}

export default AddEquipmentModal

const Modals = styled(Modal)`

`

const Div = styled.div`

`