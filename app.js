let listas = [];
let limite = 10
let numeroaleatori = gerarNumeroAleatorio()
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function infosNaTela(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function verificarChute(){
    let chute = document.querySelector('input').value
    if(chute == numeroaleatori){
        exibirTextoNaTela('h1','ACERTOU!!!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `você descobriu o número secreto! Com o total de ${tentativas} ${palavraTentativas}`
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        if(chute > numeroaleatori){
            exibirTextoNaTela('p', 'O número secreto é menor que o chute!');
            tentativas++
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior que o chute!');
            tentativas++
        }
        limparCampo();
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroaleatori = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1
    infosNaTela();
    document.getElementById('reiniciar').setAttribute('disabled',true)
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * limite + 1);
    let quantidadeDeElementos = listas.length;
    
    if(quantidadeDeElementos == limite - 2){
        listas = []
    }


    if (listas.includes == numeroEscolhido){
        return gerarNumeroAleatorio();
    }else{
        listas.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

infosNaTela();