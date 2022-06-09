function CalcularIMC(){
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let imc = 0;
    let resultado;

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
    console.log(imc)
    console.log(resultado)
    
    let erro = "";
    
        if(document.getElementById("peso").value.trim() == ""){
            erro = "- O campo peso é obrigatório!<br>"
        }
    
        if(document.getElementById("altura").value.trim() ==""){
            erro += "- O campo altura é obrigatório!<br>";
        }

        if(peso == 0 || altura == 0){
            //coloca o conteúdo na div erro
            $('#zero').html("ATENÇÃO!<br><br>O peso ou a altura não podem ser 0 (zero)");
            //exibe o modal
            $('#zero').modal({
                fadeDuration: 1000
            });

            return false;

        }

        if (erro != ""){
            //coloca o conteúdo na div erro
            $('#erro').html("ATENÇÃO!<br><br>" + erro);
            //exibe o modal
            $('#erro').modal({
                fadeDuration: 1000
            });
    
            return false;
        }
        else{
            $('#resultado').html("IMC<br><br>" + imc +"<br>" + resultado + "<br>");
            $('#resultado').modal({
                fadeDuration: 1000
            });
        }
}

$(document).ready(function(){
    $('.peso').mask('000.000', {reverse: true});
    $('.altura').mask('00.00', {reverse: true});
	$('.date').mask('00/00/0000');
	$('.time').mask('00:00:00');
	$('.date_time').mask('00/00/0000 00:00:00');
	$('.cep').mask('00000-000');
	$('.phone').mask('0000-0000');
	$('.phone_with_ddd').mask('(00) 0000-0000');
	$('.license_plate').mask('SSS-0A00');
	$('.phone_us').mask('(000) 000-0000');
	$('.mixed').mask('AAA 000-S0S');
	$('.cpf').mask('000.000.000-00', {reverse: false});
	$('.cnpj').mask('00.000.000/0000-00', {reverse: true});
	$('.money').mask('000.000.000.000.000,00', {reverse: true});
	$('.money2').mask("#.##0,00", {reverse: true});
	$('.ip_address').mask('0ZZ.0ZZ.0ZZ.0ZZ', {
	  translation: {
		'Z': {
		  pattern: /[0-9]/, optional: true
		}
	  }
	});
	$('.ip_address').mask('099.099.099.099');
	$('.percent').mask('##0,00%', {reverse: true});
	$('.clear-if-not-match').mask("00/00/0000", {clearIfNotMatch: true});
	$('.placeholder').mask("00/00/0000", {placeholder: "__/__/____"});
	$('.fallback').mask("00r00r0000", {
		translation: {
		  'r': {
			pattern: /[\/]/,
			fallback: '/'
		  },
		  placeholder: "__/__/____"
		}
	  });
	$('.selectonfocus').mask("00/00/0000", {selectOnFocus: true});
  });
