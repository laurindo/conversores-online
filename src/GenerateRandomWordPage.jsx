import React from "react";
import axios from "axios";

class GenerateRandomWordPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: "",
            qtd: 5
        };
    }

    convert = length => {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        this.setState({result});
    };

    render() {
        return (
            <div className="total-chars center">
                <h1>Clique no botão "Gerar" pra receber um conjunto de letras randômicas.</h1>
                <p>Inicilamente são geradas 5 palavras, mas você pode alterar a quantidade no campo de texto</p>
                <p>As letras geradas são letras e números minúsculo e maiúsculo</p>
                <div>
                    {this.state.result && <p className="word-generated">{this.state.result}</p>}
                </div>
                <small>Quantidade total de letras</small>
                <input placeholder="Quantidade de Letras" type="number" value={this.state.qtd} onChange={e => this.setState({qtd: e.target.value})}/>
                <div>
                    <button className="blue" onClick={() => this.convert(this.state.qtd)}>Gerar</button>
                </div>
            </div>
        );
    }
}

export default GenerateRandomWordPage;