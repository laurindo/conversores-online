import React from "react";
import VozGoogle from "./VozGoogle";

class VozGooglePage extends React.Component {
    render() {
        return (
            <div>
                <p>
                    Traduzir voz já foi algo muito mais complicado, mas graças ao nosso serviço de conversão de texto para audio ficou muito fácil.
                    Você pode digitar algum texto e clicar em gerar audio para faezr download dao audio em mp3 e compartilhar com seus amigos.
                </p>

                <VozGoogle/>

                <main style={{margin: "300px 0 100px"}}>
                    <h1>Você Sabia?</h1>

                    <p>
                        Voce sabia que a voz do google virou uma revelação da música brasileira e atpe liderou as paradas em 2019?
                    </p>
                    <p>
                    Vocal de assistente virtual é moda no brega-funk e outros estilos. DJs criam trechos de hits com app da 'mulher do tradutor' influenciados por youtubers; entenda em podcast e texto.
                    </p>

                    <p>
                    O brega-funk de Pernambuco, que toca cada vez mais pelo Brasil, é a principal cena a adotar essa voz, mas ela também aparece em outros estilos. Uma faixa com participação da "MC mulher do Google" até chegou neste ano ao 1º lugar nas paradas do Brasil: "Hit contagiante".

                    A faixa, com a frase "manda pras safadinhas" lida pela assistente virtual, é um remix em ritmo de brega-funk feito pelo DJ JS e Felipe Original para "Evoluiu", do carioca Kevin o Chris. É o auge da carreira dessa voz, que faz cada vez mais "feats" (participações) no pop brasileiro.
                    </p>

                    <p>
                    Antes de "Hit contagiante", outra dupla influente no brega-funk, Shevchenko e Elloco, usou essa voz em trechos de músicas de sucesso: "Tome empurradão" e "Ninguém fica parado".
                    </p>

                    <a href="https://g1.globo.com/pop-arte/musica/noticia/2019/11/25/como-a-voz-do-google-virou-uma-revelacao-da-musica-brasileira-e-ate-liderou-as-paradas-em-2019.ghtml">
                        Clique aqui e veja a noticia completa
                    </a>

                    <h1>Como funciona a conversão do texto para audio?</h1>

                    <p>
                        Para converter um tetxo em audio é usado uma tecnologia chamado "Text-to-Speech" ou "Síntese de Fala"
                    </p>

                    <p>
                    Síntese de fala é o processo de produção artificial de fala humana. Um sistema informático utilizado para este propósito é denominado sintetizador de fala, e pode ser implementado em software ou hardware. Um sistema texto-fala (TTS, na sigla em inglês) converte texto ortográfico em fala. Outros sistemas interpretam representação lingüística simbólica (como transcrição fonética) em fala
                    </p>

                    <p>
                    Fala sintetizada pode ser criada concatenando-se pedaços de fala gravada, armazenada num banco de dados. Os sistemas diferem no tamanho das unidades de fala armazenada. Um sistema que armazene fones ou alofones fornecem a maior faixa de saída, mas podem carecer de clareza. Para usos específicos, o armazenamento de palavras ou frases inteiras possibilita uma saída de alta qualidade. Alternativamente, um sintetizador pode incorporar um modelo do trato vocal (caminho percorrido pela fala) e outras características da fala humana, para criar como saída uma fala completamente "sintética"
                    </p>

                    <h3>
                        Um pouco de historia
                    </h3>

                    <p>
                    Muito antes da invenção do processamento de sinal eletrônico, algumas pessoas tentaram construir máquinas para emular a fala humana. 
                    
                    <br/>Algumas primeiras lendas do Brazen Head envolveram o Papa Silvestre II (946 – 1003), Albertus Magnus (1198 – 1280), e Roger Bacon (1214 – 1294). 
                    
                    <br/><br/>Em 1779, o cientista dinamarquês Christian Gottlieb Kratzenstein, que trabalhava na Academia de Ciências da Rússia, construiu modelos do trato vocal humano que podiam produzir os cinco sons das vogais longas (na notação alfabética fonética internacional: [aː], [eː] [Iː], [oː] e [uː]).
                    
                    <br/><br/>Em seguida, a "máquina de fala acústico-mecânica" de Wolfgang von Kempelen, de Bratislava, então fazendo parte da Hungria, foi descrita em um artigo em 1791. Esta máquina adicionou modelos da língua e dos lábios, permitindo que fossem produzidas tanto consoantes quanto vogais. Em 1837, Charles Wheatstone produziu uma "máquina de falar" com base no projeto de von Kempelen. Em 1846, Joseph Faber exibiu a Euphonia. Em 1923, Paget ressuscitou o projeto de Wheatstone.

                    <br/><br/>Na década de 1930, Bell Labs desenvolveu o vocoder, que automaticamente analisou a fala em seus tons e ressonâncias fundamentais. 
                    
                    <br/><br/>Do seu trabalho no vocoder, Homer Dudley desenvolveu um sintetizador de fala operado por teclado chamado The Voder (Voice Demonstrator), exibido na Feira Mundial de Nova York de 1939. 
                    
                    <br/><br/>Dr. Franklin S. Cooper e seus colegas do Haskins Laboratories começaram a construir o Pattern Playback no final dos anos 1940 e terminaram o projeto em 1950. Das várias versões diferentes deste dispositivo hardware, apenas uma continua existindo atualmente. 
                    
                    <br/><br/>A máquina converte imagens dos padrões acústicos do discurso na forma de um espectrograma de volta ao som. Usando este dispositivo, Alvin Liberman e seus colegas descobriram pistas acústicas para a percepção dos segmentos fonéticos (consoantes e vogais).

                    <br/>Os sistemas dominantes nas décadas de 1980 e 1990 foram o sistema DECtalk, baseado em grande parte no trabalho de Dennis Klatt no MIT, e o sistema Bell Labs, um dos primeiros sistemas multilíngues de linguagens independentes, fazendo uso extensivo de métodos de processamento de linguagem natural. 
                    
                    <br/><br/>Os primeiros sintetizadores de fala eletrônicos pareciam robóticos e quase nunca eram inteligíveis. A qualidade da fala sintetizada tem melhorado continuamente, mas a saída A de 2016 dos sistemas de síntese de fala contemporânea permanece claramente distinguível da fala humana real. Em 2005, Kurzweil previu que como a relação custo-desempenho tornou os sintetizadores de fala mais baratos e mais acessíveis mais pessoas poderiam se beneficiar do uso de programas texto-fala.
                    </p>

                    <a href="https://pt.wikipedia.org/wiki/S%C3%ADntese_de_fala#:~:text=S%C3%ADntese%20de%20fala%20%C3%A9%20o%20processo%20de%20produ%C3%A7%C3%A3o%20artificial%20de%20fala%20humana.&text=Um%20sistema%20texto%2Dfala%20(TTS,como%20transcri%C3%A7%C3%A3o%20fon%C3%A9tica)%20em%20fala.">
                        Clique aqui para ver mais detalhes
                    </a>
                </main>

            </div>
        );
    }
}

export default VozGooglePage;