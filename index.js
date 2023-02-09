var segundo=0
var minuto=0
var hora=0

var interval

function doisDigitos(digito){
    if(digito<10){
        return('0'+digito)
    }else{
        return(digito)
    }
}

function start(){
    watch()
    intervalo= setInterval(watch,10)


}

function pause(){
    clearInterval(intervalo)

}

function stop(){
    clearInterval(intervalo)
    segundo=0
    minuto=0
    window.alert("O cronômetro parou em: "+document.getElementById('watch').innerText)
    document.getElementById('watch').innerText='00:00:00'

}

function watch(){
    segundo++
    if(segundo==60){
        minuto++
        segundo=0
        if(minuto==60){
            minuto=0
            hora++
        }
    }
    document.getElementById('watch').innerText=doisDigitos(hora)+':'+doisDigitos(minuto)+':'+doisDigitos(segundo)
}