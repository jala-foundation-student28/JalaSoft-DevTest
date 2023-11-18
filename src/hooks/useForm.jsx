import { useState } from "react";
const useForm = () => {
  const initialForm = {
    name: "",
    password: "",
    email: "generalemail@gmail.com",
  };

  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const resetForm = () => {
    setFormState({
      name: "",
      password: "",
      email: "",
    });
  };
  return {
    formState,
    onInputChange,
    resetForm,
  };
};

export default useForm;
