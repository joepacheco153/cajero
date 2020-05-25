//1 Login
document.getElementById("b1").addEventListener("click",b1);
document.getElementById("b2").addEventListener("click",b2);
document.getElementById("b3").addEventListener("click",b3);
document.getElementById("b4").addEventListener("click",b4);
document.getElementById("b5").addEventListener("click",b5);
document.getElementById("b6").addEventListener("click",b6);
document.getElementById("b7").addEventListener("click",b7);
document.getElementById("b8").addEventListener("click",b8);
document.getElementById("b9").addEventListener("click",b9);
document.getElementById("b11").addEventListener("click",b11);
document.getElementById("b12").addEventListener("click",b12);
var resultado = document.getElementById("clave");
var error = document.getElementById("error");

//funciones botones
function b1(){
    var n = document.getElementById("b1").innerHTML;
    resultado.value = resultado.value + n;
}
function b2(){
    var n = document.getElementById("b2").innerHTML;
    resultado.value = resultado.value + n;
}
function b3(){
    var n = document.getElementById("b3").innerHTML;
    resultado.value = resultado.value + n;
}
function b4(){
    var n = document.getElementById("b4").innerHTML;
    resultado.value = resultado.value + n;
}
function b5(){
    var n = document.getElementById("b5").innerHTML;
    resultado.value = resultado.value + n;
}
function b6(){
    var n = document.getElementById("b6").innerHTML;
    resultado.value = resultado.value + n;
}
function b7(){
    var n = document.getElementById("b7").innerHTML;
    resultado.value = resultado.value + n;
}
function b8(){
    var n = document.getElementById("b8").innerHTML;
    resultado.value = resultado.value + n;
}
function b9(){
    var n = document.getElementById("b9").innerHTML;
    resultado.value = resultado.value + n;
}
function b11(){
    var n = document.getElementById("b11").innerHTML;
    resultado.value = resultado.value + n;
}
function limpiar(){
    resultado.value = "";
}
function mostrarerror(){
    error.value = "Contraseña incorrecta"
}
function limpiarerror(){
    error.value="";
}

//validar contraseña
var password = "10101010";
class Usuario{
    constructor(contraseña){
        this.contraseña=contraseña;
    };
    contraseña(){
        return this.contraseña;
    };
};
function validar(){
    var user = new Usuario(document.getElementById("clave").value)
    if(user.contraseña == password){
        vistamenu();
    }else{
        mostrarerror();
        limpiar();
        
    } 
}
//redireccionamientos
function vistaretiro(){
    window.location = "retiro.html";
}
function vistamenu(){
    window.location = "menu.html";
}
function vistagracias(){
    window.location = "gracias.html";
}
function vistaotrascantidades(){
    window.location = "otrascantidades.html";
}

