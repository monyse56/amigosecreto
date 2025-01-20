let amigos = []; // Array para armazenar os nomes dos amigos

function adicionarAmigo() {
    let nomeInput = document.getElementById('amigo').value; // Captura o valor do campo de entrada

    if (nomeInput.trim() === "") {
        alert("Por favor, insira um nome."); // Exibe alerta se o campo estiver vazio
    } else {
        amigos.push(nomeInput); // Adiciona o nome ao array
        document.getElementById('amigo').value = ""; // Limpa o campo de entrada
        atualizarLista(); // Chama a função para atualizar a lista
    }
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpa a lista antes de adicionar novos elementos

    amigos.forEach(function(amigo) {
        let li = document.createElement('li'); // Cria um novo elemento <li>
        li.textContent = amigo; // Define o texto do <li> como o nome do amigo
        lista.appendChild(li); // Adiciona o <li> à lista
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há amigos disponíveis para sortear."); // Mensagem se não houver amigos
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Gera um índice aleatório
        let amigoSorteado = amigos[indiceAleatorio]; // Obtém o nome sorteado
        let resultadoLista = document.getElementById('resultado');
        resultadoLista.innerHTML = "<li>" + amigoSorteado + "</li>"; // Mostra o resultado
    }
}

function limparCampo() {
    document.getElementById('amigo').value = ""; // Limpa o campo de entrada
    amigos = []; // Limpa a lista de amigos
    atualizarLista(); // Atualiza a lista na tela
}

function reiniciarTela() {
    document.getElementById('amigo').value = ""; 
    amigos = []; 
    atualizarLista(); 
    document.getElementById('resultado').innerHTML = ""; 
}






















