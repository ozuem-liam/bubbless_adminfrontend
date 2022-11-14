import { Modal } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import TextInput from './TextInput';





function AddLoan({ modalOpen, handleCancel }) {
    return (
        <Modals title="Add loan period" open={modalOpen} onCancel={handleCancel} footer={null}>
            <Div>
                <RowDiv>
                    <div style={{width: '48%'}}>
                    <TextInput label={'Number'} value={''} />
                    </div>
                    <div style={{width: '48%'}}>
                        <TextInput label={'Period'} value={''} />
                    </div>
                    
                </RowDiv>

                <TextInput label={'Interest rate '} value={''} />
                <TextInput label={'Minimum Value'} value={''} />
                <TextInput label={'Maximum Value'} value={''} />
                <br />
                <br />
                <Button children='Add' />
            </Div>
        </Modals>
    )
}

export default AddLoan

const Modals = styled(Modal)`

`

const Div = styled.div`

`

const RowDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`