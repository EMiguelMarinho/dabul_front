import * as Yup from 'yup';

export const schema = Yup.object().shape({
   nameOfAccount: Yup.string().required("Campo obrigatório"),
   reducedNumberAccount: Yup.string().required("Campo obrigatório"),
   banckNumber: Yup.string().required("Campo obrigatório"),
   agency: Yup.string().required("Campo obrigatório"),
   checkingAccount: Yup.string().required("Campo obrigatório"),
});