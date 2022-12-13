import * as Yup from 'yup';

export const schema = Yup.object().shape({
   paymentsMethods: Yup.string().required("Campo obrigatório"),
   status: Yup.string().required("Campo obrigatório"),
});
