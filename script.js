alert("Qual seu nome?");
let nome = prompt("Digite seu nome:");
alert("Olá, " + nome + "! Seja bem-vindo(a) ao jogo Joquempô.");

const opcoes = ["pedra", "papel", "tesoura"];

function jogadaComputador() {
    const escolhacomputador=(Math.floor(Math.random() * 3));
    return opcoes[escolhacomputador]
}

function analisarJogada(jogadaUsuario, jogadaComputador) {

    alert("A jogada do computador foi: " + jogadaComputador);

    if (jogadaUsuario === jogadaComputador) {
        alert("Empate! Tente novamente.");
    }

    if (jogadaUsuario === "pedra" && jogadaComputador === "tesoura") {
        alert("Você ganhou! Pedra quebra tesoura.");
    }
    if (jogadaUsuario === "tesoura" && jogadaComputador === "papel") {
        alert("Você ganhou! Tesoura corta papel.");
    }
    if (jogadaUsuario === "papel" && jogadaComputador === "pedra") {
        alert("Você ganhou! Papel embrulha pedra.");
    }
    if (jogadaUsuario === "tesoura" && jogadaComputador === "pedra") {
        alert("Você perdeu! Pedra quebra tesoura.");
    }
    if (jogadaUsuario === "papel" && jogadaComputador === "tesoura") {
        alert("Você perdeu! Tesoura corta papel.");
    }
    if (jogadaUsuario === "pedra" && jogadaComputador === "papel") {
        alert("Você perdeu! Papel embrulha pedra.");
    }
}

function sentimentos() {
    let sentimento = prompt('Como você está se sentindo hoje querida? (Triste, Feliz, Nervosa, Ansiosa)');

    switch (sentimento) {
        case 'Triste':
            alert('AAAAAAA:(! Abrace a sua tristeza e saiba que assim como a vida é feita de ciclos, a tristeza faz parte de fases.');
        break;
        case 'Feliz':
            alert('Isso mesmo, a vida é curta demais para andar chorando por aí.');
        break;
        case 'Nervosa':
            alert('Calma! Esse sentimento piora tudo, faz até as coisas nao darem certo. Relaxe');
        break;
        case 'Ansiosa':
            alert('Opa... ore!');
        break;
        default:
            alert('Sentimento não reconhecido. Tente novamente.');
    }

}

function texto(){
    alert("Você sabia que o jogo Jokenpô é conhecido mundialmente como 'Rock, Paper, Scissors'?");
    alert("É um jogo simples, mas que envolve estratégia e sorte!");
    alert("Além disso, o jogo é muito popular no Japão, onde é chamado de 'Jan-Ken'.");
    alert("Existem várias variações do jogo, incluindo versões com mais opções, como 'lagarto' e 'Spock'.");
    alert("Espero que você se divirta jogando Jokenpô!");
}

let escolhaUsuario = '';

do {
    alert(" JOOOOOOOOO - QUEMPOOOOOOOO! ");
    escolhaUsuario = prompt("Escolha pedra, papel ou tesoura (ou digite 'sair' para encerrar o jogo):").toLowerCase().trim();
    const isJogadaValida = (opcoes.filter(jogadaValida => jogadaValida === escolhaUsuario).length > 0);
    console.log(isJogadaValida)

    const computador = jogadaComputador();
    analisarJogada(escolhaUsuario, computador);

}while (escolhaUsuario !== 'sair');

