import React from "react";
import axios from "axios";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            moedas: [],
            from: "USD",
            to: "BRL",
            result: 0
        };
    }

    componentDidMount() {
        axios.get("https://economia.awesomeapi.com.br/json/all").then(res => {
            this.setState({moedas: res.data});
        });
    }

    change = e => {
        this.setState({[e.target.id]: e.target.value}, () => {
            console.log(this.state);
            const {moedas, from, to, value} = this.state;
            const resFrom = value * parseFloat(moedas[from].high);
            this.setState({result: new Intl.NumberFormat('pt-BR', { maximumSignificantDigits: 3 }).format(resFrom)});
        });
    };

    render() {
        return (
            <main>
                <section>
                    <h1>Conversão Rápida</h1>
                    <p>Acesse nossos conversores mais populares abaixo para converter rapidamente taxas de moeda, distância, temperatura, área e muito mais. 
                        Para acessar todos os nossos conversores, navegue no menu acima.</p>
                </section>

                <section className="grid">
                    <div className="card">
                        <p className="title">Moeda</p>
                        <div className="column">
                            <label htmlFor="from">Quero converter</label>
                            <input id="value" type="text" value={this.state.value} onChange={this.change}/>
                            <select id="from" name="from" value={this.state.from} onChange={this.change}>
                                {Object.values(this.state.moedas).map((moeda, index) => {
                                    return (
                                        <option key={index} value={moeda.code}>{moeda.name}({moeda.code})</option>
                                    );
                                })}
                            </select>
                            {/* <label htmlFor="to">Para</label>
                            <select id="to" name="to" value={this.state.to} onChange={this.change}>
                                {Object.values(this.state.moedas).map((moeda, index) => {
                                    return (
                                        <option key={index} value={moeda.code}>{moeda.name}({moeda.code})</option>
                                    );
                                })}
                            </select> */}
                            <p className="result">({this.state.from} - BRL): R$ {this.state.result}</p>
                        </div>
                    </div>

                    <div className="card">
                        <p className="title">Moeda</p>
                        <div className="column">
                            <label htmlFor="from">Quero converter</label>
                            <input id="value" type="text" value={this.state.value} onChange={this.change}/>
                            <select id="from" name="from" value={this.state.from} onChange={this.change}>
                                {Object.values(this.state.moedas).map((moeda, index) => {
                                    return (
                                        <option key={index} value={moeda.code}>{moeda.name}({moeda.code})</option>
                                    );
                                })}
                            </select>
                            {/* <label htmlFor="to">Para</label>
                            <select id="to" name="to" value={this.state.to} onChange={this.change}>
                                {Object.values(this.state.moedas).map((moeda, index) => {
                                    return (
                                        <option key={index} value={moeda.code}>{moeda.name}({moeda.code})</option>
                                    );
                                })}
                            </select> */}
                            <p className="result">({this.state.from} - BRL): R$ {this.state.result}</p>
                        </div>
                    </div>

                    <div className="card">
                        <p className="title">Moeda</p>
                        <div className="column">
                            <label htmlFor="from">Quero converter</label>
                            <input id="value" type="text" value={this.state.value} onChange={this.change}/>
                            <select id="from" name="from" value={this.state.from} onChange={this.change}>
                                {Object.values(this.state.moedas).map((moeda, index) => {
                                    return (
                                        <option key={index} value={moeda.code}>{moeda.name}({moeda.code})</option>
                                    );
                                })}
                            </select>
                            {/* <label htmlFor="to">Para</label>
                            <select id="to" name="to" value={this.state.to} onChange={this.change}>
                                {Object.values(this.state.moedas).map((moeda, index) => {
                                    return (
                                        <option key={index} value={moeda.code}>{moeda.name}({moeda.code})</option>
                                    );
                                })}
                            </select> */}
                            <p className="result">({this.state.from} - BRL): R$ {this.state.result}</p>
                        </div>
                    </div>
                </section>

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

                <footer>
                    <div>
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
                    </div>
                </footer>
            </main>
        );
    }
}

export default HomePage;