'use strict'

function sortirovka() {
    var razmer = +prompt("Дайте размер массива")
    var masiv = []
    
    var max = document.getElementById('max')
    var min = document.getElementById('min')

    console.log(max.value , min.value , razmer);
    console.log(typeof(razmer))
    for (var i = 0; i < razmer; i++) {
        masiv.push(parseInt(Math.random() * (parseInt(max.value) - parseInt(min.value)) + parseInt(min.value)));
    }
    document.getElementById("masiv").innerHTML = masiv;
    
    masiv.sort(function(a,b){
        return a - b ;
    });

    document.getElementById("otsort").innerHTML = masiv;

}