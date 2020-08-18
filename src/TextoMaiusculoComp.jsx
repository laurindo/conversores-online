import React from "react";

class TextoMaiusculoComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
    }

    convert = type => {
        if (type === "upper") {
            this.setState({result: this.state.text.toUpperCase()});
        } else if (type === "lower") {
            this.setState({result: this.state.text.toLowerCase()});
        }
            
    };

    render() {
        return (
            <div className="total-chars">
                <div className="grid" style={{"gridTemplateColumns": "1fr 1fr"}}>
                    <div>
                        <label>Original</label><br/>
                        <textarea id="text" value={this.state.text} placeholder="Digite ou cole seu texto aqui" onChange={e => this.setState({text: e.target.value})}/>
                    </div>
                    <div>
                        <label className="lb">Resultado</label>
                        <textarea id="text" value={this.state.result} readOnly/>
                    </div>
                    
                </div>
                <div>
                    <button className="blue" onClick={() => this.convert("upper")}>(ABC) Maiúsculo</button>
                    <button className="blue" onClick={() => this.convert("lower")}>(abc) Minúsculo</button>
                </div>
            </div>
        );
    }
}

export default TextoMaiusculoComp;