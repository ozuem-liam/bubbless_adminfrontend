import { Modal } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import TextInput from './TextInput';
import { useFormik } from 'formik'
import { SignupType } from '../utils/types/type';
import { SignupSchema } from '../utils/schemas/schema';
import { useAppDispatch } from '../app/hook';
import { toast, ToastContainer } from 'react-toastify'
import { registerUser } from '../slices/AuthSlice';



function AddUser({ modalOpen, handleCancel }) {
    const [loader, setLoader] = useState(false)
    const dispatch = useAppDispatch()
   const initialValues: SignupType = {
     email: "",
     password: "",
     mobile: "",
     firstName: "",
     lastName: ""
   }


   const handleForm = async (data) => {

    setLoader(true)
    try {
        var response = await dispatch(registerUser(data)) as any
        if(registerUser.fulfilled.match(response)){
            setLoader(false)
            toast.success("User Created Successfully")
            resetForm()
            handleCancel()
        }
        else {
            setLoader(false)
            var errMsg = response?.payload as string
            toast.error(errMsg)
        }
    }
    catch(e){
        console.log({e})
        setLoader(false)
    }
   }
   
      const { values, errors, touched, handleChange, handleSubmit, handleBlur, resetForm } =
    useFormik({
      initialValues,
      validationSchema: SignupSchema,
      onSubmit: (data: SignupType) => handleForm(data),
      enableReinitialize: true
    });
   
    return (
        <Modals title="Add User" open={modalOpen} onCancel={handleCancel} footer={null}>
                <Div>
                    <TextInput label={'First name'} value={values?.firstName} onChange={handleChange('firstName')} errorMsg={touched.firstName ? errors.firstName : undefined} />
                    <TextInput label={'Last name'} value={values?.lastName} onChange={handleChange('lastName')} errorMsg={touched.lastName ? errors.lastName : undefined}  />
                    <TextInput label={'Email address'} value={values?.email} onChange={handleChange('email')} errorMsg={touched.email ? errors.email : undefined}  />
                    <TextInput label={'Password'} isPassword value={values?.password} onChange={handleChange('password')} errorMsg={touched.password ? errors.password : undefined}  />
                    <TextInput label={'Phone No.'} value={values?.mobile} onChange={handleChange('mobile')} errorMsg={touched.mobile ? errors.mobile : undefined}  />
                    <br/>
                    <br/>
                    <Button children='Add' isLoading={loader} handlePress={handleSubmit} />
                </Div>

                <ToastContainer />
        </Modals>
    )
}

export default AddUser

const Modals = styled(Modal)`

`

const Div = styled.div`

`