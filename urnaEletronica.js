function urnaEletronica() {
    
    //Código do programa


    
    
    let
            voto,
            totalVotosCandidato1 = 0,
            totalVotosCandidato2 = 0,
            totalVotosCandidato3 = 0,
            totalVotosEmBranco = 0,
            totalVotosNulo = 0;
    
            
    
            
            do {

                
                voto = parseInt(prompt("Digite o valor correspondente a seu voto: "));

                console.clear();
                
                switch(voto) {
    
                    case 1: 
                    totalVotosCandidato1++;
                    //document.getElementById("resultado").innerHTML = 'O candidato 1 tem' + totalVotosCandidato1 + 'votos';
                    console.log("Candidato 1 = " + totalVotosCandidato1);
                    break;
                    
                    case 2: 
                    totalVotosCandidato2++;
                    //document.getElementById("resultado").innerHTML = 'O candidato 1 tem' + totalVotosCandidato1 + 'votos';
                    console.log("Candidato 2 = " + totalVotosCandidato2);
                    break;

                    case 3: 
                    totalVotosCandidato3++;
                    //document.getElementById("resultado").innerHTML = 'O candidato 1 tem' + totalVotosCandidato1 + 'votos';
                    console.log("Candidato 3 = " + totalVotosCandidato3);
                    break;

                    case 5: 
                    totalVotosEmBranco++;
                    //document.getElementById("resultado").innerHTML = 'O candidato 1 tem' + totalVotosCandidato1 + 'votos';
                    console.log("Voto em Branco = " + totalVotosEmBranco);
                    break;

                    case 8: 
                    totalVotosNulo++;
                    //document.getElementById("resultado").innerHTML = 'O candidato 1 tem' + totalVotosCandidato1 + 'votos';
                    console.log("Voto Nulo = " + totalVotosNulo);
                    break;

                default:
                    return;
                    
                
                }
            
            }while(voto !== 0);
}
