import React from "react";
import { MainContext } from "./context/MainContext";
import { useContext } from "react";
import PaginationComponent from "./PaginationComponent";
import { useState } from "react";
const ListComponent = () => {
  const [edit, setEdit] = useState(false);
  const [userToEdit, setUserToEdit] = useState({});
  const { putData, setUsers, fetchData, formState, users, isLoading } =
    useContext(MainContext);
  const handleAdd = () => {
    fetchData();
  };
  const removeUser = (userToRemove) => {
    const removeUser = users.filter((user) => user !== userToRemove);
    setUsers(removeUser);
  };
  const editUser = (user) => {
    setEdit(true);
    setUserToEdit(user);
  };
  const update = (user) => {
    putData(user);
  };

  return (
    <div className="list-container">
      <div className="header-container">
        <p>
          User email: {formState.email}
          <br /> User name: {formState.name}
        </p>
        <button className="button-add" onClick={() => handleAdd()}>
          + Add
        </button>
      </div>
      {edit && (
        <div className="edit-container">
          <input className="input-edit" placeholder={userToEdit.first_name} />
          <input
            className="input-edit"
            placeholder={userToEdit.last_name}
          />{" "}
          <input className="input-edit" placeholder={userToEdit.email} />
          <button onClick={() => update(userToEdit)} className="button-add">
            Edit
          </button>
        </div>
      )}
      <div className="list-main-cotainer">
        {isLoading ? (
          <p>loading</p>
        ) : (
          users.map((user, index) => (
            <div key={index} className="user-container">
              <div className="first-user-container">
                <img src={user.avatar} />
                <div>
                  Name: {user.first_name} <br />
                  Last name: {user.last_name} <br />
                  email: {user.email}
                </div>
              </div>
              <div className="second-user-container">
                <button className="button-delete-edit" onClick={() => removeUser(user)}>Delete </button>
                <button className="button-delete-edit" onClick={() => editUser(user)}>Edit</button>
              </div>
            </div>
          ))
        )}
      </div>
      <PaginationComponent></PaginationComponent>
    </div>
  );
};

export default ListComponent;
