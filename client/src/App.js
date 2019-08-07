import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/layouts/landing";
import Signup from "./components/auth/signup";
import Login from "./components/auth/login";
//import Navbar from "./components/layouts/navBar";
function App() {
  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={Landing} />
        <section className='container'>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
