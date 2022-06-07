function CalcularIMC(){
    let peso = $('peso');
    let altura = parseFloat(prompt("Digite sua altura (m):"));
    let imc = 0;
    let resultado;

    console.log(nome);
    console.log(peso);
    console.log(altura);

    imc = peso / (altura * altura); //ou peso / altura^2 = potencia

    if(imc < 18.5){
        resultado = "Abaixo do peso"
    }
    else if(imc < 25){
        resultado = "Peso normal"
    }

    else if(imc < 30){
        resultado = "Sobrepeso"
    }
    else if(imc < 35){
        resultado = "Obesidade Grau 1"
    }
    else if(imc < 40){
        resultado = "Obesidade Grau 2"
    }
    else{
        resultado = "Obesidade Grau 3"
    }

    //document.write(nome + "possui o IMC " + imc + " e está " + resultado)
    //ou
    alert(nome + " possui o IMC " + imc + " e está " + resultado)
}

