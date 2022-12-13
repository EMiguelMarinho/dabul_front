import * as Yup from 'yup';

export const schema = Yup.object().shape({
   number: Yup.string().required('Campo obrigatório'),
   name: Yup.string().required('Campo obrigatório'),
   details: Yup.string().required('Campo obrigatório'),
});