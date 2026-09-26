document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('musica');
    
    if (audio) {
        // Inicializar la librería de animaciones por si acaso
        if (typeof AOS !== 'undefined') {
            AOS.init();
        }

        // Intenta reproducir solo si el navegador lo permite
        audio.play().catch(() => {
            console.log("El navegador bloqueó el autoplay. Esperando interacción.");
        });

        // Función para activar el audio con el primer toque
        const activarAudio = () => {
            if (audio.paused) {
                audio.play().then(() => {
                    console.log("Música iniciada por interacción");
                }).catch(err => console.error("Error al reproducir:", err));
            }
            // Remueve los eventos para que no se sigan ejecutando al hacer más clics
            document.removeEventListener('click', activarAudio);
            document.removeEventListener('touchstart', activarAudio);
        };

        // Escucha clics o toques en la pantalla
        document.addEventListener('click', activarAudio);
        document.addEventListener('touchstart', activarAudio);
    } else {
        console.error("No se encontró el elemento con id 'musica'");
    }
});



let fecha = new Date("10/10/2026");
let msFecha = fecha.getTime();


let spanDias = document.querySelector("#dias");
let spanHoras = document.querySelector("#horas");
let spanMinutos = document.querySelector("#minutos");
let spanSegundos = document.querySelector("#segundos");
let cuentaRegresiva = document.querySelector("#cuenta-regresiva");

let intervalo = setInterval(() => {
    let hoy = new Date().getTime();

    let distancia = msFecha - hoy;

    let msPorDia = 1000 * 60 * 60 * 24;
    let msPorHora = 1000 * 60 * 60;
    let msPorMinuto = 1000 * 60;
    let msPorSegundo = 1000;



    let dias = Math.floor(distancia / msPorDia);
    let horas = Math.floor((distancia % msPorDia) / msPorHora);
    let minutos = Math.floor((distancia % msPorHora) / msPorMinuto);
    let segundos = Math.floor((distancia % msPorMinuto) / msPorSegundo);

    spanDias.innerText = dias;
    spanHoras.innerText = horas < 10 ? "0" + horas : horas;
    spanMinutos.innerText = minutos < 10 ? "0" + minutos : minutos;
    spanSegundos.innerText = segundos < 10 ? "0" + segundos : segundos;

    if (distancia < 0) {

        clearInterval(intervalo);
        cuentaRegresiva.innerHTML = "<p class= 'grande'> ¡Hoy es dia!</p>"
    }
}, 1000); // Actualiza cada 1000 milisegundos (1 segundo)




let modal1 = document.getElementById("modal1");
let modal2 = document.getElementById("modal2");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

let close1 = document.getElementById("close1");
let close2 = document.getElementById("close2");

// Eventos para abrir
btn1.onclick = () => { modal1.style.display = "block"; }
btn2.onclick = () => { modal2.style.display = "block"; }

// Eventos para cerrar
close1.onclick = () => { modal1.style.display = "none"; }
close2.onclick = () => { modal2.style.display = "none"; }

// Cerrar al hacer clic fuera del recuadro
window.onclick = function (event) {
    if (event.target == modal1) modal1.style.display = "none";
    if (event.target == modal2) modal2.style.display = "none";
}


// Variables específicas para el modal 4
const modal4 = document.getElementById("miModal4");
const btnAbrir4 = document.getElementById("abrirModal4");
const btnCerrar4 = document.querySelector(".cerrar-modal4");

// Abrir modal 4
btnAbrir4.onclick = function() {
    modal4.style.display = "block";
}

// Cerrar modal 4 con la X
btnCerrar4.onclick = function() {
    modal4.style.display = "none";
}

// Cerrar modal 4 al hacer clic fuera de él
window.addEventListener('click', function(event) {
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
});
