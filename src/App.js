import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Upload from "./components/Upload";


function App() {
  return (
    <>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/upload" component={Upload} />
        </Switch>
      </main>
    </>
  );
}

export default App;
