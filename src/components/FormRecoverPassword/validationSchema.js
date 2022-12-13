import * as Yup from 'yup';

export const schema = Yup.object().shape({
   email: Yup.string().email("Email inválido").required("Campo obrigatório"),
});
