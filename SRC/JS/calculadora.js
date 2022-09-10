function IMC(){
    //declarando as variáveis
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.getElementById('txtn2')
    var res = document.getElementById('respo')
    var cal = document.getElementById('calc')

    var n2 = Number(tn2.value)
    var n1 = Number(tn1.value)
    var s = n2 / (n1 ** 2)

    //condições do IMC
    if (s < 17.0) {
        //muito baixo
        var x = "Muito abaixo"
    }else if (s < 18.5){
        //abaixo
        var x = "Abaixo"
    }else if (s < 25.0){
        //normal
        var x = "Normal"
    }else if (s < 30.0){
        //sobrepeso
        var x = "Sobrepeso"
    }else if (s < 35.0){
        //obesidade I
        var x = "Obesidade I"
    }else if (s < 40.0){
        //obesidade II
        var x = "Obesidade II"
    }else {
        //obesidade mórbida
        var x = "Obesidade Mórbida"
    }
    //mostrando os resultados
    res.innerHTML = `Seu IMC é de ${s} ` 
    cal.innerHTML = ` Sua classificação é: ${x}`
}