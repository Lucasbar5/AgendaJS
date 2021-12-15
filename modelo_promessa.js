// modelo
function armazenar(contatos, contato) {
    return new Promise((resolve, reject) => {
        contatos.push(contato);
        resolve();
    });
}
function listar(contatos) {
    return new Promise((resolve, reject) => {
        resolve(contatos);
    });
}
function buscar(contatos, id) {
    return new Promise((resolve, reject) => {
        resolve(contatos[id]);
    });
}
function editar(contatos, id, contato) {
    return new Promise((resolve, reject) => {
        contatos[id] = contato;
        resolve();
    });
}
function apagar(contatos, id) {
    return new Promise((resolve, reject) => {
        contatos.splice(id, 1);
        resolve();
    });
}