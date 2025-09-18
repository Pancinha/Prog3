import { input, select } from '@inquirer/prompts';
import CrudAPI from './CrudAPI.js';


// 1 - CRIAR CONSULTA
async function criar_consulta() {
    let nome
    while (!nome) {
        nome = await input({message: 'Nome'})
    }

    
    let idade = await input({message: 'Idade'})
    const esp = await CrudAPI.listaEspecialidades();

    opcao = await select({
    message: 'Opção:',
    choices: [
        {name: 'Clínica Médica', value: 100},
        {name: 'Pediatria', value: 101},
        {name: 'Traumatologia', value: 102},
        {name: 'Cardiologia', value: 103},
        {name: 'Dermatologia', value: 104},
        {name: 'Geriatria', value: 105},
    ]});
    
    let esp_cadastro = opcao.value
    let cadastro = await CrudAPI.criar({paciente: nome, idade: idade, id_especialidade: esp_cadastro})
    console.log(`Cadastro realizado com sucesso, nova ID: ${cadastro.id}`)
}

// 2 - LISTAR TODOS
async function listarTodos() {
    let todos_registros = await CrudAPI.lerTodos();
        todos_registros.forEach(element => {
            console.log(`${element.id} - ${element.paciente} - IDADE: ${element.idade} - id_especialdiade: ${element.id_especialidade}`);
        });
}

// 3 - BUSCA POR ID
async function localizarId() {
    let id = await input({message: 'Informe o id: '})
    let number_Id = Number(id)
    let registro_id = await CrudAPI.lerPorId(number_Id)
    let especialidaes = await CrudAPI.listaEspecialidades()
    especialidaes.forEach(element => {
        if (element.id == registro_id.id_especialidade) {
            console.log(`ID: ${registro_id.id}, ${registro_id.paciente}, ${registro_id.idade}, Especialidade: ${element.nome}`)

        }
    });
}


// 4 - BUSCAR POR NOME
async function localizaNome() {
    let texto = await input({message: 'Informe o texto: '});
    let todos_registros = await CrudAPI.lerTodos();
    let nomes = todos_registros.filter( element =>
        element.paciente.toLowerCase().startsWith(texto.toLowerCase())
    )
    nomes.forEach(element => {
        console.log(`${element.id} - ${element.paciente} - IDADE: ${element.idade} - id_especialdiade: ${element.id_especialidade}`)
    })
}

// 5 - BUSCA ESPECIALIDADE
async function localizar_Esp() {
    const esp = await CrudAPI.listaEspecialidades();

    opcao = await select({
    message: 'Opção:',
    choices: [
        {name: 'Clínica Médica', value: 100},
        {name: 'Pediatria', value: 101},
        {name: 'Traumatologia', value: 102},
        {name: 'Cardiologia', value: 103},
        {name: 'Dermatologia', value: 104},
        {name: 'Geriatria', value: 105},
    ]});

    if (opcao == 100) {
        let todos_registros = await CrudAPI.lerTodos();
        todos_registros.forEach(element => {
            if (element.id_especialidade == opcao) {
             console.log(`${element.id} - ${element.paciente} - IDADE: ${element.idade} - id_especialdiade: ${element.id_especialidade}`);   
            }
        });
    }

     if (opcao == 101) {
        let todos_registros = await CrudAPI.lerTodos();
        todos_registros.forEach(element => {
            if (element.id_especialidade == opcao) {
             console.log(`${element.id} - ${element.paciente} - IDADE: ${element.idade} - id_especialdiade: ${element.id_especialidade}`);   
            }
        });
    }

     if (opcao == 102) {
        let todos_registros = await CrudAPI.lerTodos();
        todos_registros.forEach(element => {
            if (element.id_especialidade == opcao) {
             console.log(`${element.id} - ${element.paciente} - IDADE: ${element.idade} - id_especialdiade: ${element.id_especialidade}`);   
            }
        });
    }

     if (opcao == 103) {
        let todos_registros = await CrudAPI.lerTodos();
        todos_registros.forEach(element => {
            if (element.id_especialidade == opcao) {
             console.log(`${element.id} - ${element.paciente} - IDADE: ${element.idade} - id_especialdiade: ${element.id_especialidade}`);   
            }
        });
    }

      if (opcao == 104) {
        let todos_registros = await CrudAPI.lerTodos();
        todos_registros.forEach(element => {
            if (element.id_especialidade == opcao) {
             console.log(`${element.id} - ${element.paciente} - IDADE: ${element.idade} - id_especialdiade: ${element.id_especialidade}`);   
            }
        });
    }

      if (opcao == 105) {
        let todos_registros = await CrudAPI.lerTodos();
        todos_registros.forEach(element => {
            if (element.id_especialidade == opcao) {
             console.log(`${element.id} - ${element.paciente} - IDADE: ${element.idade} - id_especialdiade: ${element.id_especialidade}`);   
            }
        });
    }
}

