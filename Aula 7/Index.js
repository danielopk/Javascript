//Nao podemos criar constantes com palavras reservadas
//Constantes precisam ter nomes significativos
//Nao pode comecar um nome de uma constante com um numero
//Nao podem conter espacos ou tracos
//Utilizamos camelCase
//Case-sensitive
//Nao pode modificar o valor de uma constante
//Nao utilizar Var, Utilize const

const nome = "Daniel";
console.log(nome);

//Aritmeticos + - * /
const PrimeiroNome = 5;
const SegundoNome = 10;
const resultado = PrimeiroNome * SegundoNome;
const resultadoDuplicado = resultado * 2;

let resultadoTriplicado = resultado * 3;

console.log("Resultado antes de alterar, o Triplicado", resultadoTriplicado);

resultadoTriplicado = resultadoTriplicado + 5;

console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);

//Dentro De Aspas = String | Fora de Aspas = Number = Numero

// Para ver qual o tipo da variavel, TypeOf = Number
console.log(typeof PrimeiroNome);

//String Typeof
const Cinco = "5";
console.log(typeof Cinco);