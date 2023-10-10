// Estrutura: switch-case
/*
const opcao = 3;

switch(opcao) {

    case 1:
        console.log('Opção é 1');
        break;
    case 2:
        console.log('Opção é 2');
        break;
    default:
        console.log('Nenhuma das opções');
        break; //opcional

}

// equivalente a estrutura switch-case
if (opcao === 
    1) {
    consonle.log('Opção 1');
} else if (opcao === 2) {
    console.log('Opção');  
} else {
    console.log('Nenhuma das opções');
}
//Quando é só uma instrução o if e o else não precisa de chave


// Estrutura de repetição: do-while (faça-enquanto)

let contador = 0;

do {
    console.log(contador + ' Instrução');
    contador += 1;

} while (contador <= 10);


/* Estrutura de repetição: while (enquanto)

const opcao = 0;

while (opcao !==0) {
    console.log('Instrução 1');
    console.log('Instrução 2');
    console.log('Instrução 3');
    console.log('Instrução 4');
    console.log('Instrução 5');
    console.log('Instrução 6');
}


let candidato_1 = 0;
let candidato_2 = 0;
let candidato_3 = 0;
let voto_branco = 0;
let voto_nulo = 0;


function votarEleic() {

     

    while (x != 0) {
        
        x = parseInt(getElementById('x').value);

        switch (x) {
    
         case 1:
            candidato_1 ++;
         break;
         
         case 2:
            candidato_2 ++;
        break;
    
        case 3:
            candidato_3 ++;
        break;
    
        case 5:
            voto_branco ++;
        break;
    
        case 8:
            voto_nulo ++;
        break;
        
           
        }
        
    }
    document.getElementById('resultado').innerHTML += 'O Candidato 1 = ' + candidato_1 + 'votos'; 

}
*/





function urnaEletronica() {
    
    
    // Aqui vai todo o código do programa....
    
    console.log('Iniciando o programa');
    
 let
    totalVotosCandidato1 = 0,
    totalVotosCandidato2 = 0,
    totalVotosCandidato3 = 0,
    totalVotosEmBranco = 0,
    totalVotosNulo = 0,
    x = 0
    
    do {


        x = parseInt(document.getElementById('x').innerHTML);

        switch (x) {
            case 1:
                totalVotosCandidato1 = x;
            break;
        }

    } while (x !=0 );

    document.getElementById('resultado').innerHTML =+ 'O Candidato 1 = ' + totalVotosCandidato1 + 'votos'; 

}

