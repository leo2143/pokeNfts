'use strict';
import { Procesamiento } from './procesamiento.js';

import { PokemonModel } from './PokemonModel.js';
import { PokemonTypeModel } from './PokemonTypeModel.js';



/*
 * ORELLANA, LEONARDO
 */

const rayo = new PokemonTypeModel('1', 'Rayo', 'bg-warning text-dark');
const agua = new PokemonTypeModel('2', 'Agua', 'bg-water text-light');
const normal = new PokemonTypeModel('3', 'Normal', 'bg-secondary text-light');
const planta = new PokemonTypeModel('4', 'Planta', 'bg-grass');
const veneno = new PokemonTypeModel('5', 'Veneno', 'bg-poison');
const fuego = new PokemonTypeModel('6', 'Fuego', 'bg-fire');
const volador = new PokemonTypeModel('7', 'Volador', 'bg-fly');
const fantasma = new PokemonTypeModel('8', 'Fantasma', 'bg-ghost');
const hielo = new PokemonTypeModel('9', 'Hielo', 'bg-ice');
const acero = new PokemonTypeModel('10', 'Acero', 'bg-steel');
const lucha = new PokemonTypeModel('11', 'Lucha', 'bg-figther');


const pikachu = new PokemonModel('1', 'Pikachu', 'Este Pikachu es curioso y lleno de energía, Le encanta correr y jugar, pero ten cuidado con sus descargas eléctricas cuando se emociona demasiado. Con el compañero adecuado, ¡será el aliado perfecto para cualquier viaje!', '../../imgs/pokemons/pikachu.jpg', [rayo], 500, 'Lia Takahashi', 'Raro', 'Takahashi', 'Si');
const blastoise = new PokemonModel('2', 'Blastoise', 'Este Blastoise está listo para defender a su entrenador con sus potentes cañones de agua. Aunque parece serio, le encanta jugar en el agua y hacer pequeños remolinos. Si eres su compañero, prepárate para muchas aventuras acuáticas.', '../imgs/pokemons/blastoice.jpg', [agua], 600, 'Lia Takahashi', 'Muy raro', 'Takahashi', 'No');
const bulbasur = new PokemonModel('3', 'Bulbasur', 'Este Bulbasaur está lleno de energía y siempre listo para ayudar a su entrenador a crecer. Adora tomar el sol y fortalecer su liana, aunque también disfruta de un buen descanso bajo las hojas. Con paciencia y cuidado, verás cómo florece junto a ti.', '../imgs/pokemons/bulbasur.jpg', [planta, veneno], 321, 'Lia Takahashi', 'Raro', 'Takahashi', 'Si');
const charizard = new PokemonModel('4', 'Charizard', 'Este Charizard de espíritu indomable busca un entrenador que pueda igualar su valentía. Su llama arde intensamente, y aunque parece rudo, tiene un lado protector. ¡Solo cuidado con esas alas! A veces le gusta alzar el vuelo sin avisar.', '../imgs/pokemons/charizard.jpg', [fuego, volador], 241, 'Lia Takahashi', 'Epico', 'Takahashi', 'Si');
const gengar = new PokemonModel('5', 'Gengar', 'Gengar es travieso y siempre está buscando nuevas formas de jugarle bromas a su entrenador. Su risa fantasmal llena el aire, y disfruta desvaneciéndose en las sombras. Con él, tendrás diversión y misterio a partes iguales.', '../imgs/pokemons/gengar.jpg', [fantasma, veneno], 331, 'Hiroshi Sato', 'Epico', 'Sato', 'Si');
const lucario = new PokemonModel('6', 'Lucario', 'Lucario es leal y siempre está en sintonía con las emociones de su entrenador. Su energía aura lo conecta profundamente con quienes le importan, y está dispuesto a luchar junto a ti. Solo necesita a alguien que comparta su sentido de justicia', '../imgs/pokemons/lucario.jpg', [lucha, acero], 212, 'Hiroshi Sato', 'Ultra rara', 'Sato', 'No');
const eevee = new PokemonModel('7', 'Eevee', 'Este Eevee es curioso y lleno de energía, siempre listo para explorar y descubrir cosas nuevas. Con su espíritu adaptable, busca un entrenador que lo ayude a crecer y evolucionar. Con amor y cuidado, ¡este Eevee está listo para cualquier aventura!', '../imgs/pokemons/eevee.jpg', [normal], 531, 'Kai Nakamura', 'Comun', 'Nakamura', 'Si');
const lapras = new PokemonModel('8', 'Lapras', 'Lapras es sereno y le encanta navegar tranquilamente sobre el agua. Es muy protector con aquellos que ama y busca un entrenador que valore la paz y la conexión con la naturaleza. Prepárate para un viaje tranquilo y lleno de armonía a su lado.', '../imgs/pokemons/lapras.jpg', [hielo, agua], 134, 'Kai Nakamura', 'Raro', 'Nakamura', 'Si');
const garados = new PokemonModel('9', 'Garados', 'Este es un Gyarados feroz y majestuoso, siempre en busca de un entrenador que pueda canalizar su energía desbordante. Le encanta nadar a gran velocidad y causar oleadas en su paso, así que prepárate para tener aventuras emocionantes con él', '../imgs/pokemons/garados.jpg', [agua], 244, 'Kai Nakamura', 'Epico', 'Nakamura', 'No');

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

