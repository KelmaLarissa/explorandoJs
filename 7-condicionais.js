
console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log(`Destinos Possiveis`);
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1);

//     //A pessoa é menor de idade
// } else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1, 1);
// } else {
//     console.log("Não é maior de idade e não vender");
// }
    //console.log(listaDeDestinos);

//Alt+Shift+F - formatar o bloco - identar o bloco



// > maior que, < menor que, >= maior ou igual, <= menor ou igual, == exatamente igual. pq somente um sinal de = é atribuição
// idadeComprador > 18;
// idadeComprador < 18;
// idadeComprador >= 18;
// idadeComprador <= 18;
// idadeComprador == 18;


// A || significa OU (operador logico)
// A && significa E (operador logico)
if (idadeComprador >= 18 || estaAcompanhada== true ) {
    console.log("Boa Viagem!");
    listaDeDestinos.splice(1, 1);//remove item

} else {
    console.log("Não é maior de idade e não vender");
}
// para pular linha use \n
console.log("Embarque: \n \n");
if(idadeComprador>=18 && temPassagemComprada) {
    console.log("Boa Viagem");
} else {
    console.log("Você não pode embarcar");
}


console.log(listaDeDestinos);

