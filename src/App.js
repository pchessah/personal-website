import React, { Component } from "react";
import Layout from "./components/Layout";
import NavigationBar from "./components/Navbar";
import Jumbo from "./components/Jumbo";
import Routing from "./Routing";

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Jumbo />
        <Layout>
          <Routing />
        </Layout>
      </div>
    );
  }
}

export default App;
