let id = document.getElementById("titulo");
console.log(id.innerText);

id.innerText = "Modificacion de titulo con innerText";
console.log(id.innerText); 

const div = document.getElementById("container");
let producto1 = "papa";
let precio1 = 200;
let producto2 = "cebolla";
let precio2 = 250;

let productosVerduleria = document.createElement("container")
productosVerduleria.innerHTML = `<h1>producto: ${producto1} ${producto2}</h1>;
<span> precio: $ ${precio1} ${precio2} </span>
`
div.append(productosVerduleria);