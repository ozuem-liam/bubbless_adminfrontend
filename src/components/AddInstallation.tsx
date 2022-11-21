import { Modal } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import TextInput from './TextInput';





function AddInstallation({ modalOpen, handleCancel }) {
    return (
        <Modals title="Add installation cost" open={modalOpen} onCancel={handleCancel} footer={null}>
                <Div>
                    <TextInput label={'Cost name'} value={''} />
                    <TextInput label={'Cost type'} value={''} />
                    <TextInput label={'Value'} value={''} />
                    <br/>
                    <br/>
                    <Button children='Add' />
                </Div>
        </Modals>
    )
}

export default AddInstallation

const Modals = styled(Modal)`

`

const Div = styled.div`

`