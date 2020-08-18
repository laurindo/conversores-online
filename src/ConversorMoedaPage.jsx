import React from "react";
import axios from "axios";
import ConversorMoeda from "./ConversorMoeda";

class ConversorMoedaPage extends React.Component {
    constructor(props) {
        super(props);
        debugger;
        this.state = {
            value: 0,
            moedas: [],
            from: this.getCoin(),
            to: "BRL",
            result: 0
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.location.search !== prevProps.location.search) {
            this.props.history.push(`/cotacao/moeda?coin=${this.getCoin()}`);
            this.setState({from: this.getCoin()});
        }        
    }

    componentDidMount() {
        axios.get("https://economia.awesomeapi.com.br/json/all").then(res => {
            this.setState({moedas: res.data});
        });
    }

    getCoin = () => this.props.location.search.replace("?coin=", "") || "USD";

    change = e => {
        this.setState({[e.target.id]: e.target.value}, () => {
            const {moedas, from, to, value} = this.state;
            const resFrom = value * parseFloat(moedas[from].high);
            this.setState({result: new Intl.NumberFormat('pt-BR', { maximumSignificantDigits: 3 }).format(resFrom)});
        });
    };

    render() {
        debugger;
        return (
            <section>
                <ConversorMoeda coin={this.state.from}/>

                <h1 style={{"margin": "100px 0"}}>Você Sabia?</h1>
                <p>
                    Câmbio é a relação entre duas moedas diferentes, ou seja, o quão valorizada uma está em relação a outra
                </p>

                <h3>
                    Dólar comercial ou dólar turismo?
                </h3>
                <p>
                Além de saber o que faz o dólar subir ou cair, existe uma outra dúvida muito comum relacionada à moeda americana: afinal, qual é a diferença entre dólar comercial e dólar turismo?

Se você já comprou dólares para alguma viagem aos EUA, provavelmente se surpreendeu ao perceber que o preço que você pagou pela moeda não foi o mesmo que você viu anunciado no jornal. Isso porque o dólar comercial e o turismo não são exatamente a mesma coisa.
                </p>

                <h3>
                    O que é dólar comercial?
                </h3>
                <p>
                O dólar comercial é a cotação “real” da moeda americana, usada em transações comerciais, como a compra e venda de mercadorias entre empresas brasileiras e estrangeiras. Além disso, ele também é usado para várias outras movimentações. Um exemplo são os empréstimos de brasileiros em outros países registrados no Banco Central.
                </p>

                <h3>
                O que é dólar turismo?
                </h3>
                <p>
                Já o dólar turismo é aquele que compramos na casa de câmbio quando queremos viajar para o exterior. Bem como, é o aquele que utilizamos ao comprar alguma coisa em sites internacionais, como passagens aéreas, eletrônicos, entre outros itens.
                <br/><br/>
                Ele é mais caro que o dólar comercial pois tem o acréscimo do Imposto sobre Operações Financeiras (o IOF), além de custos logísticos para que a moeda chegue até a sua mão. Esses custos envolvem, por exemplo, o transporte dos dólares dos EUA até o Brasil e depois até a casa de câmbio, além da manutenção da segurança da moeda em cofres. Portanto, é justamente por isso que há uma diferença na cotação do dólar comercial e do dólar turismo.
                </p>

                <h3>
                4 fatores que influenciam a alta e a queda do dólar
                </h3>
                <p>
                No geral, existem 4 principais fatores que fazem o dólar subir ou cair. Veja quais são esses fatores a seguir!
                </p>

                <h3>
                Câmbio flutuante
                </h3>
                <p>
                As oscilações de moedas estrangeiras ocorrem devido à entrada e saída de fluxos de moedas internacionais na economia. No Brasil, nossa taxa de câmbio varia segundo o mercado.
                </p>

                <p>
                Desde 1999, o Brasil se tornou um país com uma economia com câmbio que funciona por regime de banda cambial (mínimo e máximo do dólar).
                </p>

                <p>
                A taxa de câmbio não é definida pelo governo. Ela varia de acordo com o movimento do mercado, com a lei da oferta e da demanda, além da procura de dólares no Brasil. Nesse cenário, o Banco Central intervém quando o valor da moeda atinge alta e baixa volatilidade durante o pregão. Veja algumas variáveis que alteram os valores da moeda.
                </p>

                <h4>
                Superávit ou déficit comercial
                </h4>
                <p>
                O superávit ocorre quando o saldo das exportações é maior que o de importações. Por outro lado, quando ocorre o contrário, temos o chamado déficit comercial.
                </p>

                <h4>
                Gastos de turistas estrangeiros ou gastos de brasileiros no exterior
                </h4>
                <p>
                Os gastos no exterior são mais um termômetro para medir se a moeda nacional está alta ou não. Quando desvalorizada, os brasileiros tendem a consumir menos no exterior. Quando em alta, o poder de compra dos consumidores aumenta e espera-se um maior nível de gastos no exterior.
                </p>

                <h6>
                Juros brasileiros e juros americanos
                </h6>

                <p>
                Como os títulos públicos federais americanos exprimem confiança, uma alta nos juros americanos faz com que haja uma maior concentração de capitais por lá. Com a escassez da divisa, é provável que exista pressão sobre a divisa, aumentando o valor do dólar e depreciando a moeda brasileira. Com a depreciação, é de se esperar um aumento das exportações e do saldo da balança comercial.
                </p>

                <p>
                Porém, quando os juros americanos estão baixos, é mais provável que os investidores busquem as economias de países periféricos para investir, com objetivo de obter maior rentabilidade.
                </p>

                <p>
                Com a entrada de dólares em tais economias (como a nossa), o valor da divisa internacional tende a cair, valorizando o real, aumentando o poder de importação e causando reflexos negativos quanto ao saldo da balança comercial.
                </p>

                <h3>
                Reservas cambiais

                </h3>
                <p>
                Outro fator que influencia a queda e alta do dólar é a chamada reserva cambial. Em resumo, ela é o montante de moeda estrangeira e ouro acumulado por um país.


                </p>

                <p>
                As reservas cambiais são fundamentais para as negociações internacionais realizadas em dólar. Além disso, ela também é importante no pagamento de fornecedores.


                </p>

                <p>
                A queda dos fundos da reserva cambial pode provocar uma valorização da moeda estrangeira. Atualmente, o Brasil tem reservas cambiais consistentes.


                </p>

                <h3>
                Crises financeiras

                </h3>
                <p>
                Independentemente se internas ou externas, as crises financeiras causam influência na variação do dólar. Isso porque os investidores não vão querer investir em uma economia em risco. Portanto, tendem a:


                </p>

                <ul>
                    <li>vender suas ações;</li>
                    <li>converter em dólar;</li>
                    <li>retirar suas aplicações;</li>
                    <li>
                    realocar as aplicações em produtos menos voláteis, como o dólar e ouro.

                    </li>
                </ul>

                <p>
                Assim, a valorização e a alta da moeda americana se tornam praticamente inevitáveis. Por ser um pais emergente de alta especulação financeira, o Brasil costuma sentir bastante os efeitos causados pelas crises.


                </p>

                <h3>
                Economia dos EUA e o mundo

                </h3>
                <p>
                Como os Estados Unidos são uma das economias mais fortes e importantes do mundo, o que ocorre no país impacta diretamente na cotação do dólar.


                </p>

                <p>
                Por isso, questões político-econômicas de cunho internacional, como o embate comercial entre EUA e China, a desaceleração no continente europeu e o Brexit, afetam o ânimo dos investidores.


                </p>

                <p>
                Como a relação de interdependência entre as economias é cada vez maior, existe a preocupação sobre os efeitos que as incertezas e expectativas negativas diante de tais eventos podem causar na economia mundial.


                </p>

                <p>
                A maior frequência destes eventos faz com que investidores recorram a investimentos comumente mais tradicionais e interpretados como mais seguros. Logo, este movimento leva a uma depreciação das moedas de países emergentes, como a nossa.


                </p>

                <h1>
                Quais são os impactos dessa variação?

                </h1>

                <p>
                Agora que já vimos os 4 fatores que fazem o dólar subir ou cair, precisamos falar dos efeitos que essa variação causa na economia e na nossa vida em geral.


                </p>

                <p>
                No geral, podemos dividir o impacto da oscilação da cotação do dólar em dois grupos:


                </p>

                <ul>
                    <li>
                    nos preços de produtos e serviços do nosso mercado interno;

                    </li>
                    <li>
                    nos investimentos feitos no mercado financeiro.

                    </li>
                </ul>

                <h3>
                Impactos nos preços de produtos e serviços

                </h3>

                <p>
                O dólar comercial é usado nas relações comerciais entre as empresas brasileiras e internacionais. Assim, tudo que é comprado lá fora e trazido para o mercado interno sofre impacto com a oscilação da moeda americana.


                </p>

                <p>
                Na média, por exemplo, o Brasil consome 11 milhões de toneladas de trigo, mas produz somente 5,4 milhões. Isso significa que cerca de 50% do trigo usado no país é importado de outros países, especialmente da Argentina.


                </p>

                <p>
                Por isso, quando há oscilação do dólar, todos os produtos feitos à base de trigo — como pães, bolos, pizzas, macarrão, biscoitos e outras massas — sofrem alteração em seus preços.


                </p>

                <p>Do mesmo modo, quando a cotação do dólar favorece a exportação, o preço interno é afetado pela escassez de produtos no nosso mercado interno. Foi isso que aconteceu no recente caso da exportação de carne brasileira para a China, por exemplo.

</p>

                <h3>
                Impactos nos investimentos

                </h3>

                <p>
                Em relação aos investimentos, a oscilação do dólar cria cenários que potencializam certas aplicações, enquanto prejudica o desempenho de outras.


                </p>

                <p>
                A oscilação do dólar afeta indiretamente, por exemplo, os títulos de Renda Fixa atrelados ao IPCA, uma vez que a inflação tende a ficar controlada quando o dólar cai.


                </p>

                <p>
                Já na Bolsa de Valores, há forte correlação negativa entre a oscilação do dólar e a variação do Ibovespa (quando um sobe, outro tende a cair), embora isso nem sempre seja lei.


                </p>

                <p>
                São os investimentos de fundos cambiais, no entanto, que denotam maior influência da oscilação do dólar. Isso ocorre porque seus rendimentos estão diretamente relacionados à valorização ou desvalorização do real.


                </p>

                <p>
                Se você quer se proteger, uma boa ideia é investir em fundos multimercados, que tradicionalmente se defendem das oscilações do câmbio.


                </p>

                <p>
                Fonte:    
                </p>
                <a href="https://blog.ativainvestimentos.com.br/blog/2019/03/27/entenda-o-que-faz-o-dolar-subir-ou-cair-em-relacao-ao-real/">Ativa Investimentos</a>
            </section>
        );
    }
}

export default ConversorMoedaPage;