// 6 - LISTAR TODAS CONSULTAS COM ESP
async function listar_consultas_esp() {
    let todos_registros = await CrudAPI.lerTodos();
    let esp = await CrudAPI.listaEspecialidades();
        todos_registros.forEach(element => {
            esp.forEach(element2 => {
                console.log(`${element.id} - ${element.paciente} - IDADE: ${element.idade} - especialidade: ${element2.nome}`);

            });

            
        });
}

// 7 - MENORES DE IDADE
async function menores() {
    let todos_registros = await CrudAPI.lerTodos();
    let menores_idade = [];
    todos_registros.forEach(element => {
        if (element.idade < 18) {
            menores_idade.push({nome: element.paciente, idade: element.idade})
        }        //console.log(`${menores_idade.nome}(${menores_idade.idade})`)
    });

    for (let index = 0; index < menores_idade.length; index++) {
        console.log(`${menores_idade[index].nome}(${menores_idade[index].idade})`)
        
    }
    

}

// 8 - REGISTROS COM PROBLEMAS
async function reg_problem() {
    let todos_registros = await CrudAPI.lerTodos();
    todos_registros.forEach(element => {
        if (element.idade > 18 && element.id_especialidade == 101) {
            console.log(`${element.id} - ${element.paciente} - IDADE: ${element.idade} - id_especialdiade: ${element.id_especialidade}`);
        }
        if (element.idade < 60 && element.id_especialidade == 105) {
            console.log(`${element.id} - ${element.paciente} - IDADE: ${element.idade} - id_especialdiade: ${element.id_especialidade}`);
        }
    });
    
}

let opcao = '';
while(opcao != 'sair'){
    opcao = await select({
    message: 'Opção:',
    choices: [
        {name: '1 - Criar nova consulta', value: 'criar_consulta'},
        {name: '2 - Listar todos as consultas', value: 'listar'},
        {name: '3 - Buscar consulta por ID', value: 'localizar_id'},
        {name: '4 - Buscar consulta por nome', value: 'localizar_nome'},
        {name: '5 - Buscar consulta por especialidade', value: 'localizar_esp'},
        {name: '6 - Listar todas consultas com especialidade', value: 'listar_consultas_esp'},
        {name: '7 - Menores idade', value: 'menores'},
        {name: '8 - Registros com problema', value: 'reg_problem'},
        {name: '9 - Sair', value: 'sair'},
    ]});

    switch(opcao){
        case 'criar_consulta':
            await criar_consulta();
        break;

        case 'listar':
            await listarTodos();
        break;

        case 'localizar_id':
            await localizarId();
        break;

        case 'localizar_nome':
            await localizaNome();
        break;

        case 'localizar_esp':
            await localizar_Esp();
        break;

        case 'listar_consultas_esp':
            await listar_consultas_esp();
        break;

        case 'menores':
            await menores();
        break;    

        case 'reg_problem':
            await reg_problem();
        break;  

        case 'sair':
            opcao  = 'sair';
        break;  
    }
}