import CrudAPI from "./CrudAPI.js";
import { input, select } from '@inquirer/prompts';

// 1 - CADASTRAR
async function cadastrarRegistro() {
    let nome = await input({message: 'nome: '});
    let email = await input({message: 'email: '});
    let pessoa = {nome: nome, email: email};
    let criar = await CrudAPI.criar(pessoa);
    console.log(`ID Registrado: ${criar.id}\n`);
}

// 2 - LISTAR TODOS
async function listarTodos() {
    let todos_registros = await CrudAPI.lerTodos();
    todos_registros.forEach(element => {
        console.log(`${element.id} - ${element.nome} - ${element.email}`);
    });
};

// 3 - BUSCAR POR ID
async function localizarId() {
    let id = await input({message: 'Informe o id: '})
    let number_Id = Number(id)
    let registro_id = await CrudAPI.lerPorId(number_Id)
    console.log(`ID: ${registro_id.id}\nNome: ${registro_id.nome}\nE-mail: ${registro_id.email}\n`)
}

// 4 - ATUALIZAR REGISTRO
async function atualizarRegistro() {
    let id = await input({message: 'Informe o ID: '});
    let number_id = Number(id);
    let nome_atualizado = await input({message: 'Atualize o nome: '});
    let email_atualizado = await input({message: 'Atualize o E-mail: '});

    let registro_atualizado = {nome: nome_atualizado, email: email_atualizado}
    let atualizar = await CrudAPI.atualizar(number_id, registro_atualizado);
    console.log(atualizar);
    
}

// 5 - EXCLUIR REGISTRO
async function excluirRegistro() {
    let id = await input({message: 'Informe o ID: '})
    let number_id = Number(id)
    let excluir = await CrudAPI.excluir(number_id);
    console.log(excluir);
}

// 6 - LISTAR TODOS MAIUSCULA
async function listarTodosM() {
    let todos_registros = await CrudAPI.lerTodos();
    todos_registros.forEach(element => {
        let nome_m = element.nome.toUpperCase()
        let email_m = element.email.toUpperCase()
        console.log(`${element.id} - ${nome_m} - ${email_m}`);
    });
};

//7 - SOBRENOME PRIMEIRO
async function sobrenomePimeiro() {
    let todos_registros = await CrudAPI.lerTodos();
    todos_registros.forEach(element => {
        let partes = element.nome.split(" ")
        console.log(`${element.id} - ${partes[1]}, ${partes[0]} - ${element.email}`);
    });
}

// 8 - PESQUISA POR NOME
async function localizaNome() {
    let texto = await input({message: 'Informe o texto: '});
    let todos_registros = await CrudAPI.lerTodos();
    let nomes = todos_registros.filter( element =>
        element.nome.toLowerCase().startsWith(texto.toLowerCase())
    )
    nomes.forEach(element => {
        console.log(`${element.id} - ${element.nome} - ${element.email}`)
    })
}

// 9 - SAIR
async function sair() {
    console.log('saindo!')
    return opcao = 'sair';
}

let opcao = '';
while(opcao != 'sair'){
    opcao = await select({
    message: 'Opção:',
    choices: [
        {name: '1 - Cadastrar novo registro', value: 'cadastrar'},
        {name: '2 - Listar todos os registros', value: 'listar'},
        {name: '3 - Buscar registro por ID', value: 'localizar_id'},
        {name: '4 - Atualizar registro', value: 'atualizar'},
        {name: '5 - Excluir registro', value: 'excluir'},
        {name: '6 - Tudo em maiúscula', value: 'td_maiuscula'},
        {name: '7 - Sobrenome primeiro', value: 'sb_primeiro'},
        {name: '8 - Pesquisa por nome', value: 'localizar_nome'},
        {name: '9 - Sair', value: 'sair'},
    ]});

    switch(opcao){
        case 'cadastrar':
            await cadastrarRegistro();
        break;

        case 'listar':
            await listarTodos();
        break;

        case 'localizar_id':
            await localizarId();
        break;

        case 'atualizar':
            await atualizarRegistro();
        break;

        case 'excluir':
            await excluirRegistro();
        break;

        case 'td_maiuscula':
            await listarTodosM();
        break;

        case 'sb_primeiro':
            await sobrenomePimeiro();
        break;    

        case 'localizar_nome':
            await localizaNome();
        break;  

        case 'sair':
            await sair();
        break;  
    }
}
