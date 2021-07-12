
let calcular = document.getElementById('calcular')



function imc () {
    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){
        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso';
        }else if(valorIMC < 25){
            classificacao = 'com peso ideal, parabens';
        }else if(valorIMC < 30){
        classificacao = 'levemente acima do peso';
        }else if(valorIMC < 35){
        classificacao = 'com obesidade grau I';
        }else if(valorIMC < 40){
        classificacao = 'com obesidade grau II';
        }else {
            classificacao = 'com obesidade grau III, cuidado!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você esta ${classificacao}`;
    
    }else {
        resultado.textContent = 'Preencha todos os campos'
    }
}



calcular.addEventListener('click', imc);

