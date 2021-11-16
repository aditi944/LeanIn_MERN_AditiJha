import React from "react";
import "./styles.scss";
import SideBar from "./Components/sidebar/SideBar";
import { Route } from "react-router-dom";
import Home from "./Components/Main";
import Contact from "./Components/Form";

export default function App() {
  return (
    <div className="App">
      <SideBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );
}
