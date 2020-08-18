import React from "react";
import axios from "axios";

class GenerateRandomWord extends React.Component {
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
                <div>
                    <p>{this.state.result}</p>
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

export default GenerateRandomWord;