const listaProductos = document.getElementById("productos");

createCatalog()


const carrito = {
    items: [],
    totalPriceItem:[],

    calcularCantidadItem(pokemonId){
        let item = this.totalPriceItem.find(item => item.id == pokemonId)
        return  item.price;
    },

    calcularTotal() {
        let totalPrice = 0;
        this.totalPriceItem.forEach(item => {
            totalPrice = item.price + totalPrice;
        });
        return totalPrice;
    },
    calcularCantidad() {
        return this.items.length;
    },
}

function addItem(pokemon){
    let item = carrito.totalPriceItem.find(item => item.id == pokemon.id)
    item.price += pokemon.price;
    item.amount += 1;

    carrito.totalPriceItem = carrito.totalPriceItem.map(existingItem => 
        existingItem.id === item.id ? item : existingItem
    );
    carrito.calcularCantidadItem(pokemon.id)
    console.log(carrito.totalPriceItem)

}
function deleteItem(pokemon){
    let item = carrito.totalPriceItem.find(item => item.id == pokemon.id)
    item.price -= pokemon.price;
    item.amount -= 1;
    carrito.totalPriceItem = carrito.totalPriceItem.map(existingItem => 
        existingItem.id === item.id ? item : existingItem
    );
    if(item.amount <= 0){
        console.log("aqui")
        eliminarProducto(pokemon.name)
    }else{
        carrito.calcularCantidadItem(pokemon.id)

    }

  

}


