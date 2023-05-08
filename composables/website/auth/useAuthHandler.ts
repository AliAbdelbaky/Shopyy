import { useForm, useField } from "vee-validate";
export default function () {
  const state = reactive({
    name: null as string | null,
    username: null as string | null,
    email: null as string | null,
    password: null as string | null,
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
  ]);
  const isLogin = ref(true);
  const isPwd = ref(true);
  const isValid = computed(() => !state.email || state.email.length <= 3);
  const isRequired = (value: any) => (value ? true : "This field is required");
  const { value, errorMessage } = useField("state.name", isRequired);
  const { handleSubmit } = useForm();

  const onSubmit = handleSubmit((values) => {
    // Submit to API
    console.log(values); // { email: 'email@gmail.com' }
  });
  return {
    socailMethods,
    state,
    onSubmit,
    isValid,
    isPwd,
    isLogin,
  };
}
