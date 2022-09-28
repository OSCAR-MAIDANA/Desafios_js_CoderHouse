let saludo = document.getElementById("saludo");
let boton = document.getElementById("boton")

boton.addEventListener("mousedown", () => {
  saludo.className = "verde";
});
boton.addEventListener("mouseup", () => {
  saludo.className = "rojo";
});
boton.addEventListener("mouseover", () => {
  saludo.className = "azul";
})