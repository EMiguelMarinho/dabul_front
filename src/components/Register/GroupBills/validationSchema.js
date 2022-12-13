import * as Yup from 'yup';

export const schema = Yup.object().shape({
   nameOfAccountGroups: Yup.string().required("Campo obrigatório"),
   order: Yup.string().required("Campo obrigatório"),
});
