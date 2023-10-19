


function verificarIntegridade() {
    // Ler o arquivo JavaScript
    let arquivoJS = 'urnaEletronica.js';
    let hashDoArquivo = aesjs.utils.utf8.toBytes(arquivoJS);

    

   
// Criar um hash SHA-256 do arquivo
   // const hash = crypto.createHash('sha256');
    //hash.update(arquivoJS);
    //const hashDoArquivo = hash.digest('hex');

    // Comparar o hash com um valor conhecido ou esperado
    const hashEsperado = '4471f8f6864b543ec16f8ff65392f36336b2b86917cf1e4d400f81a203a96381f';


    if (hashDoArquivo === hashEsperado) {
    
    
    console.log('O arquivo está íntegro.');
    } else {
    
    
    console.log('O arquivo foi alterado ou corrompido.');
    }


}