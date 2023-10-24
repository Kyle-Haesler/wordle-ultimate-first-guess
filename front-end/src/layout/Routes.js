import React from "react";
import HomePage from "./HomePage";
import { Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";

// Defines routes for the application, in this case, we are only looking at the homepage as it is a simple application
function Routes() {
  return (
    <Switch>
      <Route exact={true} path="/">
        <HomePage />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routes;
