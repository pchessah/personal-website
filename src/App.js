import React, { Component } from "react";
import NavigationBar from "./components/Navbar.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home.jsx";

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
