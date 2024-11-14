'use strict';
import { PokemonModel } from './PokemonModel.js';
import { PokemonTypeModel } from './PokemonTypeModel.js';

/*
 * APELLIDO, NOMBRE | APELLIDO, NOMBRE
 */

const rayo = new PokemonTypeModel('1', 'rayo', 'yellow');
const agua = new PokemonTypeModel('2', 'agua', 'blue');
const normal = new PokemonTypeModel('3', 'Normal', 'blue');
const planta = new PokemonTypeModel('4', 'Planta', 'blue');
const veneno = new PokemonTypeModel('5', 'Veneno', 'blue');
const fuego = new PokemonTypeModel('6', 'Fuego', 'blue');
const volador = new PokemonTypeModel('7', 'Volador', 'blue');
const fantasma = new PokemonTypeModel('8', 'Fantasma', 'blue');
const hielo = new PokemonTypeModel('9', 'Hielo', 'blue');
const acero = new PokemonTypeModel('10', 'Acero', 'blue');
const lucha = new PokemonTypeModel('11', 'Lucha', 'blue');


const pikachu = new PokemonModel('1', 'pikachu', 'Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'style', [rayo], '500');
const blastoise = new PokemonModel('2', 'Blastoise', 'Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'style', [agua], '600');
const bulbasur = new PokemonModel('3', 'Bulbasur', 'Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'style', [planta, veneno], '321');
const charizard = new PokemonModel('4', 'Charizard', 'Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'style', [fuego, volador], '241');
const gengar = new PokemonModel('5', 'Gengar', 'Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'style', [fantasma, veneno], '331');
const lucario = new PokemonModel('6', 'Lucario', 'Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'style', [lucha, acero], '212');
const eevee = new PokemonModel('7', 'Eevee', 'Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'style', [normal], '531');
const lapras = new PokemonModel('8', 'Lapras', 'Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'style', [hielo, agua], '134');
const garados = new PokemonModel('9', 'Garados', 'Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'style', [agua], '244');

// Array de productos con instancias de PokemonModel
const productos = [
    { PokemonModel: pikachu },
    { PokemonModel: blastoise },
    { PokemonModel: bulbasur },
    { PokemonModel: charizard },
    { PokemonModel: gengar },
    { PokemonModel: lucario },
    { PokemonModel: eevee },
    { PokemonModel: lapras },
    { PokemonModel: garados }
];

for(const elementkey in productos){

    console.log("---------------------------->"+elementkey)
}


const listaProductos = document.getElementById("productos");
productos.forEach(pro => {
    // Crear el elemento `li` para cada producto
    const item = document.createElement("li");
    item.setAttribute("id", pro.PokemonModel.id)

    // Crear y agregar el título
    const titulo = document.createElement("h3");
    titulo.textContent = pro.PokemonModel.name;  // Accede directamente a pro.PokemonModel.name
    item.appendChild(titulo);

    // Crear y agregar la descripción
    const descripcion = document.createElement("p");
    descripcion.textContent = pro.PokemonModel.description;  // Accede directamente a pro.PokemonModel.description
    item.appendChild(descripcion);

    // Crear y agregar el precio
    const precio = document.createElement("p");
    precio.innerHTML = `Precio: $<span>${pro.PokemonModel.price}</span>`;  // Accede directamente a pro.PokemonModel.price
    item.appendChild(precio);

    // Crear y agregar la categoría
    const categoria = document.createElement("p");
    categoria.textContent = pro.PokemonModel.pokemonTypes.map(type => type.name).join(', ');  // Recorrer y mostrar los tipos
    item.appendChild(categoria);

    // Crear y agregar el botón
    const boton = document.createElement("button");
    boton.textContent = "Agregar";
    boton.addEventListener("click", function() {
        // Obtener el id del `li` más cercano
        const pokemonId = this.closest("li").getAttribute("id");
        addToCarrito(pokemonId)
    });
    item.appendChild(boton);

    // Agregar el elemento `li` a la lista de productos
    listaProductos.appendChild(item);
});

// Objeto que administra el carrito
const carrito = {
    items: [],
    calcularTotal() { },
    calcularCantidad() { },
}

function addToCarrito(pokemonId){
    //obtener los datos del li
    //en base al nombre del pokemon buscar el objeto y añadir a la liste de item
    carrito.items.push(productos.find(pro => pro.PokemonModel.id === pokemonId))
    console.log(carrito.items)
}
function deleteFromCarrito(pokemonId){
    carrito.items.splice(carrito.items.indexOf(pokemonId), 1)
}
