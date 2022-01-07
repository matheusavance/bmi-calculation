
(function() {
    'use strict';
    document.querySelector('#formulario').addEventListener('submit', function(e) {
        e.preventDefault();
    
        const form = e.target;
        const {peso, altura} = form;
        const imc = (+peso.value / (altura.value * altura.value)).toFixed(2);
        let resultado = '';
    
        if (imc < 18.5) {
            resultado = "Abaixo do peso";
        } else if (imc < 25) {  
            resultado = "Peso normal";
        } else if (imc < 30) {  
            resultado = "Sobrepeso";
        } else if (imc < 35) {  
            resultado = "Obesidade grau 1";
        } else if (imc < 40) {  
            resultado = "Obesidade grau 2";
        } else if (imc >= 40) {  
            resultado = "Obesidade grau 3";
        } else if (imc >= 60) {  
            resultado = "SALVE, DRAGÃO";
        }
    
        document.querySelector("#resultado").innerText = `IMC = ${imc} - ${resultado}`;
    });
})();

//v.1 js
/* document.querySelector('#formulario').addEventListener('submit', function(e) {
    e.preventDefault();

    const form = e.target;
    const {peso, altura} = form;
    const imc = (+peso.value / (altura.value * altura.value)).toFixed(2);
    let resultado = '';

    if (imc < 18.5) {
        resultado = "Abaixo do peso";
    } else if (imc < 25) {  
        resultado = "Peso normal";
    } else if (imc < 30) {  
        resultado = "Sobrepeso";
    } else if (imc < 35) {  
        resultado = "Obesidade grau 1";
    } else if (imc < 40) {  
        resultado = "Obesidade grau 2";
    } else if (imc >= 40) {  
        resultado = "Obesidade grau 3";
    } else if (imc >= 60) {  
        resultado = "SALVE, DRAGÃO";
    }

    document.querySelector("#resultado").innerText = `IMC = ${imc} - ${resultado}`;
}); */
