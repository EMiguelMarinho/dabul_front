import * as Yup from 'yup';

export const schema = Yup.object().shape({
   email: Yup.string().email("Email inválido").required("Campo obrigatório"),
   password: Yup.string().min(6).max(12).required("Campo obrigatório"),
});
