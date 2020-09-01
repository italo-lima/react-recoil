import React from "react";

import { Route, BrowserRouter, Switch } from "react-router-dom";

import Home from "./screens/Home";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
