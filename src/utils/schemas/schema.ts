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
  mobile: yup.string().min(11, ({min}) => `Phone number must be at least ${min} length`).required('Phone is required'),
  email: yup.string().email().required('Email is required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required')
});


export const AddEquipmentSchema = yup.object().shape({
  equipment_type: yup.string().required('Type is required'),
  name: yup.string().required('Name is required'),
  brand: yup.string().required('Brand is required'),
  price: yup.number().required('Price is required'),
  description: yup.string().required('Description is required')

})

export const AddInstallerSchema = yup.object().shape({
  first_name: yup.string().required('Name is required'),
  last_name: yup.string().required('Name is required'),
  email: yup.string().email().required('Email is required'),
  password: yup
  .string()
  .min(8, ({min}) => `Password must be at least ${min} characters`)
  .required('Password is required'),
  phone: yup.number().required('Phone is required'),
  business_name: yup.string().required('Business name is required'),
  address: yup.string().required('Address is required'),
  user_type: yup.string().required('User type is required')

})

export const ConfigLoanSchema = yup.object().shape({
  period: yup.string().required('Period is required'),
  number: yup.number().required('Number is required'),
  interest_rate: yup.number().required('Interest rate is required'),
  min_value: yup.number().required('Min value is required'),
  max_value: yup.number().required('Max value is required'),

})
export const ConfigInvestmentSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  period: yup.string().required('Period is required'),
  number: yup.number().required('Number is required'),
  interest_rate: yup.number().required('Interest rate is required'),
  min_value: yup.number().required('Min value is required'),
  max_value: yup.number().required('Max value is required'),

})
export const ConfigInstallationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  value: yup.number().required('Value is required'),
  cost_type: yup.string().required('Cost type is required'),

})

export const AddApplianceSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  watts: yup.string().required('Watt is required'),
})

