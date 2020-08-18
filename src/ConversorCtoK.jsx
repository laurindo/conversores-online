import React from "react";

class ConversorCtoK extends React.Component {
    constructor(props) {
        super(props);
        debugger;
        this.state = {
            kelvin: -273.15,
            celsius: 0
        };
    }

    convertNumber = value => {
        return parseFloat(value.match( /\d+/g ).join(''));
    };

    change = e => {
        if (e.target) {
            const value = this.convertNumber(e.target.value);
            const res = value + 273.15;
            this.setState({celsius: value, kelvin: res.toFixed(2)});
        }
    };

    render() {
        return (
            <div>
                <div className="conversor">
                    <div>
                        <label>Celsius (C°)</label>
                        <input id="celsius" type="number" value={this.state.celsius} onChange={this.change}/>
                    </div>
                    <p className="equals">=</p>
                    <div>
                        <label>Kelvin (K)</label>
                        <input id="kelvin" type="number" value={this.state.kelvin} readOnly/>
                    </div>
                </div>
                <div>
                    <p className="formula">Fórmula</p>
                    <p>{this.state.celsius} °C + 273,15 = {this.state.kelvin} K</p>
                </div>

                <div className="details">
                    <h1>Detalhes</h1>
                    
                    <p className="topic">Calor e Temperatura</p>
                    <article>
                        O Calor é a energia transferida de um corpo para o outro quando existe diferença de temperatura. 
                        <br/>Já temperatura é a medida de agitação das moléculas.  
                        <br/>Por exemplo: ao colocarmos gelo no suco, as moléculas do suco estão mais agitadas do que as do gelo. 
                        <br/>Por isso dizemos que a temperatura do suco é maior que a do gelo ou que o suco é mais quente que o gelo. 
                        <br/>Quando colocamos eles em contato ocorre transferência de energia. 
                        <br/>Consequentemente, o gelo esquenta e o suco esfria.
                    </article>
                    
                    <p className="topic">Celsius</p>
                    <article>
                        Embora inicialmente definido como ponto de congelação da água (e depois como ponto de fusão do gelo), a escala Celsius é agora oficialmente uma escala derivada, definida em relação à escala de temperatura Kelvin.
                        <br/><br/>O zero na escala Celsius (0 °C) é agora definido como equivalente a 273,15 K, com uma diferença de temperatura de 1 °C equivalente a uma diferença de 1 K, ou seja, o tamanho da unidade em cada escala é a mesma. Isto significa que 100 °C, previamente definido como o ponto de ebulição da água, é agora definido como equivalente a 373,15 K.
                        <br/><br/>A escala Celsius é um sistema de intervalo, mas não um sistema de relação, ou seja, segue uma escala relativa, mas não uma escala absoluta. Isto pode ser observado porque o intervalo de temperatura entre 20 °C e 30 °C é o mesmo que entre 30 °C e 40 °C, mas 40 °C não tem o dobro da energia térmica de um ar de 20 ° C.
                        <br/><br/>A diferença de temperatura de 1 °C é equivalente a uma difer
                    </article>

                    <p className="topic">Kelvin</p>
                    <article>
                        <br/><br/>William Tomson (conhecido como Lord Kelvin) estudando o comportamento do gases, descobriu a menor temperatura que um corpo poderia atingir, que seria equivalente a -273°C. 
                        <br/><br/>A partir daí determinou o ponto zero de sua escala. Criou assim o que chamamos de escala absoluta, pois utiliza um fenômeno universal como referência. 
                        <br/><br/>Nela a água congela em 273 Kelvin (K) e ferve a 373 K - repare que não utilizamos graus, pois esta é a escala absoluta e não uma comparação entre fenômenos como as outras escalas.
                    </article>
                </div>
            </div>
        );
    }
}

export default ConversorCtoK;