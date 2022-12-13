import * as Yup from 'yup';

export const schema = Yup.object().shape({
   name: Yup.string().required("Campo obrigatório"),
   municipalRegistration: Yup.string().required("Campo obrigatório"),
   crc: Yup.string().required("Campo obrigatório"),
   cnpj: Yup.string().required("Campo obrigatório"),
   cep: Yup.string().required("Campo obrigatório"),
   city: Yup.string().required("Campo obrigatório"),
   state: Yup.string().required("Campo obrigatório"),
   adress: Yup.string().required("Campo obrigatório"),
   district: Yup.string().required("Campo obrigatório"),
   complement: Yup.string().required("Campo obrigatório"),
   number: Yup.string().required("Campo obrigatório"),
   banckNumber: Yup.string().required("Campo obrigatório"),
   agency: Yup.string().required("Campo obrigatório"),
   checkingAccount: Yup.string().required("Campo obrigatório"),
   email: Yup.string().required("Campo obrigatório").email("Email inválido"),
   cell: Yup.string().required("Campo obrigatório"),
});
