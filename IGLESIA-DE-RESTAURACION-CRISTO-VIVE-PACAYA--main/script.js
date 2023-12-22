// Establecer la fecha en la que estamos contando hacia atrás
var countDownDate = new Date("DEC 30, 2023 22:28:20").getTime();

// Actualizar la cuenta regresiva cada 1 segundo
var x = setInterval(function() {

  // Obtener la fecha y la hora de hoy
  var now = new Date().getTime();

  // Encuentre la distancia entre ahora y la fecha de la cuenta regresiva
  var distance = countDownDate - now;

  // Cálculos de tiempo para días, horas, minutos y segundos.
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Muestra el countdown"
  document.getElementById("demo").innerHTML = 
      "<p class='d'>" +days + "<br><span>Días</span></p>" + 
     "<p class='h'>" +hours + "<br><span>Horas</span></p>" + 
      "<p class='m'>" +minutes + "<br><span>Minutos</span></p>" + 
     "<p class='s'>" + seconds + "<br><span>Segundos</span></p>";

  // Si la cuenta regresiva ha terminado, escribe un texto
  if (distance < 0) {
    clearInterval(x);
    //La clase info genera el contenido al finalizar el countdown
    //Configure los estilos con CSS o JS
    var a=document.getElementsByClassName("info");
    a[0].style.height="100vh";
    //Utilice el innerHTML para introducir elementos
    a[0].innerHTML =
      "<video src='fondo.mp4' autoplay muted loop></video>" + 
      "<div class='suscribete'>" +
      "<a href='https://www.youtube.com/channel/UCBuPzVcwT8gxV4-aCpp4BDA' target='_blank'>Suscríbete por más código :)</a>" +
      "</div>";
    //El elemento con el id demo se oculta
    document.getElementById("demo").style.display = "none";
    //Un pequeño script para borrar el elemento h3 de cabecera :)
    const nodeList = document.querySelectorAll("h3");
    nodeList[0].style.display = "none";
  }
}, 1000); // 1000 milisegundos es igual a 1 segundo

window.addEventListener('scroll', function() {
  const logo = document.getElementById('logo');

  if (window.scrollY > 100) {
    logo.classList.add('hidden');
  } else {
    logo.classList.remove('hidden');
  }
});