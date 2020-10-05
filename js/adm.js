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
// class Datos{
//   constructor(codigo, nombre,descripcion){
//     this._codigo = codigo;
//     this._nombre = nombre;
//     this._descripcion = descripcion;
//   }
// }

// class Visu {
//   agregarInfo(datos){
//     const tabla = document.getElementById('tabla');
//     const elementos = document.createElement("tr");
//     elementos.innerHTML = `

//         <td>${datos._codigo}</td> 
//         <td>${datos._nombre}</td> 
//         <td>${datos._descripcion}</td> 
//         <td></td> 
//         <td><input type="checkbox"></td> 
//         <td>&nbsp;<i class="far fa-trash-alt"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i class="far fa-edit"></i>&nbsp;&nbsp;&nbsp;<i class="fas fa-star"></i></td>
//     `;
//     tabla.appendChild(elementos);
//   }
// }
// const evento = document
//   .getElementById('formulario')
//   .addEventListener('submit', function(e){
//     const codigo = document.getElementById('codigo').value;
//     const nombre = document.getElementById('nombre').value;
//     const descripcion = document.getElementById('descripcion').value;

//     const ponerElementos = new Datos (codigo, nombre,descripcion);
//     const visu = new Visu();
//     visu.agregarInfo(ponerElementos);

//     e.preventDefault();
//   })


/*VARIABLES GLOBALES */
const formularioUI = document.querySelector('#formulario');
const listaPeliculasUI = document.getElementById('listaPeliculas');
let arrayPelis = [];



/*FUNCIONES */
const CrearPelis = (codigo, titulo, descripcion, categoria) => {
  let pelis = {
    codigo: codigo,
    titulo: titulo,
    descripcion: descripcion,
    categoria: categoria,
    estado: false
  }

arrayPelis.push(pelis);

return pelis;

}

const GuardarDB = () => {
  localStorage.setItem('peliculas', JSON.stringify(arrayPelis));

  PintarDB();

}

const PintarDB = () => {
  //Esto limpia el HTML ¡!
  listaPeliculasUI.innerHTML = '';
  arrayPelis = JSON.parse(localStorage.getItem('peliculas'));
  if(arrayPelis === null){
    arrayPelis = [];
  }else{
    arrayPelis.forEach(element => {

      if(element.estado === true){
        listaPeliculasUI.innerHTML += `
  <div id= "listaPeliculas" class="Contenedor__pelis"> 
  <table id= "tabla" style= "background-color:rgba(38, 226, 85, 0.4);" >
  <tr >
        <td>${element.codigo}</td> 
        <td>${element.titulo}</td> 
        <td>${element.descripcion}</td> 
        <td>${element.categoria}</td> 
        <td>
          <span class="material-icons float-left mr-2"></span>
          Estado - <b>${element.estado}</b>
        </td>  
        <td>
          <span class="material-icons mr-3">delete</span> 
          <span class="material-icons mr-3">edit</span>
          <span class="material-icons mr-3">done_all</span>
        </td>
    </tr>
    </table>
    </div>`
      }else{
        listaPeliculasUI.innerHTML += `
  <div id= "listaPeliculas" class="Contenedor__pelis"> 
  <table id= "tabla">
  <tr>
        <td>${element.codigo}</td> 
        <td>${element.titulo}</td> 
        <td>${element.descripcion}</td> 
        <td>${element.categoria}</td> 
        <td>
          <span class="material-icons float-left mr-2"></span>
          Estado - <b>${element.estado}</b>
        </td>  
        <td>
          <span class="material-icons mr-3">delete</span> 
          <span class="material-icons mr-3">edit</span>
          <span class="material-icons mr-3">done_all</span>
        </td>
  </tr>
  </table>
  </div>`
      }

    });
  }
}

const EliminarDB = (pelis) => {
  let indexArray;
  arrayPelis.forEach((elemento,index) => {
    if(elemento.pelis === pelis){
      indexArray =index;
    } 
    
  });
  arrayPelis.splice(indexArray,1);
  GuardarDB();
}

const ActivarDB = (pelis) => {
  let indexArray = arrayPelis.findIndex((elemento) => {
    return elemento.pelis === pelis
  });
  console.log(arrayPelis[indexArray]);
  arrayPelis[indexArray].estado = true;
  GuardarDB();
}


//EVENTLISTENER
formularioUI.addEventListener('submit',(e) =>{

  e.preventDefault();
  let codigoForm = document.querySelector('#codigo').value;
  let tituloForm = document.querySelector('#titulo').value;
  let descripcionForm = document.querySelector('#descripcion').value;
  let categoriaForm = document.querySelector('#categoria').value;
  
  CrearPelis(codigoForm, tituloForm, descripcionForm, categoriaForm);
  GuardarDB();
  formularioUI.reset();

});

document.addEventListener('DOMContentLoaded', PintarDB);

listaPeliculasUI.addEventListener('click',(e) => {

  e.preventDefault();
  
  if(e.target.innerHTML === 'done_all' || e.target.innerHTML === 'delete' ){
    let texto = e.target.parentNode.parentNode.childNodes[2].innerText;
    if(e.target.innerHTML === 'delete'){
      //Acción de eliminar
      EliminarDB(texto);
    }
    if(e.target.innerHTML === 'done_all'){
      //Acción de activar y desactivar
      ActivarDB(texto)
    }
    // if(e.target.innerHTML === 'edit'){
    //   //Acción de abrir formulario
    //   EditarDB(texto)
    // }
  }
});






