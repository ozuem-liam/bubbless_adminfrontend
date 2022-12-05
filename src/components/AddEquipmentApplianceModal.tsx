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

function AddEquipmentApplianceModal({ modalOpen, handleCancel }) {
  const [loader, setLoader] = useState(false)
  const dispatch = useAppDispatch()
  const [applaince, setAppliance] = useState<any>()

  const initialValues: { name: string, watts: number } = {
    name: '',
    watts: 0
  }

  const handleFormSubmit = async (data) => {
    setLoader(true)
    const payload = {
      name: data?.name,
      watts: parseInt(data?.watts)
    }

    try {
      var response = await dispatch(createAppliance(payload))
      if (createAppliance.fulfilled.match(response)) {
        toast.success(response?.payload?.message)
        dispatch(getAppliance()).then(dd => setAppliance(dd?.payload?.data?.appliances))
        setLoader(false)
      }
      else {
        var errMsg = response?.payload as string
        toast.error(errMsg)
        setLoader(false)
      }
    }
    catch (e) {
      console.log({ e })
      setLoader(false)
    }
  }


  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues,
      validationSchema: AddApplianceSchema,
      onSubmit: (data: { name: string, watts: number }) => handleFormSubmit(data),
    });



  return (
    <Modals title="Add Applaince" open={modalOpen} onCancel={handleCancel} footer={null}>
      <Div>
        <TextInput label={'Appliance type'} value={values?.name} onChange={handleChange('name')} errorMsg={touched.name ? errors.name : undefined} />
        <TextInput label={'Watt'} value={values?.watts?.toString()} onChange={handleChange('watts')} errorMsg={touched.watts ? errors.watts : undefined} />
        <br />
        <br />
        <Button isLoading={loader} children='Add' handlePress={handleSubmit} />
      </Div>

      <ToastContainer position='top-center' />
    </Modals>
  )
}

export default AddEquipmentApplianceModal

const Modals = styled(Modal)`

`

const Div = styled.div`

`