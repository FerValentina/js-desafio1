const precio = 400000;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio


const cantidadTotal = document.querySelector(".cantidad");
const total = document.querySelector(".valor-total");
const botonMas = document.querySelector(".mas");
const botonMenos = document.querySelector(".menos");

let cantidad = 0;
function valores(){
    cantidadTotal.textContent = cantidad;
    total.textContent = `${cantidad*precio}`
}
botonMas.onclick = function () {
    cantidad++;
    valores();
}
botonMenos.onclick = function () {
    cantidad--;
    valores();
}