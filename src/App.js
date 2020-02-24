import React, { Component } from "react";
// import Layout from "./components/Layout";
import NavigationBar from "./components/Navbar";
import Routing from "./Routing";

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
