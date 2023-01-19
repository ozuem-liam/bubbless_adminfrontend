import { Modal } from 'antd';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import { useAppDispatch } from '../app/hook';
import { createInstaller } from '../slices/InstallerSlice';
import { AddInstallerSchema } from '../utils/schemas/schema';
import { InstallerType } from '../utils/types/type';
import Button from './Button';
import PhoneInputs from './PhoneInput';
import TextField from './TextField';
import TextInput from './TextInput';





function AddInstaller({ modalOpen, handleCancel }) {
    const [loader, setLoader] = useState(false)
    const dispatch = useAppDispatch()

    const initialValues: InstallerType = {
            first_name: "", 
            last_name: "", 
            password: "",
            email: "", 
            phone: null, 
            business_name: "", 
            address: "", 
            user_type: "installer"
      }

    const handleAddSubmit = async (data) => {
        const payload = {
            first_name: data?.first_name, 
            last_name: data?.last_name, 
            email: data?.email, 
            password: data?.password,
            phone: data?.phone, 
            business_name: data?.business_name, 
            address: data?.address, 
            user_type: data?.user_type, 
            status: "pending"
        }
        setLoader(true)
        try {
            var response = await dispatch(createInstaller(payload))
            if(createInstaller.fulfilled.match(response)){

                toast.success("Success")
                setLoader(false)
                handleCancel()
            }
            else {
                var errMsg = response?.payload as string
                toast.error(errMsg)
                setLoader(false)
            }
        }
        catch(e){
            console.log(e)
        }
    }

    const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues,
      validationSchema: AddInstallerSchema,
      onSubmit: (data: InstallerType) => handleAddSubmit(data),
      enableReinitialize: true
    });
  
    return (
        <Modals title="Add Installer" open={modalOpen} onCancel={handleCancel} footer={null}>
            <Div>
                <TextInput label={'First name'} value={values?.first_name} onChange={handleChange('first_name')} errorMsg={touched.first_name ? errors.first_name : undefined} />
                <TextInput label={'Last name'} value={values?.last_name} onChange={handleChange('last_name')} errorMsg={touched.last_name ? errors.last_name : undefined} />
                <TextInput label={'Password'} value={values?.password} onChange={handleChange('password')}    errorMsg={touched.password ? errors.password : undefined} isPassword />
                <TextInput label={'Business name'} value={values?.business_name} onChange={handleChange('business_name')} errorMsg={touched.business_name ? errors.business_name : undefined} />
                <TextInput label={'Address'} value={values?.address} onChange={handleChange('address')} errorMsg={touched.address ? errors.address : undefined} />
                <TextInput label={'Email'} value={values?.email} onChange={handleChange('email')} errorMsg={touched.email ? errors.email : undefined} />
                <PhoneInputs label={"Phone number"} value={values?.phone} handleTextChange={handleChange('phone')} errorMsg={touched.phone ? errors.phone : undefined} />
                <Select  value={values?.user_type} onChange={handleChange('user_type')} >
                    <option value="installer">Installer</option>
                    <option value="consumer" >Consumer</option>
                </Select>
                {/* <TextInput label={'Account Number'} value={''} />
                <TextInput label={'Bank name'} value={''} /> */}
                {/* <br />
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
                </RowDiv> */}
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
                <div onClick={() => handleSubmit()}>
  <ButtonTextColored >Create account</ButtonTextColored>

                </div>
              
            </Div>
            <ToastContainer position='top-center' />
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

const Select = styled.select`
width: 100%;
padding: 15px;
border: 10px;
font-size: 12px;
border: 1px solid #D1D1D1;
border-radius: 16px;
&:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
}
 margin: 10px 0px;
`