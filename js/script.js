class producto{
    constructor(id, estilo, precio, volumen, stock){
        this.id = id;
        this.estilo = estilo;
        this.precio = precio;
        this.volumen = volumen;
        this.stock = stock;
    }
}

const productos = [
    new producto(1, 'Clásico', 750, 750, 60),
    new producto(2, 'Black', 750, 750, 30),
    new producto(3, 'Pyment', 750, 750, 30),
    new producto(4, 'Brùnt', 750, 750, 50),
    new producto(5, 'Bittur', 750, 750, 0),
    new producto(6, 'Idunn', 350, 200, 25)
]

function mostrarStock(array) {
    let lista = '';
    array.forEach(element => {
        lista += 'Estilo: ' + element.estilo + ' - Stock: ' + element.stock + '\n';
    });
    return lista;
}

let userName = prompt('Ingresá tu nombre!');
let userAge = parseInt(prompt('Hola ' + userName + ' ahora ingresá tu edad!'));

while (userAge < 18 || userAge == null || /\D/.test(userAge) || userAge == ""){
    alert('Para poder comprar nuestros productos tenés que ser mayor de 18 años.');
    userAge = parseInt(prompt(userName + ' volvé a ingresar tu edad.'));
}

let menu = '';
menu += '¡Bienvenido a la Tienda Hidromielera!\n';
menu += '1 - Selecciona un producto\n';
menu += '2 - Eliminar un producto\n'
menu += '3 - Mostrar mi carrito\n';
menu += '4 - Ver stock de botellas\n'
menu += '5 - Fijate si está el estilo que querés!\n'
menu += '0 - Finalizar compra\n';

const carrito = [];

const tienda = () => {
    while (true){
        let value = parseInt(prompt(menu));
        switch (value) {
            case 1:
                agregarProducto();
                break;
            case 2:
                eliminarProducto();
                break;
            case 3:
                mostrarCarrito();
                break;
            case 4:
                alert(mostrarStock(productos));
                break;
            case 5:
                buscarEstilo();
                break;
            case 0:
                alert('Finalizando su compra.');
                break;
            default:
                alert('Por favor, ingresar una opción válida.');
                break;
        }
        if (value == 0){
            totalCompra();
            alert('Gracias '+userName+' por la compra!\nHasta pronto!');
            break;
        }
    }
}

const agregarProducto = () =>{
    let lista = 'Seleccioná el estilo que quieras: \n';
    for (const producto of productos){
        lista+= producto.id + '- ' + producto.estilo + '\n';
    }
    let seleccion = parseInt(prompt(lista));
    while (seleccion == null || /\D/.test(seleccion) || seleccion == "" || seleccion > 6){
        alert(userName+' por favor, ingresá una opción válida.');
        seleccion = parseInt(prompt(lista));
    }
    carrito.push(productos[seleccion - 1]);
    alert("Producto agregado con exito!");
    console.log(carrito);
}

const eliminarProducto = () =>{
    let lista = '¿Qué porducto deseas eliminar?: \n';
    let index = 1;
    for (const producto of carrito){
        lista += index++ + '- ' + producto.estilo + '\n';
    }
    let seleccion = parseInt(prompt(lista));
    while (seleccion == null || /\D/.test(seleccion) || seleccion == ""){
        alert(userName+', por favor, ingresá una opción válida.');
        seleccion = parseInt(prompt(lista));
    }
    carrito.splice(seleccion - 1 , 1);
    alert("Producto elminado con exito.");
}

const mostrarCarrito = () =>{
    let lista = 'Tu carrito hasta ahora: \n';
    let index = 1;
    for (const producto of carrito){
        lista += index++ + '- ' + producto.estilo + '\n';
    }
    alert(lista);
}

const buscarEstilo = () =>{
    let seleccion = prompt('Escribí el nombre del estilo que querés:');
    const filtrado = productos.filter((producto) => producto.estilo.toLowerCase().includes(seleccion.toLowerCase()));
    if (filtrado.length > 0) {
    const imprimible = filtrado.map((producto) =>producto.estilo);
    alert("Estos son los estilos con los que contamos que coinciden parcial o totalmente con tu búsqueda:\n- " + imprimible.join('\n- '));
    } else {
    alert('No contamos con esos estilos en en este momento.');
    }
}

const totalCompra = () =>{
    let total = '';
    let compra = 0;
    for (const producto of carrito){
        total = 'El total a abonar es de: $'+(compra+= producto.precio);
    }
    alert(total);
}

tienda();