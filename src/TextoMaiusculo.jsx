import React from "react";
import TextoMaiusculoComp from "./TextoMaiusculoComp";

class TextoMaiusculo extends React.Component {
    render() {
        return (
            <div>
                <TextoMaiusculoComp/>

                <div className="details">
                    <h1>Você Sabia?</h1>
                    <article>
                        A tipografia é a arte e o processo de criação na composição e impressão de um texto, física ou digitalmente. Assim como no design gráfico em geral, o objetivo principal da tipografia é dar ordem estrutural e forma à comunicação escrita. A tipografia tem sua origem principal nas primeiras impressões com tipos gráficos (letras em relevos confeccionadas em madeira, barro ou ferro) passou também a ser um modo de se referir à gráfica que usa uma prensa de tipos móveis.
                    </article>

                    <p className="topic">Etimologia</p>
                    <article>
                        A palavra "tipografia" (do latim renascimental typographia) foi cunhada a partir dos elementos da língua grega τύπος [týpos], que significa "impressão", e -γραφία [-graphía], "escrita".
                    </article>

                    <p className="topic">Invenção da imprensa</p>
                    <article>
                        A tipografia clássica baseia-se em pequenos paralelepípedos de metal com relevos de letras e símbolos — os tipos móveis.

                        <br/><br/>Tipos rudimentares foram inventados inicialmente pelos chineses. No século XV, o alemão Johannes Gutenberg desenvolveu tipos móveis em metal e aperfeiçoou a prensa tipográfica. O conceito básico de Gutenberg foi o da reutilização dos tipos para compor diferentes textos. Mostrou-se eficaz e é utilizada até aos dias de hoje, constituindo a base da imprensa durante muitos séculos. 
                        Essa revolução que deu início à comunicação em massa, que foi chamada pelo teórico Marshall McLuhan como o início do “homem tipográfico”.

                        <br/><br/>Com advento dos computadores e da edição eletrônica de texto, a tipografia permanece viva nas formatações, estilos e grafias.
                    </article>

                    <p className="topic">Tipografias mais famosas</p>
                    <ol>
                        <li><a href="https://pt.wikipedia.org/wiki/Arial" target="blank">Arial</a></li>
                        <li><a href="https://pt.wikipedia.org/wiki/Bodoni" target="blank">Bodoni</a></li>
                        <li><a href="https://pt.wikipedia.org/wiki/Comic_Sans_MS" target="blank">Sans Undertale</a></li>
                        <li><a href="https://pt.wikipedia.org/wiki/Frutiger" target="blank">Frutiger</a></li>
                        <li><a href="https://pt.wikipedia.org/wiki/Futura_(tipografia)" target="blank">Futura</a></li>
                        <li><a href="https://pt.wikipedia.org/wiki/Garamond" target="blank">Garamond</a></li>
                        <li><a href="https://pt.wikipedia.org/wiki/Gill_Sans" target="blank">Gil Sans</a></li>
                        <li><a href="https://pt.wikipedia.org/wiki/Helvetica" target="blank">Helvetica</a></li>
                        <li><a href="https://pt.wikipedia.org/wiki/Times_New_Roman" target="blank">Times New Roman</a></li>
                        <li><a href="https://pt.wikipedia.org/wiki/Univers" target="blank">Univers</a></li>
                    </ol>
                </div>
            </div>
        );
    }
}

export default TextoMaiusculo;