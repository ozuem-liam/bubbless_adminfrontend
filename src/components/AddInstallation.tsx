import { Modal } from 'antd';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Sizes } from '../utils/constant/constant';
import { ConfigInstallationSchema } from '../utils/schemas/schema';
import { InstallationConfig } from '../utils/types/type';
import Button from './Button';
import TextField from './TextField';
import TextInput from './TextInput';





function AddInstallation({ modalOpen, handleCancel, handleInstallationSubmit, isLoading }) {
    const initialValues: InstallationConfig = {
        name: "",
        value: null,
        cost_type: "percentile"
     }

     const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues,
      validationSchema: ConfigInstallationSchema,
      onSubmit: (data: InstallationConfig) => handleInstallationSubmit(data),
      enableReinitialize: true
    });

    return (
        <Modals title="Add installation cost" open={modalOpen} onCancel={handleCancel} footer={null}>
                <Div>
                    <TextInput label={'Cost name'} value={values?.name}   onChange={handleChange('name')} errorMsg={touched.name ? errors.name : undefined} />
                    <TextField text={"Cost type"} fontSize={Sizes?.size30} lineHeight='34px' />
                    <Select  value={values?.cost_type} onChange={handleChange('cost_type')} >
                    <option value="percentile">Percentile</option>
                
                </Select>
                    <TextInput label={'Value'} number value={values?.value?.toString()}  onChange={handleChange('value')} errorMsg={touched.value ? errors.value : undefined}/>
                    <br/>
                    <br/>
                    <Button children='Add' isLoading={isLoading} handlePress={handleSubmit} />
                </Div>
        </Modals>
    )
}

export default AddInstallation

const Modals = styled(Modal)`

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
 margin: 0px 0px;
`
const Div = styled.div`

`