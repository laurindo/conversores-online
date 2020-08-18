import React from "react";

class InverterText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
    }

    convert = type => {
        this.setState({result: this.state.text.split("").reverse().join("")});
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
                    <button className="blue" onClick={() => this.convert()}>Inverter Texto ou Número</button>
                </div>
            </div>
        );
    }
}

export default InverterText;