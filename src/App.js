import React from 'react';
import {HashRouter, Switch, Route, Redirect} from "react-router-dom";
import {createBrowserHistory} from "history";
import ConversorCtoF from "./ConversorCtoF";
import ConversorFtoC from "./ConversorFtoC";
import ConversorCtoK from "./ConversorCtoK";
import ConversorKtoC from "./ConversorKtoC";
import HomePage from "./HomePage";
import './App.css';

function App() {
  return (
    <div className="App">
      <header></header>
      <div className="content">
        <nav>
          <p className="menu-title">Conversores</p>
          <ol>
            <li>
              <a href="/conversores-online/#/coverter/celsius-fahrenheit">Celsius p/ Fahrenheit</a>
            </li>
            <li>
              <a href="/conversores-online/#/coverter/fahrenheit-celsius">Fahrenheit p/ Celsius</a>
            </li>
            <li>
              <a href="/conversores-online/#/coverter/kelvin-celsius">Kelvin p/ Celsius</a>
            </li>
            <li>
              <a href="/conversores-online/#/coverter/celsius-kelvin">Celsius p/ Kelvin</a>
            </li>
          </ol>
          <p className="menu-title">Cotações</p>
          <ol>
            <li>
              <a href="/conversores-online/#/cotacao/dolar-real">Dólar para Real</a>
            </li>
            <li>
              <a href="/conversores-online/#/cotacao/euro-real">Euro para Real</a>
            </li>
            <li>
              <a href="/conversores-online/#/cotacao/libra-real">Libra para Real</a>
            </li>
          </ol>
        </nav>
        <main>
          <HashRouter history={createBrowserHistory()}>
            <Switch>
            <Route exact path="/" component={HomePage}/>
              <Route exact path="/coverter/celsius-fahrenheit" component={ConversorCtoF}/>
              <Route exact path="/coverter/fahrenheit-celsius" component={ConversorFtoC}/>
              <Route exact path="/coverter/kelvin-celsius" component={ConversorKtoC}/>
              <Route exact path="/coverter/celsius-kelvin" component={ConversorCtoK}/>
            </Switch>
          </HashRouter>
        </main>
      </div>
    </div>
  );
}

export default App;
