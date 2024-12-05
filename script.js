let productos = [
    {codigo: "Sal5001", nombre: "Chorizo Antioqueño", descripcion: "Chorizos artesanales, paquete de 5 unidades", precio: 18000},
    {codigo: "Sal5002", nombre: "Jamón de Cerdo", descripcion: "Jamón tipo pierna, 1 kg", precio: 25000},
    {codigo: "Sal5003", nombre: "Salchicha Ranchera", descripcion: "Salchichas ahumadas, paquete de 10 unidades", precio: 15000},
    {codigo: "Sal5004", nombre: "Mortadela Especial", descripcion: "Mortadela tipo gourmet, 500 g", precio: 8000},
    {codigo: "Sal5005", nombre: "Queso Mozzarella", descripcion: "Queso fresco rallado, 500 g", precio: 13500},
    {codigo: "Sal5006", nombre: "Costilla Ahumada", descripcion: "Costilla de cerdo ahumada, 1 kg", precio: 27000},
    {codigo: "Sal5007", nombre: "Tocineta Ahumada", descripcion: "Tocineta empacada al vacío, 250 g", precio: 10500},
    {codigo: "Sal5008", nombre: "Salami Italiano", descripcion: "Salami tipo italiano en rodajas, 300 g", precio: 12000},
    {codigo: "Sal5009", nombre: "Queso Campesino", descripcion: "Queso blanco fresco, 1 kg", precio: 22000},
    {codigo: "Sal5010", nombre: "Butifarra Barranquillera", descripcion: "Butifarras tradicionales, paquete de 8 unidades", precio: 15000},
    {codigo: "Sal5011", nombre: "Longaniza Picante", descripcion: "Longaniza artesanal con toque de picante, 1 kg", precio: 19000},
];

let carrito = []; // Array para almacenar los productos en el carrito

function cargar() {
    const criterio = document.getElementById('criterio').value.toLowerCase().trim();
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    const filtrados = productos.filter(p => 
        p.nombre.toLowerCase().includes(criterio) || 
        p.codigo.toLowerCase().includes(criterio)
    );
    if (filtrados.length === 0) {
        resultado.innerHTML = '<p>No se encontraron productos que coincidan con el criterio de búsqueda.</p>';
    } else {
        filtrados.forEach(p => {
            resultado.innerHTML += `
                <div class="producto">
                    <h3>${p.nombre}</h3>
                    <p><strong>Descripción:</strong> ${p.descripcion}</p>
                    <p><strong>Precio:</strong> $${p.precio}</p>
                    <button onclick="agregarAlCarrito('${p.codigo}')">Agregar al carrito</button>
                </div>
            `;
        });
    }
}

function limpiar() {
    document.getElementById('criterio').value = '';
    cargar();
}

function agregarAlCarrito(codigo) {
    const producto = productos.find(p => p.codigo === codigo);
    if (producto) {
        carrito.push(producto);
        actualizarCarrito();
        alert(`¡${producto.nombre} ha sido agregado al carrito!`);
    }
}

function eliminarDelCarrito(codigo) {
    const producto = carrito.find(p => p.codigo === codigo);
    carrito = carrito.filter(p => p.codigo !== codigo);
    actualizarCarrito();
    alert(`¡${producto.nombre} ha sido eliminado del carrito!`);
}

function actualizarCarrito() {
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = '<h2>Carrito de Compras</h2>';
    if (carrito.length === 0) {
        carritoDiv.innerHTML += '<p>El carrito está vacío.</p>';
    } else {
        carrito.forEach(p => {
            carritoDiv.innerHTML += `
                <div class="producto">
                    <h3>${p.nombre}</h3>
                    <p><strong>Precio:</strong> $${p.precio}</p>
                    <button onclick="eliminarDelCarrito('${p.codigo}')">Eliminar</button>
                </div>
            `;
        });
    }
}

window.onload = cargar;
