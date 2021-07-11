const pessoa = {
  nome: "André",
  idade: 34,
  cidade: "Ipu"
}
// Notação de ponto
console.log(pessoa.nome)

// Notação de colchetes
console.log(pessoa['idade'])

// Como desestruturar Objetos
const { nome, idade, cidade } = pessoa
console.log(cidade)