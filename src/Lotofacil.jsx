import React from "react";

class Lotofacil extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lotofacil: {
                minValue: 11,
                maxValue: 15,
                size: 25,
                result: [],
            },
            quina: {
                minValue: 5,
                maxValue: 15,
                size: 80,
                result: []
            },
            lotomania: {
                minValue: 15,
                maxValue: 50,
                size: 100,
                result: []
            }
        };
    }

    generate = type => {
        let x = 0;
        let values = [];
        while (x < this.state[type].minValue) {
            const value = Math.floor(Math.random() * this.state[type].size);
            if (!values.includes(value)) {
                values.push(value);
                x++;
            }
        }
        this.setState({[type]: {...this.state[type], result: values}});
    };

    render() {
        return (
            <div>
                {this.props.lotofacil && (
                    <div className="card">
                        <h1>Gerar Numeros da Lotofácil</h1>
                        <div>
                            <p>Digite o número de sua aposta entre (min: 11 e max: 15)</p>
                            <input 
                                type="number" 
                                placeholder="Digite o número da aposta mínima" 
                                value={this.state.lotofacil.minValue} 
                                onChange={e => {
                                    this.setState({lotofacil: {...this.state.lotofacil, minValue: e.target.value}})
                                }}
                            />
                        </div>
                        <div className="loteria">
                            {this.state.lotofacil.result.map((r, index) => (
                                <label key={index}>{r}&nbsp;</label>
                            ))}
                        </div>
                        <button className="blue" onClick={() => this.generate("lotofacil")} disabled={this.state.lotofacil.minValue < 11 || this.state.lotofacil.minValue > 15}>Clique para Gerar</button>
                    </div>
                )}

                {this.props.quina && (
                    <div className="card">
                        <h1>Gerar Numeros da Quina</h1>
                        <div>
                            <p>Digite o número de sua aposta entre (min: 5 e max: 15)</p>
                            <input 
                                type="number" 
                                placeholder="Digite o número da aposta mínima" 
                                value={this.state.quina.minValue} 
                                onChange={e => {
                                    this.setState({quina: {...this.state.quina, minValue: e.target.value}})
                                }}
                            />
                        </div>
                        <div className="loteria">
                            {this.state.quina.result.map((r, index) => (
                                <label key={index}>{r}&nbsp;</label>
                            ))}
                        </div>
                        <button className="blue" onClick={() => this.generate("quina")} disabled={this.state.quina.minValue < 5 || this.state.quina.minValue > 15}>Clique para Gerar</button>
                    </div>
                )}

                {this.props.lotomania && (
                    <div className="card">
                        <h1>Gerar Numeros da Lotomania</h1>
                        <div>
                            <p>Digite o número de sua aposta entre (min: 15 e max: 50)</p>
                            <input 
                                type="number" 
                                placeholder="Digite o número da aposta mínima" 
                                value={this.state.lotomania.minValue} 
                                onChange={e => {
                                    this.setState({lotomania: {...this.state.lotomania, minValue: e.target.value}})
                                }}
                            />
                        </div>
                        <div className="loteria">
                            {this.state.lotomania.result.map((r, index) => (
                                <label key={index}>{r}&nbsp;</label>
                            ))}
                        </div>
                        <button className="blue" onClick={() => this.generate("lotomania")} disabled={this.state.lotomania.minValue < 15 || this.state.lotomania.minValue > 50}>Clique para Gerar</button>
                    </div>
                )}
                
            </div>
        );
    }
}

export default Lotofacil;