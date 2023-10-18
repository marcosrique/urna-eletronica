
import fs from 'fs';
import crypto from 'crypto';

function verificarIntegridade() {
    // Ler o arquivo JavaScript
    const arquivoJS = fs.readFileSync('urnaEletronica.js');

    

   
// Criar um hash SHA-256 do arquivo
    const hash = crypto.createHash('sha256');
    hash.update(arquivoJS);
    const hashDoArquivo = hash.digest('hex');

    // Comparar o hash com um valor conhecido ou esperado
    const hashEsperado = '440546da871ff51d35718a9565db4ccf8318cdbe71a5c4f047c87abed9ce9cc7';


    if (hashDoArquivo === hashEsperado) {
    
    
    console.log('O arquivo está íntegro.');
    } else {
    
    
    console.log('O arquivo foi alterado ou corrompido.');
    }


}