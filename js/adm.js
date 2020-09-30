/*SCROLL NAVBAR*/
$(window).scroll(function(){
  $('nav').toggleClass('scrolled',$(this).scrollTop()>200);
})
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Formulario

var inputs = document.getElementsByClassName ("formulario__input");
for (var i =0; i <inputs.length; i++) {
inputs [i].addEventListener ("keyup", function(){
if(this.value.length>=1) {
    this.nextElementSibling.classList.add("fijar");
} else {
    this.nextElementSibling.classList.remove("fijar");

}

})

}

//AGREFAR DATOS A LA TABLA
class Datos{
  constructor(codigo, nombre){
    this._codigo = codigo;
    this._nombre = nombre;
  }
}

class Visu {
  agregarInfo(datos){
    const tabla = document.getElementById('Contenedor__peliculas');
    const elementos = document.createElement("tr");
    elementos.innerHTML = `

        <td>${datos._codigo}</td> 
        <td>${datos._nombre}</td> 
        <td></td> 
        <td></td> 
        <td><input type="checkbox"></td> 
        <td>&nbsp;<i class="far fa-trash-alt"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i class="far fa-edit"></i>&nbsp;&nbsp;&nbsp;<i class="fas fa-star"></i></td>
    `;
    tabla.appendChild(elementos);
  }
}
const evento = document
  .getElementById('formulario')
  .addEventListener('submit', function(e){
    const codigo = document.getElementById('codigo').value;
    const nombre = document.getElementById('nombre').value;

    const ponerElementos = new Datos (codigo, nombre);
    const visu = new Visu();
    visu.agregarInfo(ponerElementos);

    e.preventDefault();
  })



