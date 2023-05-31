
//Header
let head= `
<div>
<img class="logo" src="./images/logo1.png" alt="" />
</div>

<nav id="menu">
<ul id="hamburguesa">
  <li><a href="#menu">OPEN</a></li>
  <li><a href="#">CLOSE</a></li>
</ul>
<ul id="barra">
  <li><a href="./index.html">Home</a></li>
  <li><a href="./servicios.html">Servicios</a></li>
  <li><a href="./contacto.html">Contacto</a></li>
  <li><a href="./registro.html">Reservas</a></li>
</ul>
</nav>
`
document.getElementById("header").innerHTML=head

//Footer
let cad= `
<div>
<ul>
  <li>Curso: Full Stack PHYTON</li>
  <li>CODO A CODO 4.0</li>
  <li>Alumna: Piñeiro, Carolina Beatriz</li>
  <li>Docente: Cerda, Marcela</li>
</ul>
<p>Copyright 2023 | Todos los derechos reservados - RENGE SPA</p>
</div>
<div>
<ul>
  <li class="redes">
    <a
      href="https://es-la.facebook.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="./images/facebook.png" alt="Facebook"
    /></a>
  </li>
  <li class="redes">
    <a
      href="https://www.youtube.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="./images/youtube.png" alt="youtube"
    /></a>
  </li>
  <li class="redes">
    <a
      href="/https://web.whatsapp.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="./images/whatsapp.png" alt="WhatsApp"
    /></a>
  </li>
</ul>
</div>`

document.getElementById("footer").innerHTML=cad

//Validación password en formulario mediante java Script

function validarPassword(password) {
    const decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if(password.value.match(decimal)) {

        alert("El password es seguro !"); 

    } else {

        alert("El password debe contener al menos una minúscula, mayúscula, número y un carácter especial. Y 8 carácteres como mínimo.")

    }
}


//Api Rest: https://openweathermap.org/api
