'use strict'

function sortirovka() {
    var razmer = +prompt("Дайте размер массива")
    var masiv = []

    var max = document.getElementById('max')
    var min = document.getElementById('min')

    console.log(max.value, min.value, razmer);
    console.log(typeof (razmer))

    let tablece = "<table align='center' border='1' cellspacing='0'>";

    for (var i = 0; i < razmer; i++) {
        masiv.push(parseInt(Math.random() * (parseInt(max.value) - parseInt(min.value)) + parseInt(min.value)));

        tablece = tablece + "<td style='height:15px; width:15px; text-align:center'>" + masiv[i] + "</td>";
    }

    //document.write(tablece);

    document.getElementById("masiv").innerHTML = tablece

    masiv.sort(function (a, b) {
        return a - b;
    });

    let ots = "<table align='center' border='1' cellspacing='0'>";

    for (i = 0; i < razmer; i ++){
        ots = ots + "<td style='height:15px; width:15px; text-align:center'>" + masiv[i] + "</td>";
    }

    document.getElementById("otsort").innerHTML = ots
}