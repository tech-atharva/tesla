import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from "./Home";
import Ms from './Ms';
import My from './My';
import Mx from './Mx';
import About from "./About"
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
        <Navbar />
        <Switch>
          <Route path="" exact component={Home}/>
          <Route path="/model_S" exact component={Ms}/>
          <Route path="/model_X" exact component={Mx}/>
          <Route path="/model_Y" exact component={My}/>
          <Route path="/about" exact component={About}/>
        </Switch>
    </>
  );
}

export default App;
