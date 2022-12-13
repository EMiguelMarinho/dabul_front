import * as Yup from 'yup';

export const schema = Yup.object().shape({
   paymentOf: Yup.string(),
   paymentUntil: Yup.string(),
   emission: Yup.string(),
   client: Yup.string(),
   nf: Yup.string(),
   dueDateOf: Yup.string(),
   dueDateUntil: Yup.string(),
   provider: Yup.string(),
   numberFolder: Yup.string(),
   grossValueOf: Yup.string(),
   grossValueUntil: Yup.string()
});
