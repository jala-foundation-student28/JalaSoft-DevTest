import React, { useState } from "react";

const useFetchPut = () => {
  //FETCH with method PUT to edit a user
  const [responseData, setResponseData] = useState(null);

  const putData = async (putInfo) => {
    try {
      const response = await fetch("https://reqres.in/api/users/1", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(putInfo),
      });

      const data = await response.json();
      console.log(data);
      setResponseData(data);
    } catch (error) {
      console.error("Error uploading:", error);
    }
  };

  return { putData, responseData };
};

export default useFetchPut;