function addToCarrito(pokemonId) {
 
    //   1--verificar si esta en el carrito
    //   2--si esta hacer un update
    //   3--si no esta hacer el push directamente

    const pokemon = carrito.items.find(pokemon => pokemon.PokemonModel.id ==  pokemonId)
    console.log(pokemon)

    if(pokemon != null){
        addItem(pokemon.PokemonModel)
    }else{

      let pokemon =  productos.find(pro => pro.PokemonModel.id === pokemonId)

      let item = new Procesamiento(pokemon.PokemonModel.id,1,pokemon.PokemonModel.price)
      
      carrito.totalPriceItem.push(item)
      carrito.items.push(pokemon)


    }


}
function mostrarModal(pokemonModel) {
    // Crear el overlay de fondo
    var finalPrice = null;
    var finalItems =null;
    const overlay = document.createElement("div");
    overlay.className = "overlay position-fixed d-flex align-items-center justify-content-center top-0 ";


    // Crear el contenedor principal del modal
    const modal = document.createElement("div");
    modal.className = "container modals bg-white position-relative container  position-relative d-flex flex-column gap-5 p-5 rounded-5 border";
    modal.style.overflowY = "auto";
    modal.style.maxHeight = "80vh";
    const imagenAndTitles = document.createElement("div");
    imagenAndTitles.className = "container bg-white container d-flex flex-column flex-lg-row  gap-lg-5"

    // Imagen del producto
    const imageContainer = document.createElement("div");
    const img = document.createElement("img");
    img.setAttribute("src", pokemonModel.PokemonModel.image)
    img.setAttribute("alt", "nft artistico del pokemon " + pokemonModel.PokemonModel.name)
    img.className = "img-fluid rounded-5 border";
    imageContainer.appendChild(img);

    // Contenedor de información
    const infoContainer = document.createElement("div");
    infoContainer.className = "d-flex flex-column gap-3 mt-2 mt-lg-5";
    infoContainer.style = "min-width:300px"

    // Título contenedor
    const titleContainer = document.createElement("div");
    const title = document.createElement("h2");
    title.textContent = pokemonModel.PokemonModel.name;
    titleContainer.append(title)

    const container = document.createElement("div"); container.className = "container";
    const h3 = document.createElement("h3"); h3.textContent = "Especificaciones";
    container.appendChild(h3);
    container.appendChild(crearItem("bg-pokeNfts-green", "Artista", pokemonModel.PokemonModel.artist));
    container.appendChild(crearItem("bg-principal-50", "Rareza", pokemonModel.PokemonModel.rarity));
    container.appendChild(crearItem("bg-pokeNfts-green", "Coleccion", pokemonModel.PokemonModel.collection));
    container.appendChild(crearItem("bg-principal-50", "Edicion Limitada", pokemonModel.PokemonModel.limitEdition));
    container.appendChild(crearItem("bg-pokeNfts-green", "Tipo", pokemonModel.PokemonModel));

    const textContainer = document.createElement("div");
    textContainer.className = "container";
    const p = document.createElement("p");
    p.className = "fs-5"
    p.textContent = pokemonModel.PokemonModel.description;
    const h2 = document.createElement("h3");
    h2.textContent = "Descripcion"
    textContainer.append(h2)
    textContainer.append(p)


    // Precio
    const price = document.createElement("p");
    price.className = "fs-4"
    price.textContent = `$${pokemonModel.PokemonModel.price}`;

    // Contenedor de cantidad
    const cantidadContainer = document.createElement("div");
    cantidadContainer.className = "cantidad d-flex gap-2   text-center";
    const minusButton = document.createElement("button");
    minusButton.textContent = "-";
    minusButton.addEventListener("click",(event =>{

        let c = parseInt(quantity.textContent, 10);
        c = c - 1;
        if(c<=0){
            return
        }
        quantity.textContent = c;
        finalItems = c ;
        finalPrice = pokemonModel.PokemonModel.price * c;
        console.log(c);
        price.textContent = `$${pokemonModel.PokemonModel.price * c}`
        console.log(finalPrice, finalItems);



    }))

    minusButton.className = "btn btn-custom";
    const quantity = document.createElement("p");
    quantity.textContent = 1;
    const plusButton = document.createElement("button");
    plusButton.textContent = "+";
    plusButton.className = "btn btn-custom";
    plusButton.className = "btn btn-custom";
    plusButton.addEventListener("click",(event =>{
        let c = parseInt(quantity.textContent, 10);
        c = c + 1;
        finalItems = c ; 
        finalPrice = pokemonModel.PokemonModel.price * c;
        quantity.textContent = c; 
        price.textContent = `$${pokemonModel.PokemonModel.price * c}`
        console.log(finalPrice, finalItems);

     }))
    cantidadContainer.appendChild(minusButton);
    cantidadContainer.appendChild(quantity);
    cantidadContainer.appendChild(plusButton);

    // Botón "Agregar al carrito"
    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Agregar al carrito";
    addToCartButton.className = "btn btn-custom btn-lg";
    addToCartButton.onclick = function () {

        let pokemon = carrito.items.find(pokemon => pokemon.PokemonModel.id ==  pokemonModel.PokemonModel.id)
        if(pokemon != null){
            addItem(pokemon.PokemonModel)
        }else{
          let pokemon =  productos.find(pro => pro.PokemonModel.id == pokemonModel.PokemonModel.id)
          let item = new Procesamiento(pokemon.PokemonModel.id,finalItems,finalPrice)
          
          carrito.totalPriceItem.push(item)
          carrito.items.push(pokemon)
        }
        document.body.removeChild(overlay);
        const slideCarrito = document.querySelector("#carrito-lateral");
        if (slideCarrito) {
            console.log("paso")
            document.body.removeChild(slideCarrito);
        }
        mostrarCarrito()

    }


    // Botón de cierre
    const closeButton = document.createElement("button");
    closeButton.className = "btn-close position-absolute fs-4 text-white";
    closeButton.style.position = "absolute";

    closeButton.onclick = function () {
        document.body.removeChild(overlay);
    };

    // Agregar los elementos al modal
    infoContainer.appendChild(titleContainer);
    infoContainer.appendChild(price);
    infoContainer.appendChild(cantidadContainer);
    infoContainer.appendChild(addToCartButton);
    infoContainer.appendChild(container);
    imagenAndTitles.appendChild(imageContainer)

    imagenAndTitles.append(infoContainer)
    imagenAndTitles.appendChild(closeButton)


    // infoContainer.appendChild(detailLink);
    modal.appendChild(imagenAndTitles);
    modal.appendChild(textContainer);

    modal.appendChild(container);

    // Agregar el modal al overlay
    overlay.appendChild(modal);

    // Agregar el overlay al body
    document.body.appendChild(overlay);
}

