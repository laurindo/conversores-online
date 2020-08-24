import React from "react";
import moment from "moment";

class DataPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            yearsSize: "",
            years: ""
        };
    }

    convert = () => {
        function getAge(date_1, date_2) {
            //convert to UTC
            var date2_UTC = new Date(Date.UTC(date_2.getUTCFullYear(), date_2.getUTCMonth(), date_2.getUTCDate()));
            var date1_UTC = new Date(Date.UTC(date_1.getUTCFullYear(), date_1.getUTCMonth(), date_1.getUTCDate()));

            var yAppendix, mAppendix, dAppendix;

            //--------------------------------------------------------------
            var days = date2_UTC.getDate() - date1_UTC.getDate();
            if (days < 0) {
                date2_UTC.setMonth(date2_UTC.getMonth() - 1);
                days += DaysInMonth(date2_UTC);
            }
            //--------------------------------------------------------------
            var months = date2_UTC.getMonth() - date1_UTC.getMonth();
            if (months < 0) {
                date2_UTC.setFullYear(date2_UTC.getFullYear() - 1);
                months += 12;
            }
            //--------------------------------------------------------------
            var years = date2_UTC.getFullYear() - date1_UTC.getFullYear();
            if (years > 1) yAppendix = " anos";
            else yAppendix = " ano";
            if (months > 1) mAppendix = " months";
            else mAppendix = " month";
            if (days > 1) dAppendix = " days";
            else dAppendix = " day";

            return years + yAppendix;
        }


        function DaysInMonth(date2_UTC) {
            var monthStart = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth(), 1);
            var monthEnd = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth() + 1, 1);
            var monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
            return monthLength;
        }

        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const currentDay = new Date().getDay();

        const r = getAge(new Date(this.state.years, currentMonth, currentDay), new Date(currentYear, currentMonth, currentDay));

        this.setState({result: r});
    };

    convert2 = () => {
        const {type, yearsSize} = this.state;
        const r = moment(this.state.yearsSize, this.state.type)
        if (type === "months") {
            this.setState({resultSize: this.state.yearsSize * 12});
        } else if (type === "days") {
            this.setState({resultSize: yearsSize * 365});
        } else if (type === "hours") {
            this.setState({resultSize: yearsSize * 365 * 24});
        } else if (type === "minutes") {
            this.setState({resultSize: yearsSize * 365 * 24 * 60});
        } else if (type === "seconds") {
            this.setState({resultSize: yearsSize * 365 * 24 * 60 * 60});
        }
        
    };

    render() {
        return (
            <div>
                <div className="card">
                    <h1>Anos em (meses/dias/horas/minutos/segundos)</h1>
                    <div>
                        <input 
                            type="number" 
                            placeholder="Digite a quantidade de anos" 
                            value={this.state.yearsSize} 
                            onChange={e => {
                                this.setState({yearsSize: e.target.value})
                            }}
                        />
                        <select value={this.state.type} onChange={e => this.setState({type: e.target.value, resultSize: ""})}>
                            <option value="">Selecionar um</option>
                            <option value="months">Meses</option>
                            <option value="days">Dias</option>
                            <option value="hours">Horas</option>
                            <option value="minutes">Minutos</option>
                            <option value="seconds">Segundos</option>
                        </select>
                    </div>
                    <div className="loteria">
                        {this.state.resultSize && <p>Resultado: {this.state.resultSize}</p>}
                    </div>
                    <button className="blue" onClick={() => this.convert2()}>Clique para Gerar</button>
                </div>

                <br/>

                <div className="card">
                    <h1>Qual a minha idade?</h1>
                    <div>
                        <input 
                            type="number" 
                            placeholder="Ano de nascimento" 
                            value={this.state.years} 
                            onChange={e => {
                                this.setState({years: e.target.value})
                            }}
                        />
                    </div>
                    <div className="loteria">
                        {this.state.result && <p>Resultado: {this.state.result}</p>}
                    </div>
                    <button className="blue" onClick={() => this.convert()}>Clique para Gerar</button>
                </div>

                 <br/><br/><br/><br/><br/>

                 <h1>Como Calcular Anos em (meses/dias/horas/minutos/segundos)?</h1>
                 <p>
                    <strong>1 ano = 365 dias</strong>
                    <p>
                            <b>meses:</b><br/>
                            1 ano = 12 meses<br/>
                            12 meses = x<br/>
                            x = 1 * 12 = 12 meses<br/><br/></p>

                    <p>
                        <b>dias:</b><br/>
                        1 ano = 365 dias<br/>
                        1 ano = x<br/>
                        x = 1 * 365 = 365 dias<br/><br/></p>

                    <p>
                            <b>horas:</b><br/>
                            1 dia = 24 horas<br/>
                            365 dias = x<br/>
                            x = 365 * 24 = 8.760 horas<br/><br/></p>
                    <p>
                        <strong>minutos:<br/></strong>
                            1 hora = 60 min<br/>
                            8760 h  =    x<br/>
                            x = 8760 * 60 = 525.600 minutos<br/><br/></p>
                    
                    <p>
                        <b>segundos:<br/></b>
                            1 min = 60 seg<br/>
                            525600 min =  x<br/>
                            x = 525600 * 60 = 31.536.000 segundos
                            </p>
                 </p>
                
            </div>
        );
    }
}

export default DataPage;