import React from "react";

class ConversorFtoC extends React.Component {
    constructor(props) {
        super(props);
        debugger;
        this.state = {
            celsius: 0,
            fahrenheit: 32
        };
    }

    convertNumber = value => {
        return parseFloat(value.match( /\d+/g ).join(''));
    };

    change = e => {
        if (e.target) {
            const value = e.target.value;
            const res = (value - 32) * (5/9);
            this.setState({fahrenheit: value, celsius: res.toFixed(2)});
        }
    };

    render() {
        return (
            <div>
                <div className="conversor">
                    <div>
                        <label>Fahrenheit (°F)</label>
                        <input id="fahrenheit" type="number" value={this.state.fahrenheit} onChange={this.change}/>
                    </div>
                    <p className="equals">=</p>
                    <div>
                        <label>Celsius (C°)</label>
                        <input id="celsius" type="number" value={this.state.celsius} readOnly/>
                    </div>
                </div>
                <div>
                    <p className="formula">Fórmula</p>
                    <p>({this.state.fahrenheit} °F − 32) × 5/9 = {this.state.celsius} °C</p>
                </div>

                <div className="details">
                    <h1>Detalhes</h1>
                    <p className="topic">Celsius</p>
                    <article>
                        Embora inicialmente definido como ponto de congelação da água (e depois como ponto de fusão do gelo), a escala Celsius é agora oficialmente uma escala derivada, definida em relação à escala de temperatura Kelvin.
                        <br/><br/>O zero na escala Celsius (0 °C) é agora definido como equivalente a 273,15 K, com uma diferença de temperatura de 1 °C equivalente a uma diferença de 1 K, ou seja, o tamanho da unidade em cada escala é a mesma. Isto significa que 100 °C, previamente definido como o ponto de ebulição da água, é agora definido como equivalente a 373,15 K.
                        <br/><br/>A escala Celsius é um sistema de intervalo, mas não um sistema de relação, ou seja, segue uma escala relativa, mas não uma escala absoluta. Isto pode ser observado porque o intervalo de temperatura entre 20 °C e 30 °C é o mesmo que entre 30 °C e 40 °C, mas 40 °C não tem o dobro da energia térmica de um ar de 20 ° C.
                        <br/><br/>A diferença de temperatura de 1 °C é equivalente a uma difer
                    </article>

                    <p className="topic">Fahrenheit</p>
                    <article>
                        O Fahrenheit é uma escala de temperatura termodinâmica, onde o ponto de congelamento da água é de 32 graus Fahrenheit (°F) e o ponto de ebulição de 212 °F (com uma pressão atmosférica normal). Isso coloca os pontos de ebulição e de congelamento da água exatamente a 180 graus de separação. Por conseguinte, um grau na escala Fahrenheit é de 1/180 de intervalo entre o ponto de congelação e o ponto de ebulição da água. O zero absoluto é definido como igual a -459,67 °F.
                        <br/><br/>A diferença de temperatura de 1 °F é o equivalente a uma diferença de temperatura de 0,556 °C.
                    </article>
                </div>
            </div>
        );
    }
}

export default ConversorFtoC;