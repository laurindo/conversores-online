import React from 'react';
import {HashRouter, Switch, Route, Redirect} from "react-router-dom";
import Header from "./Header";
import {createBrowserHistory} from "history";
import ConversorCtoF from "./ConversorCtoF";
import ConversorFtoC from "./ConversorFtoC";
import ConversorCtoK from "./ConversorCtoK";
import ConversorKtoC from "./ConversorKtoC";
import ConversorMoedaPage from "./ConversorMoedaPage";
import TextoTotalChars from "./TextoTotalChars";
import VozGooglePage from "./VozGooglePage";
import TextoMaiusculo from "./TextoMaiusculo";
import InverterTextPage from "./InverterTextPage";
import GenerateRandomWordPage from "./GenerateRandomWordPage";
import LoteriaPage from "./LoteriaPage";
import DataPage from "./DataPage";
import NeymarTextoPage from "./NeymarTextoPage";

import HomePage from "./HomePage";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content">
        <nav>
          <p className="menu-title">Conversores</p>
          <ol>
            <li>
              <a href="/#/converter/celsius-fahrenheit">Celsius p/ Fahrenheit</a>
            </li>
            <li>
              <a href="/#/converter/fahrenheit-celsius">Fahrenheit p/ Celsius</a>
            </li>
            <li>
              <a href="/#/converter/kelvin-celsius">Kelvin p/ Celsius</a>
            </li>
            <li>
              <a href="/#/converter/celsius-kelvin">Celsius p/ Kelvin</a>
            </li>
          </ol>
          <p className="menu-title">Cotações</p>
          <ol>
            <li>
              <a href="/#/cotacao/moeda?coin=USD">Dólar para Real</a>
            </li>
            <li>
              <a href="/#/cotacao/moeda?coin=EUR">Euro para Real</a>
            </li>
            <li>
              <a href="/#/cotacao/moeda?coin=GBP">Libra para Real</a>
            </li>
            <li>
              <a href="/#/cotacao/moeda?coin=CAD">Dolar Canadense para Real</a>
            </li>
            <li>
              <a href="/#/cotacao/moeda?coin=CAD">Mais Opções</a>
            </li>
          </ol>
          <p className="menu-title">Texto</p>
          <ol>
            <li>
              <a href="/#/texto/total-caracteres">Total de Caracteres</a>
            </li>
            <li>
              <a href="/#/texto/voz-google">Voz do Google</a>
            </li>
            <li>
              <a href="/#/texto/maiusculo">Converter p/ maiúsculo</a>
            </li>
            <li>
              <a href="/#/texto/maiusculo">Converter p/ minúsculo</a>
            </li>
            <li>
              <a href="/#/texto/inverter">Inverter Texto</a>
            </li>
            <li>
              <a href="/#/texto/gerar-texto-randomico">Gerar Texto Randômico</a>
            </li>
          </ol>
          
          <p className="menu-title">Data</p>
          <ol>
            <li>
              <a href="/#/data/anos-em-horas">Anos em (dias/horas/minutos)</a>
            </li>
            <li>
              <a href="/#/data/qual-minha-idade">Qual a minha idade</a>
            </li>
          </ol>

          <p className="menu-title">Loteria (Gerador de números)</p>
          <ol>
            <li>
              <a href="/#/loteria/lotofacil">Lotofacil</a>
            </li>
            <li>
              <a href="/#/loteria/lotomania">Lotomania</a>
            </li>
            <li>
              <a href="/#/loteria/quina">Quina</a>
            </li>
          </ol>
          <p className="menu-title">Neymar (Gerar imagem para texto)</p>
          <ol>
            <li>
              <a href="/#/neymar/texto">Neymar Avatar em Texto</a>
            </li>
          </ol>
        </nav>
        <main>
          <HashRouter history={createBrowserHistory()}>
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route exact path="/converter/celsius-fahrenheit" component={ConversorCtoF}/>
              <Route exact path="/converter/fahrenheit-celsius" component={ConversorFtoC}/>
              <Route exact path="/converter/kelvin-celsius" component={ConversorKtoC}/>
              <Route exact path="/converter/celsius-kelvin" component={ConversorCtoK}/>

              <Route exact path="/cotacao/moeda" component={ConversorMoedaPage}/>

              <Route exact path="/texto/total-caracteres" component={TextoTotalChars}/>
              <Route exact path="/texto/maiusculo" component={TextoMaiusculo}/>
              <Route exact path="/texto/voz-google" component={VozGooglePage}/>
              <Route exact path="/texto/inverter" component={InverterTextPage}/>
              <Route exact path="/texto/gerar-texto-randomico" component={GenerateRandomWordPage}/>

              <Route exact path="/loteria/lotofacil" component={LoteriaPage}/>

              <Route exact path="/data/anos-em-horas" component={DataPage}/>
              
              <Route exact path="/neymar/texto" component={NeymarTextoPage}/>


            </Switch>
          </HashRouter>
        </main>
      </div>
    </div>
  );
}

export default App;
