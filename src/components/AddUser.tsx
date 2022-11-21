import { Modal } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import TextInput from './TextInput';





function AddUser({ modalOpen, handleCancel }) {
    return (
        <Modals title="Add User" open={modalOpen} onCancel={handleCancel} footer={null}>
                <Div>
                    <TextInput label={'First name'} value={''} />
                    <TextInput label={'Last name'} value={''} />
                    <TextInput label={'Email address'} value={''} />
                    <TextInput label={'Password'} isPassword value={''} />
                    <TextInput label={'Role'} value={''} />
                    <br/>
                    <br/>
                    <Button children='Add' />
                </Div>
        </Modals>
    )
}

export default AddUser

const Modals = styled(Modal)`

`

const Div = styled.div`

`