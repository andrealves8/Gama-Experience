const livros = require('./database')
console.log(livros)

// pegar o input
// Se for sim, mostra as categorias disponíveis, pergunta qual categoria ela escolhe
// Se não, mostra todos os livros em ordem crescente pela quantidade de páginas

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro?S/N')

if (entradaInicial.toLocaleUpperCase() === 'S') {
  console.log('Essas são as categorias disponíveis:')
  console.log('Américas', '/Drama', '/Romance', '/Terror')

  const entradaCategoria = readline.question('Qual categoria vc escolhe?')

  const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

  console.table(retorno)
} else {
  const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas)
  console.log('Esses são todos os livros disponíveis:')
  console.table(livrosOrdenados)
}
