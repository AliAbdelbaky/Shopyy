import * as yup from "yup";
const loginSchema = yup.object({
  // name: yup.string().required(),
  email: yup.string().required().email(),
});
export { loginSchema };
