
enum Escolhas {
    pedra = "pedra",
    papel = "papel",
    tesoura = "tesoura"
}

const buttons = document.querySelectorAll('button');
const h1 = document.getElementById("H1") as HTMLHeadElement | null
const machineChoose = document.getElementById("machine") as HTMLImageElement | null
const playerChoose = document.getElementById("player") as HTMLImageElement | null

function escolhaAleatoria(): Escolhas {
    const escolhas = Object.values(Escolhas);
    const escolhaAleatoria = Math.floor(Math.random() * escolhas.length);
    console.log(escolhas[escolhaAleatoria])
    img(escolhas[escolhaAleatoria], machineChoose)
    return escolhas[escolhaAleatoria];
}

function strForEnum(value: string): Escolhas | undefined {
    if (Object.values(Escolhas).includes(value as Escolhas)) {
        return value as Escolhas
    }
    return undefined
}

function teste(valueFromHtml: string) {
    const newValue = strForEnum(valueFromHtml);
    const escolhaMaquina: Escolhas = escolhaAleatoria();
    let vencedor: string = "";
    if (newValue === Escolhas.papel && escolhaMaquina === Escolhas.pedra || newValue === Escolhas.pedra && escolhaMaquina === Escolhas.tesoura || newValue === Escolhas.tesoura && escolhaMaquina === Escolhas.papel) {
        vencedor = "Você ganhou"
    } else if (newValue === escolhaMaquina) {
        vencedor = "Empatou"
    } else {
        vencedor = "Perdeu"
    }

    return vencedor;
}

function img(chooseImg: string, whoIs: HTMLImageElement | null) {
    const escolha = strForEnum(chooseImg);
    if (escolha === Escolhas.pedra) {
        if (whoIs) {
            whoIs.src = "./assets/pedra.png"
        }
    } else if (escolha === Escolhas.papel) {
        if (whoIs) {
            whoIs.src = "./assets/papel.webp"
        }
    } else if (escolha === Escolhas.tesoura) {
        if (whoIs) {
            whoIs.src = "./assets/tesoura.webp"
        }
    }
}

buttons.forEach(button => {
    button.addEventListener('click', (event: Event) => {
        const target = event.target as HTMLButtonElement;
        const winner = teste(target.value);
        img(target.value, playerChoose)
        if (h1) {
            h1.textContent = winner;
        }
        console.log(winner)
    });
});
