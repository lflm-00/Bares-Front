import React, { useState, useEffect } from "react";
import AppEnd from "./components/Nota/NoteEnd";
import { BrowserRouter as Router, Link , Switch , Route } from "react-router-dom";


const App = () => {
  

return ( 
  <Router>
    


        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <AppEnd />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
     
    </Router>

)
function Register() {
  return (
    <div>
      <h2>register</h2>
    </div>
  );
}
  
};

export default App;
