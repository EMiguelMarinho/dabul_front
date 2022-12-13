import * as Yup from 'yup';

export const schema = Yup.object().shape({
   dateOfdown: Yup.string(),
   provider: Yup.string()
});
