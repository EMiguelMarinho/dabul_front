import * as Yup from 'yup';

export const schema = Yup.object().shape({
   password: Yup.string().min(6).max(12).required("Campo obrigatório"),
});
