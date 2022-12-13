import * as Yup from 'yup';

export const schema = Yup.object().shape({
   numberAccount: Yup.string().required("Campo obrigatório"),
   name: Yup.string().required("Campo obrigatório"),
   reducedAccountNumber: Yup.string().required("Campo obrigatório"),
   group: Yup.string().required("Campo obrigatório"),
   order: Yup.string().required("Campo obrigatório"),
   patternHistory: Yup.string().required("Campo obrigatório"),
});
