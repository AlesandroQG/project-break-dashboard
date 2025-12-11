/*
new Date() -> obtener hora actual
setInterval() -> 
*/

const horaText = document.getElementById("hora"),
fecha = document.getElementById("fecha"),
mensaje = document.getElementById("mensaje");

const getMessage = (hora) => {
    let message;
    if (hora >= 0 && hora < 7) {
        message = "Es hora de descansar. Apaga y sigue mañana";
    } else if (hora >= 7 && hora < 12) {
        message = "Buenos días, desayuna fuerte y a darle al código";
    } else if (hora >= 12 && hora < 14) {
        message = "Echa un rato más pero no olvides comer";
    } else if (hora >= 14 && hora < 16) {
        message = "Espero que hayas comido";
    } else if (hora >= 16 && hora < 18) {
        message = "Buenas tardes, el último empujón";
    } else if (hora >= 18 && hora < 22) {
        message = "Esto ya son horas extras, ... piensa en parar pronto";
    } else {
        message = "Buenas noches, es hora de pensar en parar y descansar";
    }
    return message;
};

function reloj() {
    const date = new Date();
    let dia = date.getDay();
    let mes = date.getMonth() + 1;
    let anio = date.getFullYear();
    let hora = date.getHours();
    let minutos = date.getMinutes();
    let segundos = date.getSeconds();
    const message = getMessage(hora);
    if (dia < 10) {
        dia = "0" + dia;
    }
    if (mes < 10) {
        mes = "0" + mes;
    }
    if (hora < 10) {
        hora = "0" + hora;
    }
    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    if (segundos < 10) {
        segundos = "0" + segundos;
    }
    horaText.innerHTML = `${hora}:${minutos}:${segundos}`;
    fecha.innerHTML = `${dia}/${mes}/${anio}`;
    mensaje.textContent = message;
}

setInterval(reloj, 1000);

reloj();
