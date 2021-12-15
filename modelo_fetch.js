// modelo
async function armazenar(contatos, contato) { 
    let respostaHttp = await fetch('contatos/inserir', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato)
    });
    let resposta = await respostaHttp.json();
    console.log(resposta);
    return resposta;
}
async function listar(contatos) {
    let respostaHttp = await fetch('/contatos/listar');
    let resposta = await respostaHttp.json();
    console.log(resposta);
    return resposta;
}
async function buscar(contatos, id) {
    let respostaHttp = await fetch('/contatos/buscar'); //?id=' + id);
    let resposta = await respostaHttp.json();
    console.log(resposta);
    return resposta;
}
async function editar(contatos, id, contato) {
    let respostaHttp = await fetch('contatos/editar', { //?id=' + id, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato)
    });
    let resposta = await respostaHttp.json();
    console.log(resposta);
    return resposta;
}
async function apagar(contatos, id) {
    let respostaHttp = await fetch('/contatos/apagar'); //?id=' + id);
    let resposta = await respostaHttp.json();
    console.log(resposta);
    return resposta;
}