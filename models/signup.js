import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string().required().label('Email'),
  gdpr: Yup.boolean().oneOf([true], 'You need to accept in order to register'),
  password: Yup.string().required().min(8).label('Password'),
  username: Yup.string().required().label('Username'),
});

export const initialValues = {
  email: '',
  gdpr: false,
  password: '',
  username: '',
};
