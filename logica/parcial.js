'use strict';
import { PokemonModel } from './PokemonModel.js';
import { PokemonTypeModel } from './PokemonTypeModel.js';

/*
 * APELLIDO, NOMBRE | APELLIDO, NOMBRE
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


const pikachu = new PokemonModel('1', 'pikachu', 'Este Pikachu es curioso y lleno de energía, Le encanta correr y jugar, pero ten cuidado con sus descargas eléctricas cuando se emociona demasiado. Con el compañero adecuado, ¡será el aliado perfecto para cualquier viaje!', '../../imgs/pokemons/pikachu.jpg', [rayo], 500);
const blastoise = new PokemonModel('2', 'Blastoise', 'Este Blastoise está listo para defender a su entrenador con sus potentes cañones de agua. Aunque parece serio, le encanta jugar en el agua y hacer pequeños remolinos. Si eres su compañero, prepárate para muchas aventuras acuáticas.', '../imgs/pokemons/blastoice.jpg', [agua], 600);
const bulbasur = new PokemonModel('3', 'Bulbasur', 'Este Bulbasaur está lleno de energía y siempre listo para ayudar a su entrenador a crecer. Adora tomar el sol y fortalecer su liana, aunque también disfruta de un buen descanso bajo las hojas. Con paciencia y cuidado, verás cómo florece junto a ti.', '../imgs/pokemons/bulbasur.jpg', [planta, veneno], 321);
const charizard = new PokemonModel('4', 'Charizard', 'Este Charizard de espíritu indomable busca un entrenador que pueda igualar su valentía. Su llama arde intensamente, y aunque parece rudo, tiene un lado protector. ¡Solo cuidado con esas alas! A veces le gusta alzar el vuelo sin avisar.', '../imgs/pokemons/charizard.jpg', [fuego, volador], 241);
const gengar = new PokemonModel('5', 'Gengar', 'Gengar es travieso y siempre está buscando nuevas formas de jugarle bromas a su entrenador. Su risa fantasmal llena el aire, y disfruta desvaneciéndose en las sombras. Con él, tendrás diversión y misterio a partes iguales.', '../imgs/pokemons/gengar.jpg', [fantasma, veneno], '331');
const lucario = new PokemonModel('6', 'Lucario', 'Lucario es leal y siempre está en sintonía con las emociones de su entrenador. Su energía aura lo conecta profundamente con quienes le importan, y está dispuesto a luchar junto a ti. Solo necesita a alguien que comparta su sentido de justicia', '../imgs/pokemons/lucario.jpg', [lucha, acero], 212);
const eevee = new PokemonModel('7', 'Eevee', 'Este Eevee es curioso y lleno de energía, siempre listo para explorar y descubrir cosas nuevas. Con su espíritu adaptable, busca un entrenador que lo ayude a crecer y evolucionar. Con amor y cuidado, ¡este Eevee está listo para cualquier aventura!', '../imgs/pokemons/eevee.jpg', [normal], 531);
const lapras = new PokemonModel('8', 'Lapras', 'Lapras es sereno y le encanta navegar tranquilamente sobre el agua. Es muy protector con aquellos que ama y busca un entrenador que valore la paz y la conexión con la naturaleza. Prepárate para un viaje tranquilo y lleno de armonía a su lado.', '../imgs/pokemons/lapras.jpg', [hielo, agua], 134);
const garados = new PokemonModel('9', 'Garados', 'Este es un Gyarados feroz y majestuoso, siempre en busca de un entrenador que pueda canalizar su energía desbordante. Le encanta nadar a gran velocidad y causar oleadas en su paso, así que prepárate para tener aventuras emocionantes con él', '../imgs/pokemons/garados.jpg', [agua], 244);

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

const listaProductos = document.getElementById("productos");


productos.forEach(pro => {
    
    const col = document.createElement("li");
    col.className = "col-12 col-md-6 col-lg-4 mb-cards";
    col.setAttribute("id", pro.PokemonModel.id)

  

    const position = document.createElement("div");
    position.className = "position-relative";
    col.append(position)

 
    const imageContainer = document.createElement("div");
    imageContainer.className ="rounded-5 border"
    position.append(imageContainer)


    const img = document.createElement("img");
    img.setAttribute("src", pro.PokemonModel.image)
    img.className ="img-fluid rounded-5"
    img.setAttribute("alt", "nft artistico del pokemon " + pro.PokemonModel.name)
    imageContainer.append(img)
   

    const textContainer = document.createElement("div");
    textContainer.className="bg-light rounded-5 border position-absolute p-4 shadow info-container"
    position.append(textContainer)
 

    const titleContainer= document.createElement("div")
    const titulo = document.createElement("h3");
    titulo.textContent = pro.PokemonModel.name;  // Accede directamente a pro.PokemonModel.name
    textContainer.append(titleContainer)
    titleContainer.append(titulo)
    



    const typesContainer= document.createElement("div")
    typesContainer.className="d-flex flex-wrap gap-2"
    titleContainer.append(typesContainer)

    //podria tener un div

    // Crear y agregar la categoría
    pro.PokemonModel.pokemonTypes.forEach(type =>{
        const categoria = document.createElement("p");
        categoria.className = `border ps-3 pe-3 rounded-3 fw-medium ${type.styleClassName}`;
        categoria.textContent = type.name
        typesContainer.append(categoria)
    })



    // Crear y agregar la descripción
    const descripcionContainer = document.createElement("div");
    const descripcion = document.createElement("p");
    descripcion.textContent = pro.PokemonModel.description;  // Accede directamente a pro.PokemonModel.description
    textContainer.append(descripcionContainer)
    descripcionContainer.append(descripcion)
   

    const container = document.createElement("div");
    container.className = "container mt-4";

    // Fila con precio y botón
    const priveRow = document.createElement("div");
    priveRow.className = "row align-items-center gap-2 gap-md-0";

    // Columna para el precio
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

    // Añadir elementos de precio
    priceContainer.appendChild(priceLabel);
    priceContainer.appendChild(priceValue);
    priceCol.appendChild(priceContainer);

    // Columna para el botón de compra
    const buttonCol = document.createElement("div");
    buttonCol.className = "col-12 col-md-8";

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "d-grid gap-2";

    const buyButton = document.createElement("button");
    buyButton.className = "btn btn-custom btn-lg";
    buyButton.textContent = "Comprar";
    buyButton.onclick = function () {
        // Acción al hacer clic en "Comprar"
        let pokemonId = this.closest("li").getAttribute("id");
        mostrarModal(productos.find(pro => pro.PokemonModel.id === pokemonId));

    }

    // Añadir el botón al contenedor
    buttonContainer.appendChild(buyButton);
    buttonCol.appendChild(buttonContainer);

    // Agregar columnas a la fila
    priveRow.appendChild(priceCol);
    priveRow.appendChild(buttonCol);

    // Agregar fila al contenedor principal
    container.appendChild(priveRow);

    textContainer.append(container)

    listaProductos.appendChild(col);

});

// Objeto que administra el carrito
const carrito = {
    items: [],
    calcularTotal() {
        let totalPrice = 0;
        this.items.forEach(item => {
            totalPrice = item.PokemonModel.price + totalPrice;

        });
        return totalPrice;
    },
    calcularCantidad() {
        return this.items.length;
    },
}

function actualizarMiniCarrito() {
    const totalItemsSpan = document.querySelector("#mini-carrito #total-item");
    const totalPriceSpan = document.querySelector("#mini-carrito #total-price");

    // Actualiza el contenido de los elementos `<span>` en el HTML
    totalItemsSpan.textContent = carrito.calcularCantidad();
    totalPriceSpan.textContent = carrito.calcularTotal();
}

function addToCarrito(pokemonId) {
    carrito.items.push(productos.find(pro => pro.PokemonModel.id === pokemonId))
    console.log(carrito.items)
    actualizarMiniCarrito()
    console.log(carrito)
}
function mostrarModal(pokemonModel) {
    // Crear el overlay de fondo
    const overlay = document.createElement("div");
    overlay.className = "overlay position-fixed d-flex align-items-center justify-content-center top-0 ";


    // Crear el contenedor principal del modal
    const modal = document.createElement("div");
    modal.className = "container modals bg-white position-relative container d-flex position-relative gap-5";


    // Imagen del producto
    const imageContainer = document.createElement("div");
    const img = document.createElement("img");
    img.setAttribute("src", pokemonModel.PokemonModel.image)
    img.setAttribute("alt", "nft artistico del pokemon " + pokemonModel.PokemonModel.name)
    img.className = "img-fluid";
    imageContainer.appendChild(img);

    // Contenedor de información
    const infoContainer = document.createElement("div");
    infoContainer.className = "d-flex flex-column gap-3 mt-5";
    infoContainer.style = "min-width:300px"

    // Título
    const title = document.createElement("h2");
    title.textContent = pokemonModel.PokemonModel.name;
    // Precio
    const price = document.createElement("p");
    price.textContent = `$${pokemonModel.PokemonModel.price}`;

    // Contenedor de cantidad
    const cantidadContainer = document.createElement("div");
    cantidadContainer.className = "cantidad d-flex gap-2   text-center";
    const minusButton = document.createElement("button");
    minusButton.textContent = "-";
    minusButton.className = "btn btn-custom";
    const quantity = document.createElement("p");
    quantity.textContent = "1";
    const plusButton = document.createElement("button");
    plusButton.textContent = "+";
    plusButton.className = "btn btn-custom";
    cantidadContainer.appendChild(minusButton);
    cantidadContainer.appendChild(quantity);
    cantidadContainer.appendChild(plusButton);

    // Botón "Agregar al carrito"
    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Agregar al carrito";
    addToCartButton.className = "btn btn-custom btn-lg";
    addToCartButton.onclick = function () {
        addToCarrito(pokemonModel.PokemonModel.id)
        document.body.removeChild(overlay);

    }

    // Link de detalle
    const detailLink = document.createElement("a");
    detailLink.href = "#";
    detailLink.className = "text-center";

    detailLink.textContent = "Ver detalle del producto";

    // Botón de cierre
    const closeButton = document.createElement("button");
    closeButton.className = "btn-close position-absolute fs-4 text-white";
    closeButton.style.position = "absolute";

    closeButton.onclick = function () {
        document.body.removeChild(overlay);
    };

    // Agregar los elementos al modal
    infoContainer.appendChild(title);
    infoContainer.appendChild(price);
    infoContainer.appendChild(cantidadContainer);
    infoContainer.appendChild(addToCartButton);
    infoContainer.appendChild(detailLink);
    modal.appendChild(imageContainer);
    modal.appendChild(infoContainer);
    modal.appendChild(closeButton);

    // Agregar el modal al overlay
    overlay.appendChild(modal);

    // Agregar el overlay al body
    document.body.appendChild(overlay);
}




// Función para crear y mostrar el carrito desplegable
function mostrarCarrito() {
    // Comprobar si el carrito ya existe
    const carritoExistente = document.getElementById("carrito-lateral");
    console.log("---------->")
    if (carritoExistente) {
        carritoExistente.classList.toggle("open");
        return;
    }

    // Crear contenedor del carrito
    const carritoLateral = document.createElement("div");
    carritoLateral.id = "carrito-lateral";
    carritoLateral.className = "carrito-lateral";

    // Título
    const titulo = document.createElement("h2");
    titulo.textContent = "Mi carrito";
    carritoLateral.appendChild(titulo);

    // Contenedor de items
    const itemsContainer = document.createElement("div");
    itemsContainer.id = "items";

    carrito.items.forEach((producto) => {
        // Contenedor del producto
        const itemContainer = document.createElement("div");
        itemContainer.id = "item-container";

        // Título y cantidad
        const titleContainer = document.createElement("div");
        titleContainer.id = "title";

        const img = document.createElement("img");
        img.src = producto.PokemonModel.image;
        img.alt = `Imagen de ${producto.PokemonModel.name}`;
        titleContainer.appendChild(img);

        const detailsContainer = document.createElement("div");
        const tituloProducto = document.createElement("h4");
        tituloProducto.textContent = producto.PokemonModel.name;

        const cantidadContainer = document.createElement("div");
        cantidadContainer.className = "cantidad d-flex gap-2";
        const disminuirBtn = document.createElement("button");
        disminuirBtn.className = "btn btn-custom";
        disminuirBtn.textContent = "-";
        disminuirBtn.onclick = () => actualizarCantidad(producto.PokemonModel.id, -1);

        const cantidadText = document.createElement("p");
        cantidadText.textContent = producto.cantidad;

        const aumentarBtn = document.createElement("button");
        aumentarBtn.className = "btn btn-custom";
        aumentarBtn.textContent = "+";
        aumentarBtn.onclick = () => actualizarCantidad(producto.id, 1);

        cantidadContainer.appendChild(disminuirBtn);
        cantidadContainer.appendChild(cantidadText);
        cantidadContainer.appendChild(aumentarBtn);

        detailsContainer.appendChild(tituloProducto);
        detailsContainer.appendChild(cantidadContainer);
        titleContainer.appendChild(detailsContainer);
        itemContainer.appendChild(titleContainer);

        // Precio
        const priceContainer = document.createElement("div");
        priceContainer.id = "price";

        const priceDetails = document.createElement("div");
        const priceText = document.createElement("span");
        priceText.textContent = `$${producto.precio * producto.cantidad}`;
        const eliminarIcon = document.createElement("img");
        eliminarIcon.src = "../imgs/icons/delete-icon.png"; // Reemplaza con tu icono
        eliminarIcon.alt = "Eliminar producto";
        eliminarIcon.style.cursor = "pointer";
        eliminarIcon.onclick = () => eliminarProducto(producto.id);

        priceDetails.appendChild(priceText);
        priceDetails.appendChild(eliminarIcon);
        priceContainer.appendChild(priceDetails);
        itemContainer.appendChild(priceContainer);

        itemsContainer.appendChild(itemContainer);
    });

    carritoLateral.appendChild(itemsContainer);

    // Subtotal
    const subtotalContainer = document.createElement("div");
    subtotalContainer.id = "Subtotal";
    const subtotalTitle = document.createElement("h3");
    subtotalTitle.textContent = "Subtotal";
    const subtotalAmount = document.createElement("span");
    subtotalAmount.textContent = `$${calcularTotalCarrito()}`;
    subtotalContainer.appendChild(subtotalTitle);
    subtotalContainer.appendChild(subtotalAmount);
    carritoLateral.appendChild(subtotalContainer);

    // Total
    const totalContainer = document.createElement("div");
    totalContainer.id = "Total";
    const totalTitle = document.createElement("h3");
    totalTitle.textContent = "Total";
    const totalAmount = document.createElement("span");
    totalAmount.textContent = `$${calcularTotalCarrito()}`;
    totalContainer.appendChild(totalTitle);
    totalContainer.appendChild(totalAmount);
    carritoLateral.appendChild(totalContainer);

    // Botones
    const buttonsContainer = document.createElement("div");
    buttonsContainer.id = "buttons";

    const comprarButton = document.createElement("button");
    comprarButton.textContent = "Iniciar compra";
    comprarButton.onclick = () => alert("Iniciando compra...");
    const seguirComprandoLink = document.createElement("a");
    seguirComprandoLink.textContent = "Seguir comprando";
    seguirComprandoLink.href = "#";

    buttonsContainer.appendChild(comprarButton);
    buttonsContainer.appendChild(seguirComprandoLink);
    carritoLateral.appendChild(buttonsContainer);

    // Botón para cerrar el carrito
    const closeButton = document.createElement("button");
    closeButton.className = "close-btn";
    closeButton.textContent = "×";
    closeButton.onclick = () => carritoLateral.classList.remove("open");
    carritoLateral.appendChild(closeButton);

    // Agregar carrito al body
    document.body.appendChild(carritoLateral);
    carritoLateral.classList.add("open");
}
document.getElementById("btn-carrito").addEventListener("click", mostrarCarrito);


// Función para calcular el total del carrito
function calcularTotalCarrito() {
    // return carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
}

// Función para actualizar la cantidad de un producto
function actualizarCantidad(id, cambio) {
    const producto = carrito.find((item) => item.id === id);
    if (producto) {
        producto.cantidad += cambio;
        if (producto.cantidad <= 0) {
            eliminarProducto(id);
        } else {
            mostrarCarrito();
        }
    }
}

// Función para eliminar un producto del carrito
function eliminarProducto(id) {
    const index = carrito.findIndex((item) => item.id === id);
    if (index !== -1) {
        carrito.splice(index, 1);
        mostrarCarrito();
    }
}





















function abrirModal() {
    // Mostrar el modal
    document.getElementById('modal-container').classList.remove('hidden');

    // Cargar el contenido desde el archivo HTML externo
    fetch('modal.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('modal-body').innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el archivo HTML:', error));
}

function deleteFromCarrito(pokemonId) {
    carrito.items.splice(carrito.items.indexOf(pokemonId), 1)
    actualizarMiniCarrito()
}





function abrirModalProducto(producto) {
    // Crear el contenedor del modal
    const modal = document.createElement("div");
    modal.id = "product-modal";
    modal.className = "modal";

    // Contenido del modal
    const modalContent = document.createElement("div");
    modalContent.className = "modal-content";

    // Botón de cerrar
    const closeButton = document.createElement("button");
    closeButton.textContent = "Cerrar";
    closeButton.onclick = cerrarModal;
    modalContent.appendChild(closeButton);

    // Contenedor principal de la información del producto
    const container = document.createElement("section");
    container.className = "buy-product d-flex flex-column gap-5";

    // Imagen del producto
    const imageContainer = document.createElement("div");
    imageContainer.className = "container";
    const img = document.createElement("img");
    img.setAttribute("src", producto.imagen);
    img.setAttribute("alt", `Imagen de ${producto.nombre}`);
    img.className = "img-fluid";
    imageContainer.appendChild(img);
    container.appendChild(imageContainer);

    // Título y precio del producto
    const infoContainer = document.createElement("div");
    infoContainer.className = "container";
    const title = document.createElement("h2");
    title.textContent = producto.nombre;
    const price = document.createElement("h3");
    price.textContent = `$${producto.precio}`;
    infoContainer.appendChild(title);
    infoContainer.appendChild(price);
    container.appendChild(infoContainer);

    // Cuotas y financiamiento
    const cuotasContainer = document.createElement("div");
    cuotasContainer.className = "container";
    const cuotasText = document.createElement("p");
    cuotasText.innerHTML = `6 cuotas sin interés de <strong>$${(producto.precio / 6).toFixed(2)}</strong>`;
    cuotasContainer.appendChild(cuotasText);
    container.appendChild(cuotasContainer);

    // Botones de acción
    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "container";
    const buyButton = document.createElement("button");
    buyButton.className = "btn btn-custom btn-lg";
    buyButton.textContent = "Comprar";
    const cartButton = document.createElement("button");
    cartButton.className = "btn btn-secondary btn-lg";
    cartButton.textContent = "Agregar al Carrito";
    //cartButton.onclick = agregarAlCarrito();
    buttonsContainer.appendChild(buyButton);
    buttonsContainer.appendChild(cartButton);
    container.appendChild(buttonsContainer);

    // Descripción del producto
    const descriptionContainer = document.createElement("div");
    descriptionContainer.className = "container";
    const descriptionTitle = document.createElement("h3");
    descriptionTitle.textContent = "Descripción";
    const descriptionText = document.createElement("p");
    descriptionText.textContent = producto.descripcion;
    descriptionContainer.appendChild(descriptionTitle);
    descriptionContainer.appendChild(descriptionText);
    container.appendChild(descriptionContainer);

    // Especificaciones del producto
    const specsContainer = document.createElement("div");
    specsContainer.className = "container";

    // Artista
    const artistContainer = document.createElement("div");
    artistContainer.className = "item-1 d-flex align-items-center text-center";
    const artistTitle = document.createElement("h4");
    artistTitle.textContent = "Artista";
    const artistText = document.createElement("p");
    artistText.textContent = producto.artista;
    artistContainer.appendChild(artistTitle);
    artistContainer.appendChild(artistText);
    specsContainer.appendChild(artistContainer);

    // Rareza
    const rarityContainer = document.createElement("div");
    rarityContainer.className = "item-1 d-flex align-items-center text-center";
    const rarityTitle = document.createElement("h4");
    rarityTitle.textContent = "Rareza";
    const rarityText = document.createElement("p");
    rarityText.textContent = producto.rareza;
    rarityContainer.appendChild(rarityTitle);
    rarityContainer.appendChild(rarityText);
    specsContainer.appendChild(rarityContainer);

    // Colección
    const collectionContainer = document.createElement("div");
    collectionContainer.className = "item-1 d-flex align-items-center text-center";
    const collectionTitle = document.createElement("h4");
    collectionTitle.textContent = "Colección";
    const collectionText = document.createElement("p");
    collectionText.textContent = producto.coleccion;
    collectionContainer.appendChild(collectionTitle);
    collectionContainer.appendChild(collectionText);
    specsContainer.appendChild(collectionContainer);

    // Edición Limitada
    const editionContainer = document.createElement("div");
    editionContainer.className = "item-1 d-flex align-items-center text-center";
    const editionTitle = document.createElement("h4");
    editionTitle.textContent = "Edición Limitada";
    const editionText = document.createElement("p");
    editionText.textContent = producto.edicionLimitada ? "Sí" : "No";
    editionContainer.appendChild(editionTitle);
    editionContainer.appendChild(editionText);
    specsContainer.appendChild(editionContainer);

    // Agregar specsContainer al contenedor principal
    container.appendChild(specsContainer);
    // Agregar todos los elementos al modal
    modalContent.appendChild(container);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // Mostrar el modal
    modal.classList.add('modal-open');
}


/*productosxx.forEach(pro => {
    // Crear el elemento `li` para cada producto
    const container = document.createElement("div");
    container.className = "container";
    const row = document.createElement("div");
    row.className = "row";

    const col = document.createElement("div");
    col.className = "col-12 col-md-6 col-lg-4 mb-cards";

    const col = document.createElement("div");


    const item = document.createElement("li");
    item.setAttribute("id", pro.PokemonModel.id)

    const img = document.createElement("img");
    img.setAttribute("src", pro.PokemonModel.image)
    img.setAttribute("alt", "nft artistico del pokemon " + pro.PokemonModel.name)
    item.appendChild(img)
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
    boton.addEventListener("click", function () {
        // Obtener el id del `li` más cercano
        //const pokemonId = this.closest("li").getAttribute("id");
        //addToCarrito(pokemonId)

        abrirModal();
    });
   item.appendChild(boton);

    // Agregar el elemento `li` a la lista de productos
    listaProductos.appendChild(item);
});*/