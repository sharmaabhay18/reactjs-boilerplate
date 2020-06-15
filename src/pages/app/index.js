import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "pages/home";
import Login from "pages/login";

function App() {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
