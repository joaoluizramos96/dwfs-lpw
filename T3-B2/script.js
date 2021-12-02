document.getElementById("elemento").innerHTML = "Hello World!"

var objeto = document.getElementById("elemento2");
var n1 = 10;


function funcaoSoma(n1){
    var x = n1 + 3;
    return x;
}

objeto.innerHTML = funcaoSoma(n1);