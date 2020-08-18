import React from "react";

class TextoTotalChars extends React.Component {
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

    render() {
        return (
            <div>
                <h1>Esta é uma calculadora on-line grátis que conta o número de caracteres ou letras num texto, útil para os seus tweets no Twitter, bem como uma infinidade de outros aplicativos.

Quer se trate de Snapchat, Twitter, Facebook ou somente uma nota para colegas de trabalho ou funcionários empresariais, o número de caracteres totais é importante. O que é dito pode não ser tão importante quanto a forma como é dito ou o número de caracteres usados.
</h1>

                <div>
                    <p>Escreve o cole o texto nesse online contador de caracteres:</p>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </div>

                <div>
                    <h4 class="topicTitles">Limites de caracteres do Facebook:</h4>
                    <p>
                        Como qualquer outro site de redes sociais, o Facebook tem requisitos de comprimento quando se trata de escrever no Facebook, no seu estado, mensagens e comentários. Compreender quantos caracteres podem ser usados, permite o uso efetivo do Facebook como uma ferramenta comercial ou de campanha.<br/>
                        <br/>
                        A <b>mensagem privada via Facebook Messenger</b> é uma das principais formas de interação entre as pessoas no Facebook. Esse tipo de mensagem direta pode ser uma mensagem instantânea (bate-papo) ou uma mensagem normal do tipo de e-mail. Nas mensagens instantâneas e regulares, existe um limite de <b>20 000 caracteres</b>. <br/>
                        <br/>
                        O <b>status do Facebook</b> pode ter limites de caracteres, mas considerando que tem um limite de 63.206 caracteres, a menos que você esteja escrevendo a <i>Guerra e Paz</i>, está tudo bem. O Facebook mudou este número 12 vezes para caber o estado e o feedback de usuário.<br/>
                        <br/>
                        <b>As postagens no Facebook</b> têm um limite de 63.206 caracteres, mas <b>começa</b> com 477 caracteres. Isso permite que alguém escreva uma resposta pensada ou crie algo semelhante a um blog.<br/>
                        <br/>
                        Uma área que raramente é usada no Facebook é a seção <b>Notas</b>. É uma área de escrita que muitos blogueiros acham útil. A razão é porque as <b>Facebook Notes</b> não possuem um limite de caracteres, até ao momento. Os usuários são direcionados para essa área se tiverem feito um estado ou comentários muito longos. Isso pode ser usado para beneficiar alguém que queira fazer um post mais longo e deseje compartilhá-lo com os seus amigos marcando-os.<br/>
                        <br/>
                        No Facebook, os usuários carregam e publicam novas fotos todos os dias. Ao carregar imagens, os usuários podem precisar escrever uma descrição, com menos de 63.206 caracteres. Quando é carregado, alguns amigos comentarão sobre o post, o que deve dar-lhes um limite de caracteres de 8000 caracteres.<br/>
                        <br/>
                        Um nome de usuário da conta do Facebook tem um limite de 50 caracteres.<br/>
                        <br/>
                        Ao criar uma página no Facebook, também há um limite de 255 caracteres para a descrição ou breve resumo.<br/>
                        <br/>
                        Para resumir os limites de caracteres do Facebook:
                    </p>
                    <ul style="margin-left:50px">
						<li>sistema de mensagens / mensageiro privado: 20.000 caracteres no total para uma única mensagem</li>
						<li>status / postagens no mural / feed de notícias em postagens longas: 63.206 caracteres no máximo</li>
						<li>descrições de imagens: menos de 63.206 caracteres <br/>[63.206 - o tamanho da imagem (por exemplo, 2.048 ou qualquer tamanho) = mais ou menos 60.000 caracteres]</li>
						<li>comentários de foto / postagem: não pode ter mais de 8.000 caracteres</li>
						<li>nome de usuário da conta: limite de 50 caracteres</li>
						<li>descrição da página ou breve resumo: limite de 255 caracteres</li>
					  </ul>

                      <h4 class="topicTitles">Como as letras são escritas e contabilizadas</h4>
                      <p>Na sociedade atual e moderna, as letras vêm em todas as formas. Usamos letras para nos comunicarmos com outras pessoas em qualquer lugar do mundo. No mundo dos negócios, os funcionários criam letras comerciais numa dada altura e incluem a contagem dos caracteres. Para simplificarem a sua vida, as pessoas utilizam software para escrever no documento e contar o número de palavras e caracteres que usam. Outra forma de <a href="https://www.quantasletras.com/">contar o número de caracteres</a> ou palavras em letras é através dum contador de caracteres on-line.</p>
                      <p>Quando um texto ou artigo está escrito, é importante conhecer o <a href="https://www.quantasletras.com/">número de caracteres ou letras</a>. Sabemos que temos que expressar o que sentimos e como deve ser retratado. E pode não ser fácil contar o número exato de letras, especialmente se for feito manualmente. Se a contagem de caracteres for necessária, pode parecer uma tarefa chata e assustadora. No entanto, existem programas ou contadores de caracteres para fazer a contagem para você. Desta forma, escrever o que é necessário é simples e o software fará toda a contagem dos caracteres.</p>
                      <p>Depois de você escrever um artigo ou texto, permita que o programa conte o número de caracteres que foram escritos. Isso deve dar uma ideia da contagem, e <a href="https://www.quantasletras.com/">quantas letras</a> ainda precisam ser escritas. Lembre-se sempre que a contagem de caracteres inclui todos os caracteres numa frase e não somente as letras. É assim que os sites contam os caracteres quando têm um limite no tamanho do texto, muitas vezes incluindo os espaços entre as letras.</p>
                </div>

            </div>
        );
    }
}

export default TextoTotalChars;