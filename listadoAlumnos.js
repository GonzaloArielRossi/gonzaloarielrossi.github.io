// Lista de Mails de alumnos registrados en la cursada
var mails = [];
var mailStart = "alumno";
var mailEnd = "@alumnos.frh.utn.edu.ar"

for (var i = 1; i <= 30; i++) {
    mails[i] = mailStart + i + mailEnd;
}