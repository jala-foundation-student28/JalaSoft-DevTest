import { useRef, useState } from "react";
import { useEffect } from "react";
import { MainContext } from "./context/MainContext";
import { useContext } from "react";
const ButtonsComponent = () => {
  // get from CONTEXT the form input, change inputs and SUBMIT function
  const { formState, onInputChange, onSubmit } = useContext(MainContext);
  //from formState we get the name and password to upload in form
  const { name, password } = formState;
  const focusRef = useRef();
  useEffect(() => {
    focusRef.current.focus();
  }, []);
  return (
    <div className="main-login-container">
      <form className="main-buttons-container">
        <div className="form-group">
          <input
            ref={focusRef}
            type="text"
            className="form-control"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(event) => onInputChange(event)}
          />
        </div>

        <div className="form-group">
          <input
            ref={focusRef}
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(event) => onInputChange(event)}
          />
        </div>

        <button
          onClick={(e) => onSubmit(e)}
          type="submit"
          className="button-login"
        >
          Enter
        </button>
      </form>
    </div>
  );
};

export default ButtonsComponent;
