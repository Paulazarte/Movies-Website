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