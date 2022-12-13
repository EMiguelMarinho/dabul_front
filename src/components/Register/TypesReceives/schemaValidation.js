import * as Yup from 'yup';

export const schema = Yup.object().shape({
   type: Yup.string().required("Campo obrigatório"),
   account: Yup.string().required("Campo obrigatório")
});
