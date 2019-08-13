import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/layouts/landing";
import Signup from "./components/auth/signup";
import Login from "./components/auth/login";
import {Provider} from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  
  );
}

export default App;
