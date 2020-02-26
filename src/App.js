import React, { Component } from "react";
import NavigationBar from "./components/Navbar";
import Routing from "./Routing";
import Jumbo from "./components/Jumbo";
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
