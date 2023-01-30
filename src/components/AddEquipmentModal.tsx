import { Modal } from 'antd';
import { useFormik } from 'formik';
import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { useAppDispatch } from '../app/hook';

import { fileUpload } from '../slices/LoanSlice';
import { AddApplianceSchema, AddEquipmentSchema } from '../utils/schemas/schema';
import { EquipmentType } from '../utils/types/type';
import Button from './Button';
import TextField from './TextField';
import TextInput from './TextInput';
import { LoadingOutlined } from '@ant-design/icons';




function AddEquipmentModal({ modalOpen, handleCancel, handleFormSubmit, loader, edit, handleEditSubmit }) {
  const inputRef = useRef(null)
  const [file, setFile] = useState(null);
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(false)

  const handleOpenFileInput = () => {
    inputRef.current.click();
  };

  const handleFileChange = (e) => {
    setLoading(true)
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    dispatch(fileUpload(formData)).then(dd => {
      setLoading(false)
      setFile(dd?.payload?.data)
    })
  }

  const initialValues: EquipmentType = {
    equipment_type: edit ? edit?.type : "",
    name: edit ? edit?.name : "",
    brand: edit ? edit?.brand : "",
    price: edit ? edit?.price : 0,
    description: edit ? edit?.description : ""
  }




  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues,
      validationSchema: AddEquipmentSchema,
      onSubmit: (data: EquipmentType) => edit ? handleEditSubmit(data, file) : handleFormSubmit(data, file),
      enableReinitialize: true
    });


  return (
    <Modals title={edit ? "Update Equipment" : "Add Equipment"} open={modalOpen} onCancel={handleCancel} footer={null}>
      <Div>
        <TextInput label={'Equipment type'} value={values?.equipment_type} onChange={handleChange('equipment_type')} errorMsg={touched.equipment_type ? errors.equipment_type : undefined} />
        <TextInput label={'Name'} value={values?.name} onChange={handleChange('name')} errorMsg={touched.name ? errors.name : undefined} />
        <TextInput label={'Brand'} value={values?.brand} onChange={handleChange('brand')} errorMsg={touched.brand ? errors.brand : undefined} />
        <TextInput label={'Price'} value={values?.price.toString()} number onChange={handleChange('price')} errorMsg={touched.price ? errors.price : undefined} />
        <RowDiv>
          {
            loading ? <LoadingOutlined /> : <TextField fontFamily='Mont-SemiBold' text={file ? file?.fileUrl : "Upload a file"} fontWeight='bold' />
          }
          <TextField text='UPLOAD' color='#54A6FF' onClick={handleOpenFileInput} />
          <input
            ref={inputRef}
            accept=".pdf"
            style={{ display: "none" }}
            multiple
            type="file"
            onChange={e => handleFileChange(e)}
          />
        </RowDiv>
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

const Subdiv = styled.div`
  margin-top: 10px;
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