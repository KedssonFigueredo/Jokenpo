"use strict";
var Escolhas;
(function (Escolhas) {
    Escolhas["pedra"] = "pedra";
    Escolhas["papel"] = "papel";
    Escolhas["tesoura"] = "tesoura";
})(Escolhas || (Escolhas = {}));
const buttons = document.querySelectorAll('button');
const h1 = document.getElementById("H1");
const machineChoose = document.getElementById("machine");
const playerChoose = document.getElementById("player");
function escolhaAleatoria() {
    const escolhas = Object.values(Escolhas);
    const escolhaAleatoria = Math.floor(Math.random() * escolhas.length);
    console.log(escolhas[escolhaAleatoria]);
    img(escolhas[escolhaAleatoria], machineChoose);
    return escolhas[escolhaAleatoria];
}
function strForEnum(value) {
    if (Object.values(Escolhas).includes(value)) {
        return value;
    }
    return undefined;
}
function teste(valueFromHtml) {
    const newValue = strForEnum(valueFromHtml);
    const escolhaMaquina = escolhaAleatoria();
    let vencedor = "";
    if (newValue === Escolhas.papel && escolhaMaquina === Escolhas.pedra || newValue === Escolhas.pedra && escolhaMaquina === Escolhas.tesoura || newValue === Escolhas.tesoura && escolhaMaquina === Escolhas.papel) {
        vencedor = "Você ganhou";
    }
    else if (newValue === escolhaMaquina) {
        vencedor = "Empatou";
    }
    else {
        vencedor = "Perdeu";
    }
    return vencedor;
}
function img(chooseImg, whoIs) {
    const escolha = strForEnum(chooseImg);
    if (escolha === Escolhas.pedra) {
        if (whoIs) {
            whoIs.src = "./assets/pedra.png";
        }
    }
    else if (escolha === Escolhas.papel) {
        if (whoIs) {
            whoIs.src = "./assets/papel.webp";
        }
    }
    else if (escolha === Escolhas.tesoura) {
        if (whoIs) {
            whoIs.src = "./assets/tesoura.webp";
        }
    }
}
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const target = event.target;
        const winner = teste(target.value);
        img(target.value, playerChoose);
        if (h1) {
            h1.textContent = winner;
        }
        console.log(winner);
    });
});
