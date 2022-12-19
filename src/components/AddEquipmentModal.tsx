import { Modal } from 'antd';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { useAppDispatch } from '../app/hook';
import { createEquipment, getEquipment } from '../slices/EquipmentSlice';
import { AddApplianceSchema, AddEquipmentSchema } from '../utils/schemas/schema';
import { EquipmentType } from '../utils/types/type';
import Button from './Button';
import TextInput from './TextInput';





function AddEquipmentModal({ modalOpen, handleCancel, handleFormSubmit, loader, edit, handleEditSubmit }) {

  const initialValues: EquipmentType = {
    equipment_type: edit ? edit?.type : "",
    name: edit ? edit?.name : "",
    brand: edit ? edit?.brand : "",
    price: edit ? edit?.price : 0,
    secification_file: "file.pdf",
    description: edit ? edit?.description : ""
  }




  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues,
      validationSchema: AddEquipmentSchema,
      onSubmit: (data: EquipmentType) => edit ? handleEditSubmit(data) : handleFormSubmit(data),
      enableReinitialize: true
    });


  return (
    <Modals title={edit ? "Update Equipment" : "Add Appliance"} open={modalOpen} onCancel={handleCancel} footer={null}>
      <Div>
        <TextInput label={'Equipment type'} value={values?.equipment_type} onChange={handleChange('equipment_type')} errorMsg={touched.equipment_type ? errors.equipment_type : undefined} />
        <TextInput label={'Name'} value={values?.name} onChange={handleChange('name')} errorMsg={touched.name ? errors.name : undefined} />
        <TextInput label={'Brand'} value={values?.brand} onChange={handleChange('brand')} errorMsg={touched.brand ? errors.brand : undefined} />
        <TextInput label={'Price'} value={values?.price.toString()} onChange={handleChange('price')} errorMsg={touched.price ? errors.price : undefined} />
        <TextInput label={'File'} value={values?.secification_file} onChange={handleChange('secification_file')} errorMsg={touched.secification_file ? errors.secification_file : undefined} />
        <TextInput label={'Description'} multiple={true} value={values?.description} onChange={handleChange('description')} errorMsg={touched.description ? errors.description : undefined} />
        <br />
        <br />
        <Button isLoading={loader} handlePress={handleSubmit} children={edit ? "Update" : 'Add'} />
      </Div>
    </Modals>
  )
}

export default AddEquipmentModal

const Modals = styled(Modal)`

`

const Div = styled.div`

`