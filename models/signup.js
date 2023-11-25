import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  username: Yup.string().required(),
  email:Yup.string().required(),
  password: Yup.string().required(),
  gdpr: Yup.boolean().oneOf([true], 'You need to accept in order to register'),
});

export const initialValues = {
  username: '',
  email:'',
  password: '',
  gdpr: false,
};
