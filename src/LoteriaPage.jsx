import React from "react";
import Lotofacil from "./Lotofacil";

class LoteriaPage extends React.Component {
    render() {
        return (
            <div>

                <h1>Números da Loteria</h1>
                
                <Lotofacil lotofacil/>

                <br/>

                <Lotofacil quina/>

                <br/>

                <Lotofacil lotomania/>

                <br/>

                <div className="details">
                    <h1>Você Sabia?</h1>
                    Considerado um dos jogos mais fáceis das loterias Caixa, a <b>Lotofácil</b> premia o apostador que acertar 11, 12, 13, 14 ou 15 números. 
                    <br/>Para jogar, basta marcar entre 15 a 18 números, entre os 25 disponíveis.
                    <br/><br/> <b>Sorteios</b>
                    <br/> Os sorteios são realizados às segundas, quartas e sextas-feiras, sempre às 20h.
                </div>
            </div>
        );
    }
}

export default LoteriaPage;