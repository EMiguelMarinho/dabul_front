import * as Yup from 'yup';

export const schema = Yup.object().shape({
   folder: Yup.string().required("Campo obrigatório"),
   form: Yup.string().required("Campo obrigatório"),
   date: Yup.string().required("Campo obrigatório"),
   type: Yup.string().required("Campo obrigatório"),
   fees: Yup.string().required("Campo obrigatório"),
   value: Yup.string().required("Campo obrigatório"),
   honorary: Yup.string().required("Campo obrigatório"),
   iprem: Yup.string().required("Campo obrigatório"),
   heirs: Yup.string().required("Campo obrigatório"),
   irrf: Yup.string().required("Campo obrigatório"),
   hspmp: Yup.string().required("Campo obrigatório"),
   others: Yup.string().required("Campo obrigatório"),
});
