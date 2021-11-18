// modelo
let contatos_amigos = [];
let contatos_colegas = [];

function controlar_menu() {
    mostrar_menu();
}

//controlar_menu();

function mostrar_menu() {
    menu:
    // visão e controle
    while (true) {
        let resposta = parseInt(prompt('Menu\n[1] Cadastrar amigo\n[2] Listar amigos\n[3] Cadastrar colega \n[4] Listar colegas \n[5] Editar amigos \n[6] Apagar amigos \n[7] Sair'));
        console.log(resposta);
        switch (resposta) {
            case 1:
                controlar_cadastro(contatos_amigos);
                break;
            case 2:
                controlar_lista(contatos_amigos);
                break;
            case 3:
                controlar_cadastro(contatos_colegas);
                break;
            case 4:
                controlar_lista(contatos_colegas);
                break;
            case 5:
                controlar_edicao(contatos_amigos);
                break;
            case 6:
                controlar_exclusao(contatos_amigos);
                break; default:
                controlar_saida();
                break menu;
        }
        /*if (resposta == 1) {
             cadastrar();
         }
         else if (resposta == 2) {
             listar();
         }
         else {
             sair();
         }
         */
    }
}

function controlar_edicao(contatos) {
    mostrar_lista(contatos);
    let id = parseInt(prompt('Digite o ID: '));
    controlar_formulario_edicao(contatos, id);
}

function controlar_formulario_edicao(contatos, id) {
    let contato_antigo = buscar(contatos, id);
    mostrar_formulario(contato_antigo, id, contatos, controlar_editar);
}

function controlar_editar(contatos, contato, id) {
    // modelo
    editar(contatos, id, contato);
    mostrar_mensagem('Contato editado');
    controlar_lista(contatos);
}

function buscar(contatos, id) {
    return contatos[id];
}

function editar(contatos, id, contato) {
    contatos[id] = contato;
}

function controlar_exclusao(contatos) {
    mostrar_lista(contatos);
    let id = parseInt(prompt('Digite o ID: '));
    controlar_exclusao_apagar(contatos, id);
}

function controlar_exclusao_apagar(contatos, id) {
    if (confirm('Deseja apagar o id ' + id + '?')) {
        apagar(contatos, id);
        controlar_lista(contatos);
    }
}

function apagar(contatos, id) {
    contatos.splice(id, 1);
}

function armazenar(contatos, contato) {
    contatos.push(contato);
}
function controlar_armazenar(contatos, contato) {
    // modelo
    armazenar(contatos, contato);
    mostrar_mensagem('cadastrado');
    controlar_lista(contatos);
}
function controlar_cadastro(contatos) {
    mostrar_formulario(null, null, contatos, controlar_armazenar);
}

function mostrar_mensagem(mensagem) {
    alert(mensagem);
}

function mostrar_formulario(contato_antigo, id, contatos, callback) {
    // controle e visão
    let nome = prompt('Digite o nome do contato [' + contato_antigo?.nome + ']: ');
    let numero = prompt('Digite o telefone do contato[' + contato_antigo?.numero + ']: ');
    //let contato = [nome, numero];
    let contato = {
        'nome': nome,
        numero: numero
    };
    callback(contatos, contato, id); 
}

function controlar_lista(contatos) {
    mostrar_lista_html(contatos);
}

function mostrar_lista(contatos) {
    // visão
    let texto = 'id \t nome \t telefone';
    for (let id in contatos) {
        let contato = contatos[id];
        //texto += '\n' + contato[0] + '\t' + contato[1];
        texto += '\n' + id + '\t' + contato.nome + '\t' + contato['numero'];
    }
    alert(texto);
}

function controlar_saida() {
    // visão
    mostrar_mensagem('Você saiu');
}

function receber_formulario(contatos) {
    let tx_id = document.getElementById('id');
    let id = tx_id.value;
    let tx_nome = document.getElementById('nome');
    let nome = tx_nome.value;
    let tx_telefone = document.getElementById('telefone');
    let telefone = tx_telefone.value;
    let contato = {
        nome: nome,
        numero: telefone
    };
    if (id == ''){
        controlar_armazenar(contatos, contato);
    }
    else {
        controlar_editar(contatos, contato, id);
    }
    
    tx_nome.value = '';
    tx_telefone.value = '';
    tx_id.value = '';


}

function mostrar_lista_html(contatos) {
    // visão
    let tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    for (let id in contatos) {
        let contato = contatos[id];
        let linha = document.createElement('tr');
        let coluna1 = document.createElement('td');
        let coluna2 = document.createElement('td');
        let id_coluna = document.createElement('td');
        let acoes = document.createElement('td');
        let botao_editar = document.createElement('button');
        let botao_apagar = document.createElement('button');
        linha.append(id_coluna, coluna1, coluna2, acoes);
        acoes.append(botao_apagar, botao_editar);
        botao_apagar.textContent = 'Apagar';
        botao_editar.textContent = 'Editar';
        botao_editar.onclick = function () {
            let selecionadas = document.querySelectorAll('.selecionada');
            selecionadas.forEach(function(linha) {
                linha.classList.remove('selecionada');
            });
            linha.classList.add('selecionada');
            controlar_formulario_edicao(contatos, id);
        }
        botao_apagar.onclick = function () {
            controlar_exclusao_apagar(contatos, id);
        }
        id_coluna.textContent = parseInt(id)+1;
        coluna1.textContent = contato.nome;
        coluna2.textContent = contato.numero;
        tbody.append(linha);
    }
}

function mostrar_formulario(contato_antigo, id, contatos, callback) {
    document.getElementById('nome').value = contato_antigo.nome;
    document.getElementById('telefone').value = contato_antigo.numero;
    document.getElementById('id').value = id;
}

