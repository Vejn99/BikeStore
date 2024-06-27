import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HeaderComponent } from "./components/HeaderComponent/Header";
import { FiltersComponent } from "./components/FiltersComponent/Filters";

const App = () => {
  return (
    <>
      <HeaderComponent />
      <FiltersComponent />
    </>
  );
};

export default App;
