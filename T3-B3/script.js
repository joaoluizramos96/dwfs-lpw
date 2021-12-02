document.getElementById("elemento").innerHTML = "Hello World!"

var objeto = document.getElementById("elemento2");
var n1 = 10;


function funcaoSoma(n1){
    var x = n1 + 3;
    console.log(x);
    return x;
}

/* Adicionando eventos no HTML através do JS:

 function adicionaTitulo(){
    objeto.innerHTML = "<h1> Título adicionado através do JavaScript. </h1>";
} */

function adicionaTitulo(){ // Alterando o texto do elemento através do clique do botão na página HTML
    console.log("Antes do if da função."); // Serve para "testar" a execução de algum trecho do código.
    if (objeto.innerText === "Título adicionado através do JavaScript."){
        objeto.innerHTML = "Apagando o título...";
    } else {
        objeto.innerHTML = "<h1> Título adicionado através do JavaScript. <h1>";
    }
}