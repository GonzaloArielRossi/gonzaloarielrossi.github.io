var questions = [
    document.getElementById("quiz1"),
    document.getElementById("quiz2"),
    document.getElementById("quiz3"),
    document.getElementById("quiz4"),
    document.getElementById("quiz5"),
    document.getElementById("quiz6"),
    document.getElementById("quiz7"),
    document.getElementById("quiz8"),
    document.getElementById("quiz9")];

var nav = [
    document.getElementById("nav1"),
    document.getElementById("nav2"),
    document.getElementById("nav3"),
    document.getElementById("nav4"),
    document.getElementById("nav5"),
    document.getElementById("nav6"),
    document.getElementById("nav7"),
    document.getElementById("nav8"),
    document.getElementById("nav9"),
    document.getElementById("arrowBack"),
    document.getElementById("arrowFoward")];


var currentQ = 0;
nav[0].style.backgroundImage = "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)";


/* Muestra la pregunta seleccionada y oculta el resto*/

nav[0].onclick = function q1() {
    questions[0].style.display = "block";
    currentQ = 0;
    for (var i = 0; i < questions.length; i++) {
        if (i != 0) { questions[i].style.display = "none"; }
    }

    for (var i = 0; i < nav.length; i++) {
        nav[i].style.backgroundImage = "";
    }

    nav[0].style.backgroundImage = "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)";
}

nav[1].onclick = function q2() {
    questions[1].style.display = "block";
    currentQ = 1;
    for (var i = 0; i < questions.length; i++) {
        if (i != 1) { questions[i].style.display = "none"; }
    }

    for (var i = 0; i < nav.length; i++) {
        nav[i].style.backgroundImage = "";
    }

    nav[1].style.backgroundImage = "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)";
}

nav[2].onclick = function q3() {
    questions[2].style.display = "block";
    currentQ = 2;
    for (var i = 0; i < questions.length; i++) {
        if (i != 2) { questions[i].style.display = "none"; }
    }

    for (var i = 0; i < nav.length; i++) {
        nav[i].style.backgroundImage = "";
    }

    nav[2].style.backgroundImage = "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)";
}

nav[3].onclick = function q4() {
    questions[3].style.display = "block";
    currentQ = 3;
    for (var i = 0; i < questions.length; i++) {
        if (i != 3) { questions[i].style.display = "none"; }
    }

    for (var i = 0; i < nav.length; i++) {
        nav[i].style.backgroundImage = "";
    }

    nav[3].style.backgroundImage = "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)";
}

nav[4].onclick = function q5() {
    questions[4].style.display = "block";
    currentQ = 4;
    for (var i = 0; i < questions.length; i++) {
        if (i != 4) { questions[i].style.display = "none"; }
    }

    for (var i = 0; i < nav.length; i++) {
        nav[i].style.backgroundImage = "";
    }

    nav[4].style.backgroundImage = "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)";
}

nav[5].onclick = function q6() {
    questions[5].style.display = "block";
    currentQ = 5;
    for (var i = 0; i < questions.length; i++) {
        if (i != 5) { questions[i].style.display = "none"; }
    }

    for (var i = 0; i < nav.length; i++) {
        nav[i].style.backgroundImage = "";
    }

    nav[5].style.backgroundImage = "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)";
}

nav[6].onclick = function q7() {
    questions[6].style.display = "block";
    currentQ = 6;
    for (var i = 0; i < questions.length; i++) {
        if (i != 6) { questions[i].style.display = "none"; }
    }

    for (var i = 0; i < nav.length; i++) {
        nav[i].style.backgroundImage = "";
    }

    nav[6].style.backgroundImage = "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)";
}

nav[7].onclick = function q8() {
    questions[7].style.display = "block";
    currentQ = 7;
    for (var i = 0; i < questions.length; i++) {
        if (i != 7) { questions[i].style.display = "none"; }
    }

    for (var i = 0; i < nav.length; i++) {
        nav[i].style.backgroundImage = "";
    }

    nav[7].style.backgroundImage = "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)";
}

nav[8].onclick = function q9() {
    questions[8].style.display = "block";
    currentQ = 8;
    for (var i = 0; i < questions.length; i++) {
        if (i != 8) { questions[i].style.display = "none"; }
    }

    for (var i = 0; i < nav.length; i++) {
        nav[i].style.backgroundImage = "";
    }

    nav[8].style.backgroundImage = "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)";
}

/* NAVEGACIÓN CON FLECHAS */

nav[9].onclick = function qBack() {
    if (currentQ > 0) {
        currentQ -= 1;
        questions[currentQ].style.display = "block";
        for (var i = 0; i < questions.length; i++) {
            if (i != currentQ) { questions[i].style.display = "none"; }
        }

        for (var i = 0; i < nav.length; i++) {
            nav[i].style.backgroundImage = "";
        }
        nav[currentQ].style.backgroundImage = "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)";
    }
}

nav[10].onclick = function qBack() {
    if (currentQ < 8) {
        currentQ += 1;
        questions[currentQ].style.display = "block";
        for (var i = 0; i < questions.length; i++) {
            if (i != currentQ) { questions[i].style.display = "none"; }
        }

        for (var i = 0; i < nav.length; i++) {
            nav[i].style.backgroundImage = "";
        }
        nav[currentQ].style.backgroundImage = "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)";
    }
}
