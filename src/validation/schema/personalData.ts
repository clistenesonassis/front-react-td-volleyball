import * as yup from 'yup';

export const schema = yup.object({
  name: yup.string().required('Campo obrigatório'),
  birthDate: yup.string().required('Campo obrigatório'),
  email: yup.string().required('Campo obrigatório'),
  phone: yup.string().required('Campo obrigatório'),
  gender: yup.string().required('Campo obrigatório'),
  city: yup.string().required('Campo obrigatório'),
  state: yup.string().required('Campo obrigatório'),
  hand: yup.string().required('Campo obrigatório'),
  practiceTime: yup.string().required('Campo obrigatório'),
  trainingAmount: yup.string().required('Campo obrigatório'),
  trainingHours: yup.string().required('Campo obrigatório'),
  competitiveProfile: yup.string().required('Campo obrigatório'),
  competitiveLevel: yup.string().required('Campo obrigatório'),
  olympicGames: yup.string().required('Campo obrigatório'),
});
