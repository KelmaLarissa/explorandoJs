

console.log(`Trabalhando com Listas`);
//Ctrl+K+C para inserir comentario em grupo
//Ctrl+K+U para DEScomentar
    // const salvador = `Salvador`;
    // const saoPaulo = `São Paulo`;
    // const rioDeJaneiro= `Rio de Janeiro`; 

//Array serve para gerar lista (new palavra reservada)
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`curitiba`)//push para adicionar item na lista após a primeira.
console.log(`Destinos Possiveis`);
//console.log(salvador, saoPaulo, rioDeJaneiro)
console.log(listaDeDestinos);

//como remover um destino, use Splice (posicao do elemento, a quantidade)
listaDeDestinos.splice(1,1);

console.log(listaDeDestinos);
//mostra somente um destino [posicao especifica]
console.log(listaDeDestinos[1]);

