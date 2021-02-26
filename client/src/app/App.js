import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from "../views/home/Home.js";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
