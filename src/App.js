import React, { Component } from "react";
import NavigationBar from "./components/Navbar.jsx";
import Routing from "./Routing.jsx";
import Jumbo from "./components/Jumbo.jsx";
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        
          <Jumbo />
          <Routing />
       
      </div>
    );
  }
}

export default App;
