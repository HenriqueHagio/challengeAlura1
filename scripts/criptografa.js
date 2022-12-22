// pega o texto
var mensagem = document.querySelector("textarea");
// criptografa
function criptografa() {
    console.log(mensagem.value);
}
var button = document.querySelector("[value=Criptografar]");
button.onclick = criptografa;   