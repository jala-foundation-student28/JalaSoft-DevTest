import { useState } from "react";
import { useEffect } from "react";
const useFetchUsers = () => {
  //FETCH with method GET for the first PAGE
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    try {
      const response = await fetch(`https://reqres.in/api/users?page=1`);
      const data = await response.json();
      setIsLoading(false);
      setUsers(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return { fetchUsers, setUsers, users, isLoading };
};

export default useFetchUsers;
