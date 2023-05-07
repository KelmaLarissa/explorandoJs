
//JS é fracamanete tipada, pode mudar
console.log("Trabalhando com atribuição de variáveis");
const idade = 29;
const primeiroNome = "Kelma"; // const é de constante, nao pode mudar.
//let nome = "Kelma" Se quiser que mude escreva com Let
// let usa muito em contador, loopind e laços de repetição
const sobrenome = "Silva"


let contador =0;
contador = contador+1;


console.log(nome + sobrenome);
console.log(nome , sobrenome);
console.log(nome +""+ sobrenome);
//Não fazer mes = "Janeiro"
//virgula e aspas como espaço, separadores de texto

console.log(`Meu nome é ${nome} ${sobrenome}`)
//pode escrever com crase, é texto
//${xxx} é uma forma melhor de adcionar a variavel.

const nomeCompleto = primeiroNome + sobrenome; // sobreescrita
console.log(nomeCompleto);


//Boas praticas - usar mais Const (variaveis Permanentes)

let Idade; //declarando variavel
Idade=26; //atribuindo valor
Idade= Idade+1;
