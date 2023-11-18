import React from "react";
import ButtonsComponent from "./components/ButtonsComponent";
import { Route, Routes } from "react-router-dom";
import MainProvider from "./components/context/MainProvider";
import ListComponent from "./components/ListComponent";
import { Navigate } from "react-router-dom";
const App = () => {
  return (
    <MainProvider>
      <Routes>
        <Route
          path="/login"
          element={<ButtonsComponent></ButtonsComponent>}
        ></Route>
        <Route path="/list" element={<ListComponent></ListComponent>}></Route>
        <Route path="/*" element={<Navigate to="/login"></Navigate>}></Route>
      </Routes>
    </MainProvider>
  );
};

export default App;
