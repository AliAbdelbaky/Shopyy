import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import { loginSchema } from "~/assets/schemas/login";
export default function () {
  const state = reactive({
    name: null as string | null,
    username: null as string | null,
    email: null as string | null,
    password: null as string | null,
    errors: {},
  });
  const socailMethods = ref([
    {
      name: "google",
      icon: "google",
      color: "red",
    },
    {
      name: "facebook",
      icon: "facebook",
      color: "blue",
    },
    {
      name: "github",
      icon: "github",
      color: "black",
    },
  ]);
  const isLogin = ref(true);
  const isPwd = ref(true);

  const validate = async () => {
    state.errors = {}
    try {
      const data = await loginSchema.validate(state, { abortEarly: false });
      return data;
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        error.inner.forEach((err) => {
          state.errors[err?.path] = err.message;
        });
        // set errors to state or display them in the form
      }
    }
  };

  const onSubmit = async () => {
    // Submit to API
    const data = await validate();

    console.log(data);

    // console.log(values); // { email: 'email@gmail.com' }
  };
  return {
    socailMethods,
    state,
    onSubmit,
    isPwd,
    isLogin,
    validate
  };
}
