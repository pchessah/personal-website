import React, { Component } from "react";
import NavigationBar from "./components/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar /> 
        <Home/>      
      </div>
    );
  }
}

export default App;
