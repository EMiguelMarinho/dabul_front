import * as Yup from 'yup';

export const schema = Yup.object().shape({
   searchInput: Yup.string(),
   of: Yup.string(),
   untill: Yup.string(),
   client: Yup.string().required("Campo obrigatório"),
   numberOfFolder: Yup.string().required("Campo obrigatório"),
   nf: Yup.string().required("Campo obrigatório"),
});
