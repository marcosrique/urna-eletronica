function dataHoraInicial(){
    const date = new Date().toLocaleDateString();
    document.getElementById("data").innerHTML = "Data de Votação " + date;
    const time = new Date().toLocaleTimeString();
    document.getElementById("hora").innerHTML = "Horário da Votação " + time;
}

function dataHoraFinal(){
    const date2 = new Date().toLocaleDateString();
    document.getElementById("data2").innerHTML = "Data de Votação " + date2;
    const time2 = new Date().toLocaleTimeString();
    document.getElementById("hora2").innerHTML = "Horário da Votação " + time2;
}

function verificaUrnaAtual(){

    fetch('urnaEletronica.js')
        .then(reponse => reponse.text())
        .then(response => CryptoJS.SHA256(response).toString())
        .then(hashUrnaAtual => {
           fetch('hashValido') 
           .then(reponse => reponse.text())
           .then(hashValido => {
            if(hashUrnaAtual === hashValido){
                document.getElementById("urnaTrue").innerHTML = ('Urna Verificada, código íntegro.');
            } else {
                document.getElementById("urnaFalse").innerHTML = ('URNA ADULTERADA! HASHES NÃO CONFEREM!')
                document.getElementById("urnaFalse1").innerHTML = (`HASH DA URNA: ${hashUrnaAtual}`);
                document.getElementById("urnaFalse2").innerHTML = (`HASH ESPERADO: ${hashValido}`);
            }
           })
        });
}

let
            voto,
            totalVotosCandidato1 = 0,
            totalVotosCandidato2 = 0,
            totalVotosCandidato3 = 0,
            totalVotosEmBranco = 0,
            senhaMesario = 0,
            totalVotosNulo = 0;
    
function urnaEletronica() {
    
    //Código do programa

    do {
        senhaMesario = parseInt(prompt("Digite a senha do mesario"));
    }while(confirm("Está certeza de que será sua senha?") != true);
    
    dataHoraInicial();
    
    const nomeDoCandidato1 = String(prompt("Digite o nome do Candidato 1: "));
    const nomeDoCandidato2 = String(prompt("Digite o nome do Candidato 2: "));
    const nomeDoCandidato3 = String(prompt("Digite o nome do Candidato 3: "));
    
    if (confirm("Os nomes dos candidatos estão corretos?" + nomeDoCandidato1 + " | " + nomeDoCandidato2 + " | " + nomeDoCandidato3)) {
    } else {
        const nomeDoCandidato1 = String(prompt("Digite o nome do Candidato 1: "));
        const nomeDoCandidato2 = String(prompt("Digite o nome do Candidato 2: "));
        const nomeDoCandidato3 = String(prompt("Digite o nome do Candidato 3: "));
    }
            
            do {
              
                voto = parseInt(prompt("Digite o seu voto : "));
                
                switch(voto) {
    
                    case senhaMesario: 
                    String(prompt("Tem certeza que deseja terminar a votação?"));
                    break;

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
                    if  (confirm("Seu voto será anulado!")) {
                        totalVotosNulo++;
                        console.log("Voto Nulo = " + totalVotosNulo);
                        
                    } else {
                        voto = parseInt(prompt("Digite o seu voto novamente :"));
                    break;
                    }

                    
                    

                                    

                    const totalVotos = (totalVotosCandidato1+totalVotosCandidato2+totalVotosCandidato3+totalVotosEmBranco+totalVotosNulo);
                                        
                    document.getElementById("resultado").innerHTML = "Total de votos Válidos " + totalVotos;
                    document.getElementById("resultado1").innerHTML = nomeDoCandidato1 + " = " + totalVotosCandidato1 + " Votos que representa " + (totalVotosCandidato1/totalVotos*100).toFixed(2) + "% dos votos";
                    document.getElementById("resultado2").innerHTML = nomeDoCandidato2 + " = " + totalVotosCandidato2 + " Votos que representa " + (totalVotosCandidato2/totalVotos*100).toFixed(2) + "% dos votos";
                    document.getElementById("resultado3").innerHTML = nomeDoCandidato3 + " = " + totalVotosCandidato3 + " Votos que representa " + (totalVotosCandidato3/totalVotos*100).toFixed(2) + "% dos votos";
                    document.getElementById("resultado4").innerHTML = "Votos Branco = " + totalVotosEmBranco + " Votos que representa " + (totalVotosEmBranco/totalVotos*100).toFixed(2) + "% dos votos";
                    document.getElementById("resultado5").innerHTML = "Votos Nulo = " + totalVotosNulo + " Votos que representa " +(totalVotosNulo/totalVotos*100).toFixed(2) + "% dos votos";
                    
                    dataHoraFinal();
                    verificaUrnaAtual();     
                    break;
                }

                                 
                

                    
           
                   
        }while(voto !== senhaMesario);
        
  
                   
}

                
                    
                   
               
                    

                    

