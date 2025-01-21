const adicionarAmigo = () => {
    // Verifica se o campo de texto está vazio
    if (!document.getElementById('amigo').value) {
        alert('Digite o nome de um amigo para adicionar à lista');
        return;
    }

    // Recebe o nome de um amigo para inclusão na lista
    const nome = document.getElementById('amigo').value;
    
    // Cria um item de lista para o amigo
    const novoAmigo = document.createElement('li');
    novoAmigo.innerText = nome;
    
    // Adiciona o amigo à lista de amigos
    listaAmigos.appendChild(novoAmigo);
    
    // Limpa o campo de texto
    document.getElementById('amigo').value = '';
}

const sortearAmigo = () => {
    const amigos = document.querySelectorAll('#listaAmigos li');
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById('resultado');
    
    // Verifica se a lista de amigos está vazia
    if (listaAmigos.children.length === 0) {
        alert('Adicione amigos à lista antes de sortear');
        resultado.innerText = '';  
        return;
    }
    // Sorteia um amigo da lista e remove da lista
    resultado.innerText = `O amigo secreto escolhido foi: ${amigoSorteado.innerText}`;
    listaAmigos.removeChild(amigoSorteado); 
}

