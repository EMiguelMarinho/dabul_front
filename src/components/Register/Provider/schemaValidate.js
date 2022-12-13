import * as Yup from 'yup';

export const schema = Yup.object().shape({
   cpfCnpj: Yup.string(),
   nome: Yup.string().required("Campo obrigatório"),
   telefone: Yup.string(),
   group: Yup.string().required("Campo obrigatório"),
   contaResultado: Yup.string().required("Campo obrigatório")
});
