/*if else*/
// function calculaIdade(idade) {
//   if (idade > 18) {
//     return 'Maior de idade'
//   } else {
//     return 'Menor de idade'
//   }
// }
// console.log(calculaIdade(19))

/*usando operador ternário fica dessa forma*/
function calculaIdade(idade) {
  return idade >= 18 ? 'Maior de idade' : 'Menor de idade'
}

console.log(calculaIdade(15))
