import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Splash from "./pages/splash";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Splash} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
