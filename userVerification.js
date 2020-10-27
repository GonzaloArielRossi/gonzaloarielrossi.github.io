document.getElementById("btn_validar_usuario").onclick = function () {

    var nombre = document.getElementById("nombre").value;
    var mail = document.getElementById("mail").value
    var fotoLibreta = document.getElementById("subirArchivo").value
    var clave = document.getElementById("claveCurso").value;
    var resultadoMsg = "&#10071 Error";

    /*//Registro valido siempre para testeo
    document.getElementById("userStatus").innerHTML = "&#9989 Alumno Verificado: " + nombre;
    document.getElementById("user_validation_submit").style.display = "none";
    document.getElementById("question_grid").style.display = "grid";*/

    if (nombre == "") resultadoMsg += ", no ingresó Nombre y Apellido"
    if (mail == "") resultadoMsg += ", no ingresó Mail"
    if (fotoLibreta == "") resultadoMsg += ", no cargó foto de su libreta"
    if (clave == "") resultadoMsg += ", no ingresó Clave del Curso"


    if (mail != "" && clave != "" && nombre != "" && fotoLibreta != "") {
        if (mails.includes(mail) && clave == "PROG3UTNTM2020") {
            document.getElementById("userStatus").innerHTML = "&#9989 Alumno Verificado: " + nombre;
            document.getElementById("user_validation_submit").style.display = "none";
            document.getElementById("question_grid").style.display = "grid";
        }

        else resultadoMsg = "&#9940 Alumno Invalido";

    }
    document.getElementById("validar_user_result").innerHTML = resultadoMsg;

}

document.getElementById("nombre").onclick = function () {
    document.getElementById("validar_user_result").innerHTML = "";
}

document.getElementById("mail").onclick = function () {
    document.getElementById("validar_user_result").innerHTML = "";
}

document.getElementById("claveCurso").onclick = function () {
    document.getElementById("validar_user_result").innerHTML = "";
}