function mostrarCarrito() {

    const carritoLateral = document.createElement("div");
    carritoLateral.id = "carrito-lateral";
    carritoLateral.className = "carrito-lateral container ";
    carritoLateral.style = "min-width: 460px"

    const container = document.createElement("div");
    container.className = "d-flex flex-column gap-4"

    const titulo = document.createElement("h2");
    titulo.textContent = "Mi carrito";
    titulo.className = "mt-5"
    carritoLateral.appendChild(titulo);

    const itemsContainer = document.createElement("div");
    itemsContainer.className = "d-flex flex-column gap-3"
    itemsContainer.id = "item";
    carrito.items.forEach((producto) => {
        let item = carrito.totalPriceItem.find(item => item.id == producto.PokemonModel.id)

        const itemContainer = document.createElement("div");
        itemContainer.id = "item-container";
        itemContainer.className = "d-flex gap-5"
        const titleContainer = document.createElement("div");
        const img = document.createElement("img");
        img.src = producto.PokemonModel.image;
        img.alt = `Imagen de ${producto.PokemonModel.name}`;
        img.className = "img-fluid"
        img.style = "width: 90px"
        itemContainer.appendChild(img);

        const detailsContainer = document.createElement("div");
        const tituloProducto = document.createElement("h4");
        tituloProducto.id = producto.PokemonModel.id;
        tituloProducto.textContent = producto.PokemonModel.name;


        const cantidadContainer = document.createElement("div");
        cantidadContainer.className = "cantidad d-flex gap-2";
        const disminuirBtn = document.createElement("button");
        disminuirBtn.className = "btn btn-custom";
        disminuirBtn.textContent = "-";
        disminuirBtn.addEventListener("click",(event =>{
            deleteItem(producto.PokemonModel)
            const carrito = document.querySelector("#carrito-lateral");
            document.body.removeChild(carrito);
            mostrarCarrito()
        }));

        const cantidadText = document.createElement("p");

        cantidadText.textContent = item.amount;

        const aumentarBtn = document.createElement("button");
        aumentarBtn.className = "btn btn-custom";
        aumentarBtn.textContent = "+";
        // aumentarBtn.addEventListener = () => addToCarrito(producto.PokemonModel);

        aumentarBtn.addEventListener("click", (event => {
            addItem(producto.PokemonModel)
            const carrito = document.querySelector("#carrito-lateral");
            document.body.removeChild(carrito);
            mostrarCarrito()
        }))

        cantidadContainer.appendChild(disminuirBtn);
        cantidadContainer.appendChild(cantidadText);
        cantidadContainer.appendChild(aumentarBtn);

        detailsContainer.appendChild(tituloProducto);
        detailsContainer.appendChild(cantidadContainer);
        titleContainer.appendChild(detailsContainer);
        itemContainer.appendChild(titleContainer);

        const priceContainer = document.createElement("div");
        priceContainer.className = "d-flex align-items-center justify-content-between";
        priceContainer.id = "price";
        const priceDetails = document.createElement("div");
        const priceText = document.createElement("span");
        priceText.textContent = `$${carrito.calcularCantidadItem(producto.PokemonModel.id)}`;

        const aEliminar = document.createElement("a");
        aEliminar.href = "#";
        aEliminar.addEventListener("click", (event => {
            let contenedor = event.target.closest("#item-container");
            console.log(contenedor)
            const h4 = contenedor.querySelector("h4");
            console.log(h4)

            eliminarProducto(h4.textContent)
            document.body.removeChild(carritoLateral);
            mostrarCarrito()

        }))
        const eliminarIcon = document.createElement("img");
        eliminarIcon.src = "../imgs/icons/delete.svg";
        eliminarIcon.alt = "Eliminar producto";
        eliminarIcon.style.cursor = "pointer";
        eliminarIcon.style = "width: 40px"

        eliminarIcon.className = "img-fluid"
        priceDetails.className = "d-flex align-items-center justify-content-between";
        aEliminar.append(eliminarIcon)

        priceDetails.appendChild(priceText);
        priceDetails.appendChild(aEliminar);
        priceContainer.appendChild(priceDetails);
        itemContainer.appendChild(priceContainer);

        itemsContainer.appendChild(itemContainer);
    });

    carritoLateral.appendChild(itemsContainer);
    const totalsContainer = document.createElement("div");

    const subtotalContainer = document.createElement("div");
    subtotalContainer.id = "Subtotal";
    subtotalContainer.className = "d-flex align-items-center justify-content-between"
    const subtotalTitle = document.createElement("h3");
    subtotalTitle.textContent = "Subtotal";
    const subtotalAmount = document.createElement("span");
    subtotalAmount.textContent = `$${carrito.calcularTotal()}`;
    subtotalContainer.appendChild(subtotalTitle);
    subtotalContainer.appendChild(subtotalAmount);
    totalsContainer.appendChild(subtotalContainer)
    carritoLateral.appendChild(totalsContainer);

    const totalContainer = document.createElement("div");
    totalContainer.className = "d-flex align-items-center justify-content-between"
    totalContainer.id = "Total";
    const totalTitle = document.createElement("h3");
    totalTitle.textContent = "Total";
    const totalAmount = document.createElement("span");
    totalAmount.textContent = `$${carrito.calcularTotal()}`;

    const subtotalItemsContainer = document.createElement("div");
    subtotalItemsContainer.id = "Subtotal";
    subtotalItemsContainer.className = "d-flex align-items-center justify-content-between"
    const totalItems = document.createElement("h3");
    totalItems.textContent = "Total items";
    const totalItemsAmmount = document.createElement("span");
    totalItemsAmmount.id = "total-item";
    totalItemsAmmount.textContent = carrito.calcularCantidad();
    subtotalItemsContainer.appendChild(totalItems);
    subtotalItemsContainer.appendChild(totalItemsAmmount);
    totalsContainer.appendChild(subtotalItemsContainer)


    totalsContainer.appendChild(subtotalContainer)
    carritoLateral.appendChild(totalsContainer);

    totalContainer.appendChild(totalTitle);
    totalContainer.appendChild(totalAmount);

    totalsContainer.appendChild(totalContainer);
    carritoLateral.appendChild(totalsContainer);

    const buttonsContainer = document.createElement("div");
    buttonsContainer.id = "buttons";
    buttonsContainer.className = "d-flex flex-column align-items-center justify-content-center gap-3"


    const comprarButton = document.createElement("button");
    comprarButton.textContent = "Iniciar compra";
    comprarButton.className = "btn btn-custom btn-lg w-100"
    comprarButton.onclick = () => alert("Iniciando compra...");
    const seguirComprandoLink = document.createElement("a");
    seguirComprandoLink.textContent = "Vaciar carrito";
    seguirComprandoLink.href = "#";
    seguirComprandoLink.addEventListener("click", (event => {
        carrito.items.length = 0
        carrito.totalPriceItem.length = 0
        document.body.removeChild(carritoLateral);
        mostrarCarrito()

    }))


    buttonsContainer.appendChild(comprarButton);
    buttonsContainer.appendChild(seguirComprandoLink);
    carritoLateral.appendChild(buttonsContainer);
    container.append(titulo)
    container.append(itemsContainer)
    container.append(totalsContainer)
    container.append(buttonsContainer)
    carritoLateral.appendChild(container);

    const closeButton = document.createElement("button");
    closeButton.className = "close-btn fs-1";
    closeButton.textContent = "×";
    closeButton.onclick = () => document.body.removeChild(carritoLateral);
    carritoLateral.appendChild(closeButton);


    document.body.appendChild(carritoLateral);
    carritoLateral.classList.add("open");
}
function createCatalog(){
    productos.forEach(pro => {

        const col = document.createElement("li");
        col.className = "col-12 col-md-6 col-lg-4 mb-cards";
        col.setAttribute("id", pro.PokemonModel.id)
    
    
    
        const position = document.createElement("div");
        position.className = "position-relative";
        col.append(position)
    
    
        const imageContainer = document.createElement("div");
        imageContainer.className = "rounded-5 border"
        position.append(imageContainer)
    
    
        const img = document.createElement("img");
        img.setAttribute("src", pro.PokemonModel.image)
        img.className = "img-fluid rounded-5"
        img.setAttribute("alt", "nft artistico del pokemon " + pro.PokemonModel.name)
        imageContainer.append(img)
    
    
        const textContainer = document.createElement("div");
        textContainer.className = "bg-light rounded-5 border position-absolute p-4 shadow info-container"
        position.append(textContainer)
    
    
        const titleContainer = document.createElement("div")
        const titulo = document.createElement("h3");
        titulo.textContent = pro.PokemonModel.name;
        textContainer.append(titleContainer)
        titleContainer.append(titulo)
    
    
    
    
        const typesContainer = document.createElement("div")
        typesContainer.className = "d-flex flex-wrap gap-2"
        titleContainer.append(typesContainer)
    
    
        pro.PokemonModel.pokemonTypes.forEach(type => {
            const categoria = document.createElement("p");
            categoria.className = `border ps-3 pe-3 rounded-3 fw-medium ${type.styleClassName}`;
            categoria.textContent = type.name
            typesContainer.append(categoria)
        })
    
    
    
        const descripcionContainer = document.createElement("div");
        const descripcion = document.createElement("p");
        descripcion.textContent = pro.PokemonModel.description;
        textContainer.append(descripcionContainer)
        descripcionContainer.append(descripcion)
    
    
        const container = document.createElement("div");
        container.className = "container mt-4";
    
        const priveRow = document.createElement("div");
        priveRow.className = "row align-items-center gap-2 gap-md-0";
    
        const priceCol = document.createElement("div");
        priceCol.className = "col-4";
    
        const priceContainer = document.createElement("div");
        priceContainer.className = "d-flex flex-column";
    
        const priceLabel = document.createElement("span");
        priceLabel.className = "fw-medium fs-6 m-0 p-0 text-secondary";
        priceLabel.textContent = "Precio";
    
        const priceValue = document.createElement("span");
        priceValue.className = "fw-medium fs-3";
        priceValue.textContent = `$${pro.PokemonModel.price}`;
    
        priceContainer.appendChild(priceLabel);
        priceContainer.appendChild(priceValue);
        priceCol.appendChild(priceContainer);
    
        const buttonCol = document.createElement("div");
        buttonCol.className = "col-12 col-md-8";
    
        const buttonContainer = document.createElement("div");
        buttonContainer.className = "d-grid gap-2";
    
        const buyButton = document.createElement("button");
        buyButton.className = "btn btn-custom btn-lg";
        buyButton.textContent = "Comprar";
        buyButton.onclick = function () {
            let pokemonId = this.closest("li").getAttribute("id");
            mostrarModal(productos.find(pro => pro.PokemonModel.id === pokemonId));
    
        }
    
        buttonContainer.appendChild(buyButton);
        buttonCol.appendChild(buttonContainer);
    
        priveRow.appendChild(priceCol);
        priveRow.appendChild(buttonCol);
    
        container.appendChild(priveRow);
    
        textContainer.append(container)
    
        listaProductos.appendChild(col);
    
    });
}

