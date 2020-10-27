q1a1 = document.getElementById("q1-0");
q1a2 = document.getElementById("q1-1");
q1a3 = document.getElementById("q1-2");
q1a4 = document.getElementById("q1-3");
q1a5 = document.getElementById("q1-4");
q2a1 = document.getElementById("q2-0");
q2a2 = document.getElementById("q2-1");
q3a1 = document.getElementById("q3-0");
q3a2 = document.getElementById("q3-1");
q4a1 = document.getElementById("q4");
q5a1 = document.getElementById("q5");
q6a1 = document.getElementById("q6-0");
q6a2 = document.getElementById("q6-1");
q6a3 = document.getElementById("q6-2");
q6a4 = document.getElementById("q6-3");
q6a5 = document.getElementById("q6-4");
q7Slider = document.getElementById("q7");
q7SliderValue = document.getElementById("sliderValue");
q8a1 = document.getElementById("q8");
q9a1 = document.getElementById("q9-0");
q9a2 = document.getElementById("q9-1");

var resultadoFinal = document.getElementById("resultadoTexto");
var puntaje = 0;

q7Slider.value = 20;
q7SliderValue.innerHTML = q7Slider.value;

q7Slider.oninput = function () {
    q7SliderValue.innerHTML = this.value;
}

document.getElementById("btnVerResultado").onclick = function a() {

    if (confirm("🚫¿ESTA SEGURO QUE DESEA ENTREGAR EL EXÁMEN?🚫\n❗ESTA OPCIÓN ES DEFINITIVA❗")) {
        // Question 1
        if (q1a1.checked && q1a2.checked && q1a4.checked && !q1a3.checked && !q1a5.checked) {
            resultadoFinal.innerHTML += "&#10004 Respuesta 1<br><br>";
            puntaje += 1
        }
        else {
            resultadoFinal.innerHTML += "&#10006 Respuesta 1<br>Respuesta correcta: Sed, Nano,Grep<br><br>";
        }

        resultadoFinal.innerHTML += "";
        // Question 2
        if (q2a1.checked) {
            resultadoFinal.innerHTML += "&#10004 Respuesta 2<br><br>";
            puntaje += 1;
        }
        else {
            resultadoFinal.innerHTML += "&#10006 Respuesta 2<br>Respuesta correcta: Si<br><br>";
        }

        //Question 3
        var q3result = "&#10006 Respuesta 3<br>Respuestas correctas: NeoVim/Editor de texto<br> GIMP/Diseño Gráfico<br>Blender/Diseño 3d<br> J Downloader/Gestor de descargas<br><br>";

        if (q3a1.value == "NeoVim" && q3a2.value == "Editor de Texto") {
            q3result = "&#10004 Respuesta 3<br><br>";
            puntaje += 2;
        }
        if (q3a1.value == "GIMP" && q3a2.value == "Diseño Gráfico") {
            q3result = "&#10004 Respuesta 3<br><br>";
            puntaje += 2;
        }

        if (q3a1.value == "Blender" && q3a2.value == "Diseño 3D") {
            q3result = "&#10004 Respuesta 3<br><br>";
            puntaje += 2;
        }

        if (q3a1.value == "J Downloader" && q3a2.value == "Gestor de Descargas") {
            q3result = "&#10004 Respuesta 3<br><br>";
            puntaje += 2;
        }

        resultadoFinal.innerHTML += q3result;

        // Question 4

        q4Str = q4a1.value.trim().toUpperCase();

        if (q4Str == "PARABOLA") {
            resultadoFinal.innerHTML += "&#10004 Respuesta 4<br><br>";
            puntaje += 1;
        }
        else {
            resultadoFinal.innerHTML += "&#10006 Respuesta 4<br>Respuesta correcta: Parabola<br><br>";
        }


        // Question 5

        if (q5.value == "1953-03-16") {
            resultadoFinal.innerHTML += "&#10004 Respuesta 5<br><br>";
            puntaje += 1;
        }
        else {
            resultadoFinal.innerHTML += "&#10006 Respuesta 5<br>Respuesta correcta: 16/03/1953<br><br>";
        }

        // Question 6

        if (q6a1.checked && q6a3.checked && q6a5.checked && !q6a2.checked && !q6a4.checked) {
            resultadoFinal.innerHTML += "&#10004 Respuesta 6<br><br>";
            puntaje += 1;
        }
        else {
            resultadoFinal.innerHTML += "&#10006 Respuesta 6<br>Respuesta correcta: GCC Compiler, Emacs, CopyLeft<br><br>";
        }

        // Question 7

        if (q7Slider.value == 35) {
            resultadoFinal.innerHTML += "&#10004 Respuesta 7<br><br>";
            puntaje += 1;
        }
        else {
            resultadoFinal.innerHTML += "&#10006 Respuesta 7<br>Respuesta correcta: 35 años<br><br>";
        }

        // Question 8

        q8Str = q8a1.value.trim().toUpperCase();

        if (q8Str == "TRISQUEL") {
            resultadoFinal.innerHTML += "&#10004 Respuesta 8<br><br>";
            puntaje += 1;
        }
        else {
            resultadoFinal.innerHTML += "&#10006 Respuesta 8<br>Respuesta correcta: Trisquel<br><br>";
        }

        // Question 9
        if (q9a1.checked) {
            resultadoFinal.innerHTML += "&#10004 Respuesta 9<br><br>";
            puntaje += 1;
        }
        else {
            resultadoFinal.innerHTML += "&#10006 Respuesta 9<br>Respuesta correcta: Verdadero<br><br>";
        }

        if (puntaje >= 6) {
            document.getElementById("resultadoNota").innerHTML = "&#9989 Exámen Aprobado - Nota: " + puntaje;
        }
        else {
            document.getElementById("resultadoNota").innerHTML = "&#10060 Exámen Reprobado - Nota: " + puntaje;
        }

        document.getElementById("question_grid").style.display = "none";
        document.getElementById("resultPage").style.display = "block";
    }
}


