//npm init
//npm install @inquirer/prompts

//IMPORTAR INPUT E SELECT
import { input, select } from '@inquirer/prompts';


//FUNCTION MODELO
async function nomeDaFuncao() {
    // 1 - capturar input
    // 2 - chamar API com await
    // 3 - exibir saída formatada
}

//USAR FUNCTION API
let nome = await CrudAPI.lerTodos();

//USAR INPUT
let email = await input({message: 'email: '});

//USAR SELECT
let opcao = '';
while(opcao != 'sair'){
    opcao = await select({
    message: 'Opção:',
    choices: [
        {name: 'cadastrar', value: 'cadastrar'},
        {name: 'listar', value: 'listar'},
        {name: 'localizar', value: 'localizar'},
        {name: 'sair', value: 'sair'},
    ]});

    switch(opcao){
        case 'listar':
            await ListarTodos();
        break;

        case 'cadastrar':
            await cadastrarPessoa();
        break;

        case 'localizar':
            await localizarID();
        break;

        case 'sair':
            console.log('saindo!')
        break;    
    }
}

//CONVERTER STRING
let idStr = await input({ message: 'Digite o ID:' });
let id = Number(idStr); // ou parseInt(idStr)

//CRIAR
let pessoa = { nome: 'João', email: 'joao@email.com' };
let novo = await CrudAPI.criar(pessoa);

//LER TODOS
let todos = await CrudAPI.lerTodos();

//LER POR ID
let registro = await CrudAPI.lerPorId(id);

//ATUALIZAR
let atualizado = await CrudAPI.atualizar(id, { nome: 'Novo Nome' });

//EXCLUIR
let removido = await CrudAPI.excluir(id);

//forEach → só percorre e executa algo
todos.forEach(r => console.log(`${r.id} - ${r.nome} - ${r.email}`));

//map → cria um novo array com transformação
let maiusculos = todos.map(r => ({ ...r, nome: r.nome.toUpperCase() }));

//filter → cria array filtrado
let filtrados = todos.filter(r => r.nome.startsWith("Jo"));

//join → transforma array em string
console.log(maiusculos.map(r => `${r.id} - ${r.nome} - ${r.email}`).join("\n"));

//TRATAMENTO DE ERRO
try {
   let r = await CrudAPI.lerPorId(id);
   if (!r) {
      console.log("Registro não encontrado!");
   }
} catch (erro) {
   console.error("Erro:", erro.message);
}

//VALIDAR SE EXISTE REGISTRO - API DEVOLDE UNDEFINED
async function localizarId() {
  const id = Number(await input({ message: 'Informe o ID: ' }));
  const registro = await CrudAPI.lerPorId(id);

  if (!registro) {  // se for undefined/null
    console.log("Registro não encontrado!");
    return;
  }

  console.log(`ID: ${registro.id}\nNome: ${registro.nome}\nE-mail: ${registro.email}`);
}

//QUANDO A API DEVOLVE UM ERRO
async function excluirRegistro() {
  const id = Number(await input({ message: 'Informe o ID: ' }));

  try {
    const removido = await CrudAPI.excluir(id);
    console.log(`Registro excluído: ${removido.nome}`);
  } catch (e) {
    console.log("Erro:", e.message);
  }
}

//Se pode vir undefined → use if (!variavel) { ... }.
//Se pode lançar erro (throw) → use try { ... } catch (e) { ... }.
//
