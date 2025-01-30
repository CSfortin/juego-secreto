
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroLimite = 6;
let aciertos = 0;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;    
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        aciertos ++;
    } else {
        //EL usuario no acertó
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número Secreto es menor');        
        } else {
            asignarTextoElemento('p','El número Secreto es Mayor');
        }
        intentos ++;

        limpiarCaja();
    }
    return;
}


function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    
    if (numeroLimite != 0){
        //Si ya sorteamos todos los números
        if (listaNumerosSorteados.length == numeroMaximo){
            asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
        } else {
            //Si el numero generado esta incluido en la lista 
            if (listaNumerosSorteados.includes(numeroGenerado)){
                return generarNumeroSecreto();
            } else {
                listaNumerosSorteados.push(numeroGenerado);
                numeroLimite--;
                console.log(`numero limite: ${numeroLimite}`);
                return numeroGenerado;

            }
        }
    }else{
        finJuego();
    }
} 

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del Numero Secreto!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpiar la Caja
    limpiarCaja();
    //Indicar mensaje de intervalo de Números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el boton de Nuevo juego
document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

function finJuego(){
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    document.querySelector('#intentar').setAttribute('disabled', 'true');
    asignarTextoElemento('h1', 'Fin del Juego');
    asignarTextoElemento('p',  `Puntuación: ${aciertos}`);

}

condicionesIniciales();