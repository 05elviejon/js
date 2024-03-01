//productos
const productos = [
  //zapatos
  {
    id: "converse",
    titulo: "convers",
    imagen: "zapatos/converse.jpg",
    categoria: {
      nombre: "tenis",
      id: "tenis",
    },
    precio: $1100,
  },
  {
    id: "nike",
    titulo: "nike",
    imagen: "zapatos/nike.jpg",
    categoria: {
      nombre: "tenis",
      id: "tenis",
    },
    precio: $1200,
  },
  {
    id: "converse verdes",
    titulo: "converse verdes",
    imagen: "zapatos/nike.jpg",
    categoria: {
      nombre: "tenis",
      id: "tenis",
    },
    precio: $1300,
  },
  {
    id: "nike.2",
    titulo: "nike mujer",
    imagen: "zapatos/nike2.jpg",
    categoria: {
      nombre: "tenis",
      id: "tenis",
    },
    precio: $1400,
  },
  {
    id: "jeans.1",
    titulo: "moderno",
    imagen: "zapatos/jeans1.png",
    categoria: {
      nombre: "jeans.1",
      id: "jeans",
    },
    precio: $1200,
  },
  {
    id: "jeans.2",
    titulo: "juvenil",
    imagen: "zapatos/jeans2.jpg",
    categoria: {
      nombre: "jeans.2",
      id: "jeans",
    },
    precio: $1300,
  },
  {
    id: "jeans.3",
    titulo: "casual",
    imagen: "zapatos/jeans3.jpg",
    categoria: {
      nombre: "jeans.3",
      id: "jeans",
    },
    precio: $1400,
  },
  {
    id: "jeans.4",
    titulo: "ofice juvenil",
    imagen: "zapatos/jeans4.jpg",
    categoria: {
      nombre: "jeans.4",
      id: "jeans",
    },
    precio: $2000,
  },
  {
    id: "muebles.4",
    titulo: "lampara",
    imagen: "zapatos/muebles4.jpg",
    categoria: {
      nombre: "mueble.4",
      id: "mueble",
    },
    precio: $1200,
  },
  {
    id: "mueble.3",
    titulo: "sillon",
    imagen: "zapatos/mueble3.jpg",
    categoria: {
      nombre: "mueble.3",
      id: "mueble",
    },
    precio: $1400,
  },
  {
    id: "mueble.2",
    titulo: "sala pop",
    imagen: "zapatos/mueble2.jpg",
    categoria: {
      nombre: "mueble.2",
      id: "mueble",
    },
    precio: $2200,
  },
  {
    id: "mueble.1",
    titulo: "sillon doble",
    imagen: "zapatos/mueble1.jpg",
    categoria: {
      nombre: "mueble.1",
      id: "mueble",
    },
    precio: $1500,
  },
];
const contenedorproductos = document.querySelector("#contenedor-productos");
function cargarproductos() {
  productos.forEach((producto) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
       <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}" >
       <div class="producto-detalles">
         <h3 class="producto-titulo">${producto.titulo}</h3>
         <p class="producto-precio">${producto.precio} </p>
         <button class="producto-agregar" id="${producto.id}">Agregar</button>
       </div> 
        `;
    contenedorproductos.append(div);
  });
}

cargarproductos();
