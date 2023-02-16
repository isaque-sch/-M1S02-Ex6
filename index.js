var estudante = false
var idade = 18
var genero = 'masculino'

var podeEntrar = 0

if (estudante === true) {
    var podeEntrar = true
}
else if (idade >= 18) {
    var podeEntrar = true
}
else {
    var podeEntrar = false
}



if (podeEntrar === true) {
    podeEntrarSim()
}
else {
    console.log('Você não tem os requisitos para entrar')
}


function podeEntrarSim () {
    if (estudante == true) {
        console.log('Pode entrar, sua entrada é gratuita')
    }
    else if (idade >= 60) {
        console.log('Pode entrar, sua entrada é gratuita')
    }
    else if (genero === 'masculino')
        console.log('Pode entrar, sua entrada é R$: 80,00')
    else {
        console.log('Pode entrar, sua entrada é R$: 50,00')
    }
}
