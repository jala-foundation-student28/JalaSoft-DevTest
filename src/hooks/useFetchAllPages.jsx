import { useState } from "react";
import { useEffect } from "react";
const useFetchPost = (formState) => {
  const fetchData = async () => {
    //FETCH with method POST 
    try {
      const response = await fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();
      console.log(data);
      console.log("POST succesfull");
    } catch (error) {
      console.error("Error:", error);
    }
  };


  return { fetchData };
};

export default useFetchPost;
