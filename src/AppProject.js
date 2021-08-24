import React from "react";

// import css bootstraps
import "bootstrap/dist/css/bootstrap.min.css";

// import react-router-dom components
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import components
import PrivateRoute from "./components/PrivateRoute";
import Content from "./components/Content";

// import pages
import BerandaPublic from "./pages/BerandaPublic";
import About from "./pages/About";
import Loading1 from "./pages/loading/Loading1";
import Loading2 from "./pages/loading/Loading2";
import Loading3 from "./pages/loading/Loading3";
import Loading4 from "./pages/loading/Loading4";
import Loading5 from "./pages/loading/Loading5";

export default function AppProject() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={BerandaPublic} />
        <Route exact path="/about" component={About} />
        <Route exact path="/loading1" component={Loading1} />
        <Route exact path="/loading2" component={Loading2} />
        <Route exact path="/loading3" component={Loading3} />
        <Route exact path="/loading4" component={Loading4} />
        <Route exact path="/loading5" component={Loading5} />
      </Switch>
    </Router>
  );
}
