
let listaAmigos = [];


function adicionarAmigo() {
    let nome = document.querySelector('#amigo').value;
    if (nome == "") {
        alert("Por Favor, Insira um nome")
        return;
    }
    listaAmigos.push(nome);
    console.log(listaAmigos);
    atualizarLista();
    limparCampo();
}

function atualizarLista() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < listaAmigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = listaAmigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (listaAmigos.length===0) {
        alert('Adicione amigos antes de sortear');
        return;
    }
    let numeroAleatorio = Math.floor(Math.random() * listaAmigos.length);

let amigoSorteado = listaAmigos[numeroAleatorio];

let resultado = document.getElementById("resultado");
resultado.innerHTML = `O amigo sorteado foi: ${amigoSorteado}`;

listaAmigos.splice(numeroAleatorio, 1);
atualizarLista();
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function limparLista() {
    listaAmigos = [];
    const lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";
    console.log("Lista limpa:", listaAmigos);
    if (listaAmigos.length===0);{
        alert('lista limpa');
}};






















