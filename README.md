# WEB DE SIMULACIÓN DE EXÁMEN ONLINE

![](https://i.imgur.com/Z77bxWY.png)

# Acerca del proyecto

Esta web fue realizada como trabajo práctico para la materia Laboratorio III de la Tecnicatura Universitaria en Programación de la UTN Haedo.

* Autor: Gonzalo Ariel Rossi
* Profesor: Ing. Mauro Gullino

# Validación de usuario

La web inicia con un formulario de verificación de alumno, la misma depende de:
1. El mail del alumno, el cual debe ser parte de un listado que es generado en un vector en memoria

```JS
for (var i = 1; i <= 30; i++) {
    mails[i] = mailStart + i + mailEnd;
}
```
2. Clave del curso: clave general para todo el curso.

Es importante aclarar que la validación es a modo de representación de la experiencia de usuario esperada, pero no cuenta con ninguna medida de seguridad real, ya que la finalidad del trabajo es probar los conocimientos de HTML, CSS y JavaScript, y no esta permitido el uso de PHP u otras tecnologías o frameworks. Por esto mismo, también, la foto de libreta que se pide, no sera guardada en ningún lado y se pierde al continuar.



La lista de mail validos va desde "alumno1@alumnos.frh.utn.edu.ar" hasta "alumno30@alumnos.frh.utn.edu.ar"

Credenciales para testeo de la web :
| Mail                           | Clave          |
| ------------------------------ | -------------- |
| alumno1@alumnos.frh.utn.edu.ar | PROG3UTNTM2020 |

# Respuestas Correctas

| P   | Respuesta                                                       | Puntaje |
| --- | --------------------------------------------------------------- | ------- |
| 1   | Sed, Nano, Grep                                                 | 1       |
| 2   | Si                                                              | 1       |
| 3   | NeoVim/Text o GIMP/Gráfico o Blender/3d o JDownloader/Descargas | 2       |
| 4   | Parabola                                                        | 1       |
| 5   | 16/03/1953                                                      | 1       |
| 6   | Gcc Compiler, Emacs, CopyLeft                                   | 1       |
| 7   | 35                                                              | 1       |
| 8   | Trisquel                                                        | 1       |
| 9   | Verdadero                                                       | 1       |
