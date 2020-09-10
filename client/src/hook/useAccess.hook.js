import React from 'react';
import {
  Redirect, Route,
  Switch
} from "react-router-dom";
import Autharization from "../pages/Autharization/Autharization";
import Home from "../pages/Home/Home";

export default function useAccess(status) {
  if (status) {
    return (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        {/* <Route path="/create" exact>
                      <Home />
                  </Route> */}
        <Redirect to="/" />
      </Switch>
    )
  } else {
    return (
      <Switch>
        <Route path="/login" exact>
          <Autharization />
        </Route>
        <Route path="/register" exact>
          <Home />
        </Route>
        <Redirect to="/login" />
      </Switch>
    )

  }

}
