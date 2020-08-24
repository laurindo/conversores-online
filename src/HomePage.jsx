import React from "react";
import axios from "axios";
import VozGoogle from "./VozGoogle";
import TextoMaiusculoComp from "./TextoMaiusculoComp";
import ConversorMoeda from "./ConversorMoeda";
import InverterText from "./InverterText";
import SortNames from "./SortNames";
import GenerateRandomWord from "./GenerateRandomWord";
import Lotofacil from "./Lotofacil";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            moedas: [],
            from: "USD",
            to: "BRL",
            result: 0,
            texto: {
                text: "",
                total: 0
            },
            cripto: {
                value: 0,
                moedas: [{code: "BRL", name: "Real Brasileiro"}, {code: "USD", name: "Dolar Americano"}, {code: "AUD", name: "Dolar Australiano"}, {code: "CAD", name: "Dolar Canadense"}, {code: "EUR", name: "Euro"}, {code: "GBP", name: "Libra Esterlina"}],
                quote: {},
                to: "BRL",
                result: 0,
                isOpen: false
            }
        };
    }

    componentDidMount() {
        axios.get("https://blockchain.info/ticker").then(res => this.setState({
            cripto: {...this.state.cripto, quote: res.data, keys: Object.keys(res.data)},
        }));
    }

    change = e => {
        this.setState({[e.target.id]: e.target.value}, () => {
            const {moedas, from, to, value} = this.state;
            const resFrom = value * parseFloat(moedas[from].high);
            this.setState({result: new Intl.NumberFormat('pt-BR', { maximumSignificantDigits: 3 }).format(resFrom)});
        });
    };

    changeCripto = e => {
        this.setState({cripto: {...this.state.cripto, [e.target.id]: e.target.value}}, () => {
            debugger;
            const {quote, to, value} = this.state.cripto;
            const resFrom = value * parseFloat(quote[to]["15m"]);
            const result = new Intl.NumberFormat('pt-BR', { maximumSignificantDigits: 3 }).format(resFrom);
            this.setState({cripto: {...this.state.cripto, result}});
        });
    };

    openMoreInfo = target => {
        if (target === "cripto") return this.setState({cripto: {...this.state.cripto, isOpen: true}});
    };

    closeMoreInfo = target => {
        if (target === "cripto") return this.setState({cripto: {...this.state.cripto, isOpen: false}});
    };

    convert = () => {
        this.setState({texto: {...this.state.texto, total: this.state.texto.text.length}});
    };

    render() {
        return (
            <main>

                <nav id="cripto" className="info" style={{opacity: this.state.cripto.isOpen ? 1 : 0}}>
                    <small className="close" onClick={() => this.closeMoreInfo("cripto")}>[ x ]</small>
                    <h1>O que é Bitcoin?</h1>
                    <p>É uma criptomoeda descentralizada ou um dinheiro eletrônico para transações ponto-a-ponto (peer-to-peer electronic cash system) 
                        apresentada em 2008, na lista de discussão The Cryptography Mailing por um programador ou grupo de programadores 
                        sob o pseudônimo Satoshi Nakamoto, é considerada a primeira moeda digital mundial descentralizada, constituindo um sistema econômico 
                        alternativo (peer-to-peer electronic cash system), e responsável pelo ressurgimento do sistema bancário livre.</p>
                    
                    <h1>O que é CriptoMoedas?</h1>
                    <p>Uma criptomoeda é um meio de troca, podendo ser centralizado ou descentralizado que se utiliza da tecnologia de blockchain e da criptografia para assegurar a validade das transações e a criação de novas unidades da moeda</p>
                </nav>

                <section>
                    <h1>Conversão Rápida</h1>
                    <p>Acesse nossos conversores mais populares abaixo para converter rapidamente taxas de moeda, distância, temperatura, área e muito mais. 
                        Para acessar todos os nossos conversores, navegue no menu acima.</p>
                </section>

                {/* MOEDAS */}
                <section className="grid">
                    <ConversorMoeda/>

                    <div className="card">
                        <p className="title">Bitcoin</p>
                        <div className="column">
                            <label className="lb">Quero converter Bitcoin (BTC)</label>
                            <input id="value" type="text" value={this.state.cripto.value} onChange={this.changeCripto}/>
                            
                            <label htmlFor="to" className="lb">Para</label>
                            <select id="to" name="to" value={this.state.cripto.to} onChange={this.changeCripto}>
                                {this.state.cripto.moedas.map((moeda, index) => {
                                    return (
                                        <option key={index} value={moeda.code}>{moeda.name}({moeda.code})</option>
                                    );
                                })}
                            </select>
                            <p className="result">{this.state.cripto.to} {this.state.cripto.result}</p>
                        </div>
                        <div className="actions">
                            <button onClick={() => this.openMoreInfo("cripto")}>Mais Informações</button>
                        </div>
                    </div>

                    <div className="card">
                        <p className="title">CriptoMoedas (cotação referente a 1 BTC)</p>
                        <div className="column">
                            <div className="list-moedas">
                                {Object.values(this.state.cripto.quote).map((q, index) => (
                                    <div key={index} className="items" style={{"background-color": index % 2 === 0 ? "#f1f2f3" : "aliceblue"}}>
                                        <label>{this.state.cripto.keys[index]}</label>
                                        &nbsp;
                                        <label>{q["15m"]}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>


                {/* TEXTO */}
                <section className="grid">
                    <div className="card">
                        <p className="title">Inverter Texto</p>
                        <div className="column">
                            <InverterText/>
                        </div>
                    </div>

                    <div className="card">
                        <p className="title">Sorteador de Nomes</p>
                        <div className="column">
                            <SortNames/>
                        </div>
                    </div>

                    <div className="card center">
                        <p className="title">Gerar palavra randômica</p>
                        <div className="column">
                            <GenerateRandomWord/>
                        </div>
                    </div>
                </section>



                {/* TEXTO */}
                <section className="grid">
                    <div className="card">
                        <p className="title">Total de Caracteres</p>
                        <div className="column total-chars">
                            <textarea 
                                value={this.state.texto.text} 
                                id="text" 
                                placeholder="Cole ou digite aqui o seu texto" 
                                rows="10" 
                                onChange={e => this.setState({texto: {...this.state.text, text: e.target.value}})}
                            />
                            <div>
                                <button className="blue" onClick={this.convert}>Contar Caracteres</button>
                                <button onClick={() => this.setState({texto: {text: "", total: 0}})}>Limpar</button>
                                <p className="res">Numero Total de Caracteres: {this.state.texto.total || 0}</p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <p className="title">Maiusculo p/ Minusculo</p>
                        <div className="column">
                            <TextoMaiusculoComp/>
                        </div>
                    </div>

                    <div className="card">
                        <p className="title">Voz do Google</p>
                        <div className="column voice-google">
                            <VozGoogle/>
                        </div>
                    </div>
                </section>

                {/* LOTERIA */}
                <section className="grid">
                    <Lotofacil lotofacil/>
                    <Lotofacil quina/>
                    <Lotofacil lotomania/>
                </section>



                {/* SOBRE/ABOUT */}
                <section>
                    <h1>Conversor Online</h1>
                    <p>
                        O Conversor Online é um dos serviços de conversão de unidades mais utilizados no mundo. 
                        Você pode descobrir rapidamente quantas libras é um quilo, quantos dólares é um euro, quantos centímetros é um pé, bem como tamanhos de papel, 
                        tamanhos de sapato, área, volume, temperatura e muito mais. 
                        Use nossas calculadoras para moeda, peso, distância e praticamente qualquer unidade de medida no mundo.
                        As unidades de medida foram uma das primeiras ferramentas desenvolvidas pelos seres humanos e os registros voltam para o 4º para o 3º milênio aC de lugares 
                        como o Egito e o vale do Indo.
                    </p>
                </section>

                <div className="f center">
                    Conversor Online &bull; {new Date().getFullYear()} 
                </div>
            </main>
        );
    }
}

export default HomePage;