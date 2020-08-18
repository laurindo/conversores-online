import React from "react";
import axios from "axios";

class SortNames extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: "",
            result: ""
        };
    }

    convert = () => {
        const index = Math.ceil(Math.random() * (this.state.words.split(",").length - 1));
        this.setState({result: this.state.words.split(",")[index]});
    };

    render() {
        return (
            <div className="total-chars">
                <div className="grid" style={{"gridTemplateColumns": "1fr 1fr"}}>
                    <div>
                        <label>Lista de Nomes</label><br/>
                        <textarea 
                            id="words" 
                            value={this.state.words} 
                            placeholder="Digite os nomes separados por vírgula" 
                            onChange={e => this.setState({words: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="lb">Nome Sorteado</label>
                        <textarea id="text" value={this.state.result} readOnly/>
                    </div>
                    
                </div>
                <div>
                    <button className="blue" onClick={() => this.convert()}>Sortear</button>
                </div>
            </div>
        );
    }
}

export default SortNames;