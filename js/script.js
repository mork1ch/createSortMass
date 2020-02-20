'use strict'

function sortirovka() {
    var razmer = +prompt("Дайте размер массива")
    var masiv = []
    
    var max = document.getElementById('max')
    var min = document.getElementById('min')

    console.log(max.value , min.value , razmer);
    console.log(typeof(min))
    for (var i = 0; i < razmer; i++) {
        masiv.push(parseInt(Math.random() * (max.value - min.value) + min.value));
    }
    document.getElementById("masiv").innerHTML = masiv;
}