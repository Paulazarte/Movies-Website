/*SCROLL NAVBAR*/
$(window).scroll(function(){
    $('nav').toggleClass('scrolled',$(this).scrollTop()>200);
})

/* CAROUSEL CON LISTA DE PELICULAS */
const fila = document.querySelector(".contenedor-carousel");
const peliculas = document.querySelectorAll(".pelicula");
const flechaIzquierda = document.getElementById("flecha-izquierda");
const flechaDerecha = document.getElementById("flecha-derecha");

// Event Listener para la flecha derecha
flechaDerecha.addEventListener("click", () => {
  fila.scrollLeft += fila.offsetWidth;

  const indicadorActivo = document.querySelector(".indicadores .activo");
  if (indicadorActivo.nextElementSibling) {
    indicadorActivo.nextElementSibling.classList.add("activo");
    indicadorActivo.classList.remove("activo");
  }
});

// Event Listener para la flecha Izquierda
flechaIzquierda.addEventListener("click", () => {
  fila.scrollLeft -= fila.offsetWidth;

  const indicadorActivo = document.querySelector(".indicadores .activo");
  if (indicadorActivo.previousSibling) {
    indicadorActivo.previousSibling.classList.add("activo");
    indicadorActivo.classList.remove("activo");
  }
});

// Paginación
const numeroPaginas = Math.ceil(peliculas.length / 5);
for (let i = 0; i < numeroPaginas; i++) {
  const indicador = document.createElement("button");

  if (i === 0) {
    indicador.classList.add("activo");
  }

  document.querySelector(".indicadores").appendChild(indicador);
  indicador.addEventListener("click", (e) => {
    fila.scrollLeft = i * fila.offsetWidth;

    document.querySelector(".indicadores .activo").classList.remove("activo");
    e.target.classList.add("activo");
  });
}

/* HOVER */
peliculas.forEach((pelicula) => {
  pelicula.addEventListener("mouseenter", (e) => {
    const elemento = e.currentTarget;
    setTimeout(() => {
      peliculas.forEach((pelicula) => pelicula.classList.remove("hover"));
      elemento.classList.add("hover");
    }, 300);
  });
});

fila.addEventListener("mouseleave", () => {
  peliculas.forEach((pelicula) => pelicula.classList.remove("hover"));
});


// var figure = $(".video");
// var vid = figure.find("video");

// [].forEach.call(figure, function (item,index) {
//     item.addEventListener('mouseover', hoverVideo.bind(item,index), false);
//     item.addEventListener('mouseout', hideVideo.bind(item,index), false);
// });

// function hoverVideo(index, e) {
//     vid[index].play(); 
// }

// function hideVideo(index, e) {
//     vid[index].pause(); 
// }

// var prueba = $('.prueba');
// prueba.on('mouseenter focus', function(){
//     prueba.get(0).play()
// })

// prueba.on('mouseout blur', function(){
//     prueba.get(0).pause()
// })

/*SEGUNDO CAROUSEL */
$('#controlR').click(function() {
  event.preventDefault();
  $('#content').animate({
    marginLeft: "-=400px"
  }, "fast");
});

$('#controlL').click(function() {
  event.preventDefault();
  $('#content').animate({
    marginLeft: "+=400px"
  }, "fast");
});
