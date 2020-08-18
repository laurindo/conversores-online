import React from 'react';
import {Router, Switch, Route} from "react-router-dom";
import {createBrowserHistory} from "history";
import ConversorCtoF from "./ConversorCtoF";
import ConversorFtoC from "./ConversorFtoC";
import ConversorCtoK from "./ConversorCtoK";
import ConversorKtoC from "./ConversorKtoC";
import './App.css';

function App() {
  return (
    <div className="App">
      <header></header>
      <div className="content">
        <nav>
          <p className="menu-title">Convesores</p>
          <ol>
            <li>
              <a href="/coverter/celsius-fahrenheit">Celsius p/ Fahrenheit</a>
            </li>
            <li>
              <a href="/coverter/fahrenheit-celsius">Fahrenheit p/ Celsius</a>
            </li>
            <li>
              <a href="/coverter/kelvin-celsius">Kelvin p/ Celsius</a>
            </li>
            <li>
              <a href="/coverter/celsius-kelvin">Celsius p/ Kelvin</a>
            </li>
          </ol>
        </nav>
        <main>
          <Router history={createBrowserHistory()}>
            <Switch>
              <Route exact path="/coverter/celsius-fahrenheit" component={ConversorCtoF}/>
              <Route exact path="/coverter/fahrenheit-celsius" component={ConversorFtoC}/>
              <Route exact path="/coverter/kelvin-celsius" component={ConversorKtoC}/>
              <Route exact path="/coverter/celsius-kelvin" component={ConversorCtoK}/>
            </Switch>
          </Router>
        </main>
      </div>
    </div>
  );
}

export default App;
