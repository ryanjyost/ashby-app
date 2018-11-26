import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import { withRouter } from "react-router";
import "./styles/index.css";
import * as serviceWorker from "./serviceWorker";
import Landing from "./pages/Landing";
import ComingSoon from "./pages/ComingSoon";
import EssentialDocs from "./pages/EssentialDocs";
import ScrollToTop from "./hoc/ScrollToTop";

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/coming-soon" component={ComingSoon} />
        <Route path="/essential-docs-checklist" component={EssentialDocs} />
        <Route component={Landing} />
      </Switch>
    </ScrollToTop>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
