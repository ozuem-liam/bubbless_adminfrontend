import { Modal } from 'antd'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import secureLocalStorage from 'react-secure-storage'
import { toast, ToastContainer } from 'react-toastify'
import styled from 'styled-components'
import { useAppDispatch } from '../app/hook'
import { createAppliance, getAppliance } from '../slices/ApplianceSlice'
import { AddApplianceSchema } from '../utils/schemas/schema'
import Button from './Button'
import TextInput from './TextInput'

function AddEquipmentApplianceModal({ modalOpen, handleCancel, handleFormSubmit, loader, edit, handleEditSubmit }) {
  

  const initialValues: { name: string, watts: number } = {
    name: edit ? edit?.type : '',
    watts: edit ? edit?.vottage.replace(/N/g, '') : 0
  }




  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues,
      validationSchema: AddApplianceSchema,
      onSubmit: (data: { name: string, watts: number }) => edit ? handleEditSubmit(data) : handleFormSubmit(data),
      enableReinitialize: true
    });



  return (
    <Modals title={edit ? "Update Appliance" : "Add Applaince"} open={modalOpen} onCancel={handleCancel} footer={null}>
      <Div>
        <TextInput label={'Appliance type'} value={values?.name} onChange={handleChange('name')} errorMsg={touched.name ? errors.name : undefined} />
        <TextInput label={'Watt'} value={values?.watts?.toString()} onChange={handleChange('watts')} errorMsg={touched.watts ? errors.watts : undefined} />
        <br />
        <br />
        <Button isLoading={loader} children={edit ? 'Update' : 'Add'} handlePress={handleSubmit} />
      </Div>

     
    </Modals>
  )
}

export default AddEquipmentApplianceModal

const Modals = styled(Modal)`

`

const Div = styled.div`

`