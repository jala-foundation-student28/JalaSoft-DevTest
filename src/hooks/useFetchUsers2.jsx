import { useState } from "react";
import { useEffect } from "react";
const useFetchUsers2 = () => {
  //FETCH with method GET for the second PAGE
  const [isLoading2, setIsLoading2] = useState(true);
  const [users2, setUsers2] = useState([]);
  const fetchUsers2 = async () => {
    try {
      const response = await fetch(`https://reqres.in/api/users?page=2`);
      const data = await response.json();
      setIsLoading2(false);
      setUsers2(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers2();
  }, []);
  return { fetchUsers2, setUsers2, users2, isLoading2 };
};

export default useFetchUsers2;
