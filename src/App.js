import React, { Component } from "react";
import NavigationBar from "./components/Navbar.jsx";
import Routing from "./Routing.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Routing />
      </div>
    );
  }
}

export default App;
