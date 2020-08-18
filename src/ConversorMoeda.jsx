import React from "react";
import axios from "axios";

class ConversorMoeda extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            moedas: [],
            from: props.coin || "USD",
            to: "BRL",
            result: 0
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.coin !== prevProps.coin) {
            this.format(this.props.coin);
        }
    }

    componentDidMount() {
        axios.get("https://economia.awesomeapi.com.br/json/all").then(res => {
            this.setState({moedas: res.data});
        });
    }

    change = e => {
        this.setState({[e.target.id]: e.target.value}, () => {
            const {moedas, from, to, value} = this.state;
            const resFrom = value * parseFloat(moedas[from].high);
            this.setState({result: new Intl.NumberFormat('pt-BR', { maximumSignificantDigits: 3 }).format(resFrom)});
        });
    };

    format = from => {
        const {moedas, value} = this.state;
        const resFrom = value * parseFloat(moedas[from].high);
        this.setState({from, result: new Intl.NumberFormat('pt-BR', { maximumSignificantDigits: 3 }).format(resFrom)});
    };

    render() {
        return (
            <div className="card">
                <p className="title">Moeda</p>
                <div className="column">
                    <label htmlFor="from" className="lb">Quero converter BRL</label>
                    <input id="value" type="text" value={this.state.value} onChange={this.change}/>

                    <label htmlFor="from" className="lb">Para</label>
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
        );
    }
}

export default ConversorMoeda;