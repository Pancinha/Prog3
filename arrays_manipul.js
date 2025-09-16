//Quero apenas percorrer e imprimir / fazer efeito colateral → forEach
//Retorno: undefined (não cria novo array)
registros.forEach(r => console.log(${r.id} - ${r.nome} - ${r.email}))

//Quero transformar cada item em outro (mesmo tamanho) → map
//Retorno: novo array transformado
const maiusculos = regs.map(r => ({...r, nome: r.nome.toUpperCase()}))

//Quero filtrar alguns itens (subconjunto) → filter
//Retorno: novo array com os que passaram no teste
const inicio = regs.filter(r => r.nome.toLowerCase().startsWith(txt.toLowerCase()))

//Quero achar um ÚNICO item → find
//Retorno: o item encontrado ou undefined
const r = regs.find(r => r.id === id)

//Quero o índice do item → findIndex
//Retorno: índice ou -1
const i = regs.findIndex(r => r.id === id)

//Quero saber se ALGUM atende → some
//Retorno: true/false
const existe = regs.some(r => r.email.endsWith('@ex.com'))

//Quero saber se TODOS atendem → every
//Retorno: true/false
const ok = regs.every(r => r.nome.length > 0)

//Quero reduzir a um valor (soma, contagem, agrupamento) → reduce
//Retorno: o acumulado
const somaIds = regs.reduce((acc,r) => acc + r.id, 0)

//Quero ordenar → sort (⚠️ muta o array!)
regs.sort((a,b) => a.nome.localeCompare(b.nome))

//Quero “imprimir em linhas” → map(...).join('\n')
console.log(regs.map(r => ${r.id} - ${r.nome} - ${r.email}).join('\n'))

//Strings (para as “customizadas”)
Maiúsculas: nome.toUpperCase()
Minúsculas: nome.toLowerCase()
Começa com (prefixo): nome.toLowerCase().startsWith(txt.toLowerCase())

Contém (em qualquer lugar): nome.toLowerCase().includes(txt.toLowerCase())




//Preciso de um único item?
→ find (ou findIndex se precisa do índice)

//Preciso de alguns itens?
→ filter

//Preciso transformar cada item?
→ map

//Preciso só percorrer/imprimir?
→ forEach

//Preciso checar “algum” / “todos”?
→ some / every

//Preciso reduzir a um valor?
→ reduce

//Preciso ordenar para exibir?
→ sort (lembra que muta! Se não quiser mutar: const copia = [...regs].sort(...))

//Pegadinhas que mais derrubam

forEach não retorna novo array. Se precisa de novo array, use map/filter.

startsWith é case sensitive → normalize com toLowerCase().

Importante na prova: converter ID com Number(idStr).

find pode retornar undefined → teste com if (!r).

sort muta o array original.

join('\n') é perfeito pra imprimir linhas no terminal.

Template string usa crase `...${expressao}...` (não aspas).


