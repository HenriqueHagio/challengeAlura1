// pega o texto
var mensagem = document.querySelector("[name=decodificador]");
var teste = document.querySelector("[value=teste]")
// criptografa
function criptografa() {
    console.log(mensagem.value);
}
// esconde a tela
function escondeTela(){
   document.getElementById("teste").style.display ="none"
}
// mostrar na tela
function escreveTexto() {
    document.getElementById("tela2").innerHTML= `${mensagem.value}`
   
}

function mostraTexto() {
    var tela2 = document.getElementById('tela2')
    var tela1 = document.getElementById('tela1')
    if (tela2.style.display === 'none') {
        tela2.style.display = 'block';
        tela1.style.display = 'none';  
    } else {
        tela2.style.display = 'none';
    }
}
mostraTexto();
function uneTudo() {
    mostraTexto();
    escreveTexto();
    criptografa();
}
var button = document.querySelector("[value=Criptografar]");
button.onclick = uneTudo; 