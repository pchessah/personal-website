import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Projects from "./Projects";
import NoMatch from "./NoMatch";
import ContactMe from "./ContactMe";

function Routing() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={ContactMe}/>
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
}

export default Routing;
