array = [{ativo: true}, {ativo: false}]
let tamamnho = array.lenght;
let i;

function filtro_obj(){
  const encontrado = array.find(array => array.ativo === true)
  console.log(encontrado.ativo)   
}

filtro_obj()
