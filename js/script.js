const reloj = document.querySelector('.reloj');

const dias = ["Domingo", "Lunes", "Martes", "Miércoles","Jueves", "Viernes", "Sábado"];
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// Funcion para crear el reloj 
const crearReloj = () => {
    const fecha = new Date();
     
    // Comprobamos que si la hora es menor a 10, le agreamos un cero por delante, de lo contrario no
    const horas = (fecha.getHours() < 10) ? `0${fecha.getHours()}` : fecha.getHours();
    const minutos = (fecha.getMinutes() < 10) ? `0${fecha.getMinutes()}` : fecha.getMinutes();
    const segundos = (fecha.getSeconds() < 10) ? `0${fecha.getSeconds()}` : fecha.getSeconds();

    reloj.children[0].innerHTML = `<h3>${dias[fecha.getDay()]} ${fecha.getDate()} de ${meses[fecha.getMonth()]} del ${fecha.getFullYear()}</h3>`;
    
    reloj.children[1].innerHTML = `<p class="display-2">${horas} : ${minutos} <span class="display-6">${segundos}</span></p>`;
}

// Iniciamos un intervalo para que la hora se actualice cada 1 segundo 
setInterval(crearReloj,1000);