function eliminarProducto(pokemonName) {

    let item = carrito.items.find(item => item.PokemonModel.name == pokemonName)
    carrito.totalPriceItem = carrito.totalPriceItem.filter(producto => producto.id !== item.PokemonModel.id);

    carrito.items = carrito.items.filter(producto => producto.PokemonModel.name !== pokemonName);
}


function crearItem(clase, titulo, descripcion) {
    const item = document.createElement("div");
    item.className = `item-1 d-flex gap-0 align-items-center justify-content-center text-center ${clase}`;
    const divTitulo = document.createElement("div");
    divTitulo.className = "border-end border-dark text-center w-50";
    const h4 = document.createElement("h4"); h4.textContent = titulo;
    divTitulo.appendChild(h4);
    const divDescripcion = document.createElement("div");
    divDescripcion.className = "text-center justify-content-center w-50";

    if (descripcion instanceof PokemonModel) {
        descripcion.pokemonTypes.forEach(s => {
            const categoria = document.createElement("p");
            divDescripcion.className = "text-center justify-content-center w-50 d-flex gap-2";
            categoria.className = `text-center mt-2 fs-6 mt-2 fs-lg-4 border ps-lg-4 pe-lg-4 rounded-3 fw-medium ${s.styleClassName}`;
            categoria.textContent = s.name;
            divDescripcion.append(categoria)
            item.appendChild(divTitulo);
            item.appendChild(divDescripcion);
        });
    } else {
        const p = document.createElement("p"); p.className = "text-center mt-2 fs-4";
        p.textContent = descripcion;
        divDescripcion.appendChild(p);
        item.appendChild(divTitulo);
        item.appendChild(divDescripcion);
    }
    return item;
}

document.getElementById("btn-carrito").addEventListener("click", mostrarCarrito);
