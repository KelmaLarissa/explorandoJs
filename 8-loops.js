

console.log(`\n Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log(`\n Destinos Possiveis`);
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada== true     

let contador = 0;
let destinoExiste = false;

while (contador <3){
   
    if (listaDeDestinos[contador] == destino){
       
        destinoExiste = true;
        break;
    } 
    
    contador +=1;
}
console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste) {
    console.log("Boa Viagem!!!");

} else {
    console.log("Desculpe tivemos um erro.")
}

// declara o inicio da variavel(let cont =0);
// condição a verificar apos cada loop (cont <3); 
//o q vai executar no final (cont++ é atalho de cont+=1)
// Normal usar i no lugar da palavra contador
for (let cont =0 ;cont <3;cont ++ ){
   
    if (listaDeDestinos[contador] == destino){
       
        destinoExiste = true;
        break;
    } 
    
}


