import * as Yup from 'yup';

export const schema = Yup.object().shape({
   login: Yup.string().required("Campo obrigatório"),
   nome: Yup.string().required("Campo obrigatório"),
   senha: Yup.string().min(6, "Insira uma senha de 5 a 10 caracteres").max(12, "Insira uma senha de 5 a 10 caracteres").required("Campo obrigatório"),
   confirmSenha: Yup.string().oneOf([Yup.ref('senha'), null], 'Senhas não correspondem').required('Campo obrigatório'),
   email: Yup.string().email("Email inválido").required("Campo obrigatório")
})
