import { Modal } from 'antd';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Sizes } from '../utils/constant/constant';
import { ConfigLoanSchema } from '../utils/schemas/schema';
import { LoanConfig } from '../utils/types/type';
import Button from './Button';
import TextField from './TextField';
import TextInput from './TextInput';





function AddLoan({ modalOpen, handleCancel, handleLoanSubmit, isLoading }) {

    const initialValues: LoanConfig = {
        number: null,
        period: "month",
        interest_rate: null,
        min_value: null, 
        max_value: null
     }


    const { values, errors, touched, handleChange, handleSubmit, handleBlur, resetForm } =
    useFormik({
      initialValues,
      validationSchema: ConfigLoanSchema,
      onSubmit: (data: LoanConfig) => handleForm(data),
      enableReinitialize: true
    });


    const handleForm = async (data) => {
          await handleLoanSubmit(data)
          resetForm()
      }

    return (
        <Modals title="Add loan period" open={modalOpen} onCancel={handleCancel} footer={null}>
            <Div>
                <RowDiv>
                    <div style={{width: '48%'}}>
                    <TextInput label={'Number'} number value={values?.number?.toString()} onChange={handleChange('number')} errorMsg={touched.number ? errors.number : undefined} />
                    </div>
                    <div style={{width: '48%'}}>
                    <TextField text={"Period"} fontSize={Sizes?.size30} lineHeight='34px' />
                    <Select  value={values?.period} onChange={handleChange('period')} >
                    <option value="month">Monthly</option>
                    {/* <option value="week" >Weekly</option> */}
                    <option value="year" >Yearly</option>
                </Select>
        
                    </div>
                    
                </RowDiv>

                <TextInput label={'Interest rate (%) '} number value={values?.interest_rate?.toString()} onChange={handleChange('interest_rate')} errorMsg={touched.interest_rate ? errors.interest_rate : undefined} />
                <TextInput label={'Minimum Value (₦)'} number value={values?.min_value?.toString()} onChange={handleChange('min_value')} errorMsg={touched.min_value ? errors.min_value : undefined} />
                <TextInput label={'Maximum Value (₦)'} number value={values?.max_value?.toString()} onChange={handleChange('max_value')} errorMsg={touched.max_value ? errors.max_value : undefined} />
                <br />
                <br />
                <Button children='Add' isLoading={isLoading} handlePress={handleSubmit} />
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