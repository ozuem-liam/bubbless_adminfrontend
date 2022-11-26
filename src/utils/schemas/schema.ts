import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

export const ResetSchema = yup.object().shape({
  email: yup.string().email().required('Email is required'),
});

export const SignupSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  // phoneNumber: yup.string().min(11, ({min}) => `Phone number must be at least ${min} length`).required('Phone is required'),
  email: yup.string().email().required('Email is required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required')
});


export const AddEquipmentSchema = yup.object().shape({
  type: yup.string().required('Type is required'),
  name: yup.string().required('Name is required'),
  brand: yup.string().required('Brand is required'),
  price: yup.string().required('Price is required'),
  file: yup.string().required('File is required'),
  description: yup.string().required('Description is required')
})

export const AddApplianceSchema = yup.object().shape({
  type: yup.string().required('Type is required'),
  watt: yup.string().required('Watt is required'),
})
