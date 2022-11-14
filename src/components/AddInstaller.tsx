import { Modal } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import PhoneInputs from './PhoneInput';
import TextField from './TextField';
import TextInput from './TextInput';





function AddInstaller({ modalOpen, handleCancel }) {
    const [phone, setPhone] = useState('')
  
    return (
        <Modals title="Add Installer" open={modalOpen} onCancel={handleCancel} footer={null}>
            <Div>
                <TextInput label={'Full name'} value={''} />
                <TextInput label={'Business name'} value={''} />
                <TextInput label={'Business address'} value={''} />
                <TextInput label={'Email'} value={''} />
                <PhoneInputs label={"Phone number"} onChange={undefined} value={undefined} errorMsg={undefined} handleTextChange={undefined} />
                <TextInput label={'Account Number'} value={''} />
                <TextInput label={'Bank name'} value={''} />
                <br />
                <TextField text='Upload the following documents' fontWeight='bold' />
                <RowDiv>
                    <TextField fontFamily='Mont-SemiBold' text='COREN Certificate' fontWeight='bold' />
                    <TextField text='UPLOAD' color='#54A6FF' />
                </RowDiv>
                <RowDiv>
                    <TextField fontFamily='Mont-SemiBold' text='TAX Clearance Certificate' fontWeight='bold' />
                    <TextField text='UPLOAD' color='#54A6FF' />
                </RowDiv>
                <RowDiv>
                    <TextField fontFamily='Mont-SemiBold' text='REAN Membership fee receipt' fontWeight='bold' />
                    <TextField text='UPLOAD' color='#54A6FF' />
                </RowDiv>
                <RowDiv>
                    <TextField fontFamily='Mont-SemiBold' text='CAC Certificate' fontWeight='bold' />
                    <TextField text='UPLOAD' color='#54A6FF' />
                </RowDiv>
                <RowDiv>
                    <TextField fontFamily='Mont-SemiBold' text='Bank Statement' fontWeight='bold' />
                    <TextField text='UPLOAD' color='#54A6FF' />
                </RowDiv>
                <RowDiv>
                    <TextField fontFamily='Mont-SemiBold' text='Company logo' fontWeight='bold' />
                    <TextField text='UPLOAD' color='#54A6FF' />
                </RowDiv>
                <br/>
                <br/>
                <DivSub>
                    <input type='checkbox' />
                    <TextField text='Completed Offline KYC' margin='0px 10px' />
                </DivSub>
                <DivSub>
                    <input type='checkbox' />
                    <TextField text='Notify installer of account creation' margin='0px 10px' />
                </DivSub>
                <br/>
                <ButtonTextColored>Create account</ButtonTextColored>
            </Div>
        </Modals>
    )
}

export default AddInstaller

const Modals = styled(Modal)`

`

const Div = styled.div`

`
const DivSub = styled.div`
display: flex;
align-items: center;
`

const RowDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px;
    background: #FFFFFF;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    margin-top: 25px;
`

const ButtonTextColored = styled.button`
    background: #FFC268;
    width: 200px;
    padding: 12px;
    font-size: 14px;
    color: black;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-family: Mont-Bold;
    font-weight: 900;
    border-radius: 8px;
`