import { Modal } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import TextInput from './TextInput';





function AddInvestment({ modalOpen, handleCancel }) {
    return (
        <Modals title="Add investment plan" open={modalOpen} onCancel={handleCancel} footer={null}>
            <Div>
                <TextInput label={'Investment name'} value={''} />
                <RowDiv>
                    <div style={{ width: '48%' }}>
                        <TextInput label={'Number'} value={''} />
                    </div>
                    <div style={{ width: '48%' }}>
                        <TextInput label={'Period'} value={''} />
                    </div>

                </RowDiv>
                <TextInput label={'Interest rate'} value={''} />
                <TextInput label={'Minimum value'} value={''} />
                <TextInput label={'Maximum value'} value={''} />
                <br />
                <br />
                <Button children='Add' />
            </Div>
        </Modals>
    )
}

export default AddInvestment

const Modals = styled(Modal)`

`

const Div = styled.div`

`
const RowDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`