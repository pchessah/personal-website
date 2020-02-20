import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Projects from "./Projects";
import NoMatch from "./NoMatch";
import Layout from "./components/Layout";
import NavigationBar from "./components/Navbar";
import Jumbo from "./components/Jumbo";

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Jumbo />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/projects" component={Projects} />
            <Route component={NoMatch} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
