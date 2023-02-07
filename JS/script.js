
const calcular = document.getElementById('calcular')


function imc () {

    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    if (nome !== '' && altura !== ""  && peso !== '') {
        
        const valorIMC = (peso / (altura *altura)).toFixed(1)
        
        let classificação = ''

        if (valorIMC < 18.5){
            classificação = 'abaixo do peso'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você esta 
        ${classificação}`

    }else {
        resultado.textContent = 'Preencha todos os campos !!!'
    }
}

calcular.addEventListener('click', imc)

