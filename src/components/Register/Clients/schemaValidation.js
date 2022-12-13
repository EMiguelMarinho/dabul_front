import * as Yup from 'yup';

export const schema = Yup.object().shape({
   tipo: Yup.string().required('Campo obrigatório'),
   conta: Yup.string().required('Campo obrigatório'),
   cpfCnpj: Yup.string(),
   contaResultado: Yup.string().required('Campo obrigatório'),
   nome: Yup.string().required('Campo obrigatório'),
   email: Yup.string().email('Email inválido')
})
