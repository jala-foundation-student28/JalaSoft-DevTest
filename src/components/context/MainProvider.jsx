import useForm from "../../hooks/useForm";
import { MainContext } from "./MainContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetchUsers from "../../hooks/useFetchUsers";
import useFetchUsers2 from "../../hooks/useFetchUsers2";
import useFetchPost from "../../hooks/useFetchAllPages";
import useFetchPut from "../../hooks/useFetchuserPut";
const MainProvider = ({ children }) => {
  const navigate = useNavigate();
  //use a custom hook to get all users from API from pages 1 and 2
  // everytime we fetch the users from both pages will be saved
  const { fetchUsers, setUsers, users, isLoading } = useFetchUsers();
  const { fetchUsers2, users2, isLoading2 } = useFetchUsers2();

  const { putData, responseData } = useFetchPut();
  //use a custom hook for FORMS to get all the inputs information
  const { formState, onInputChange, resetForm } = useForm();
  const [formsChange, setFormsChange] = useState(false);

  // declare onSubmit functio to redirect the page and POST the inputs info on API
  const onSubmit = (event) => {
    event.preventDefault();
    fetchData();
    // getting in console the inputs from login
    setFormsChange(true);
    navigate("/list");
  };
  const { fetchData } = useFetchPost(formState, formsChange);

  // Create 2 functions to handle de PAGINATION buttons
  const hanldePage1 = (setActiveset) => {
    setActiveset(1);
    fetchUsers();
    if (!isLoading) {
      setUsers(users);
    }
  };
  const hanldePage2 = (setActiveset) => {
    setActiveset(2);
    fetchUsers2();
    if (!isLoading2) {
      setUsers(users2);
    }
  };

  return (
    <MainContext.Provider
      value={{
        putData,
        setUsers,
        fetchData,
        formState,
        onInputChange,
        resetForm,
        formsChange,
        onSubmit,
        users,
        isLoading,
        hanldePage1,
        hanldePage2,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
