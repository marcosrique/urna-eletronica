function urnaEletronica() {
    
    //Código do programa

    const nomeDoCandidato1 = String(prompt("Digite o nome do Candidato 1: "));
    const nomeDoCandidato2 = String(prompt("Digite o nome do Candidato 2: "));
    const nomeDoCandidato3 = String(prompt("Digite o nome do Candidato 3: "));
    


    if (confirm("Os nomes dos candidatos estão corretos?" + nomeDoCandidato1 + " | " + nomeDoCandidato2 + " | " + nomeDoCandidato3)) {
    } else {
        const nomeDoCandidato1 = String(prompt("Digite o nome do Candidato 1: "));
        const nomeDoCandidato2 = String(prompt("Digite o nome do Candidato 2: "));
        const nomeDoCandidato3 = String(prompt("Digite o nome do Candidato 3: "));
    }


    let
            voto,
            totalVotosCandidato1 = 0,
            totalVotosCandidato2 = 0,
            totalVotosCandidato3 = 0,
            totalVotosEmBranco = 0,
            totalVotosNulo = 0;
            
            
        console.clear();
        console.log("Iniciando o Programa:");
        console.log("|1| " + nomeDoCandidato1);
        console.log("|2| " + nomeDoCandidato2);
        console.log("|3| " + nomeDoCandidato3);
        console.log("Voto em branco   = |5|");
                
            do {

                          
                voto = parseInt(prompt("Digite o seu voto : "));

                

                
                switch(voto) {
    
                    case 1: 
                    totalVotosCandidato1++;
                    console.log("Candidato 1 = " + totalVotosCandidato1);
                    break;
                    
                    case 2: 
                    totalVotosCandidato2++;
                    console.log("Candidato 2 = " + totalVotosCandidato2);
                    break;

                    case 3: 
                    totalVotosCandidato3++;
                    console.log("Candidato 3 = " + totalVotosCandidato3);
                    break;

                    case 5: 
                    totalVotosEmBranco++;
                    console.log("Voto em Branco = " + totalVotosEmBranco);
                    break;
                    
                    default: 
                    if (confirm("Seu voto será anulado!")) {
                        totalVotosNulo++;
                        console.log("Voto Nulo = " + totalVotosNulo);
                    } else {
                    break;
                    return;
                    }
                    
                    
                    
                    case 123:
                    console.log("Candidato 1 = " + totalVotosCandidato1);
                    console.log("Candidato 2 = " + totalVotosCandidato2);
                    console.log("Candidato 3 = " + totalVotosCandidato3);
                    console.log("Voto em Branco = " + totalVotosEmBranco);
                    console.log("Voto Nulo = " + totalVotosNulo);

                    const totalVotos = (totalVotosCandidato1+totalVotosCandidato2+totalVotosCandidato3+totalVotosEmBranco+totalVotosNulo);

                    document.getElementById("resultado").innerHTML = "Total de votos Válidos " + totalVotos;
                    document.getElementById("resultado1").innerHTML = nomeDoCandidato1 + " = " + totalVotosCandidato1 + " Votos que representa " + (totalVotosCandidato1/totalVotos*100).toFixed(2) + "% dos votos";
                    document.getElementById("resultado2").innerHTML = nomeDoCandidato2 + " = " + totalVotosCandidato2 + " Votos que representa " + (totalVotosCandidato2/totalVotos*100).toFixed(2) + "% dos votos";
                    document.getElementById("resultado3").innerHTML = nomeDoCandidato3 + " = " + totalVotosCandidato3 + " Votos que representa " + (totalVotosCandidato3/totalVotos*100).toFixed(2) + "% dos votos";
                    document.getElementById("resultado4").innerHTML = "Votos Branco = " + totalVotosEmBranco + " Votos que representa " + (totalVotosEmBranco/totalVotos*100).toFixed(2) + "% dos votos";
                    document.getElementById("resultado5").innerHTML = "Votos Nulo = " + totalVotosNulo + " Votos que representa " +(totalVotosNulo/totalVotos*100).toFixed(2) + "% dos votos";
                                                         
                                    
                    break;
                   
                }
        }while(voto != 123);
}