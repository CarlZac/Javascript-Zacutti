let userName = prompt('Ingresá tu nombre!');
let userAge = parseInt(prompt('Hola ' + userName + ' ahora ingresá tu edad!'));

while (userAge < 18 || userAge == null || /\D/.test(userAge) || userAge == ""){
    alert('Para poder comprar nuestros productos tenés que ser mayor de 18 años.');
    userAge = parseInt(prompt(userName + ' volvé a ingresar tu edad.'));
}

const productos = [
    {
        id: 1,
        estilo: 'Clásico',
        precio: 750,
        volumen: 750
    },
    {
        id: 2,
        estilo: 'Black',
        precio: 750,
        volumen: 750
    },
    {
        id: 3,
        estilo: 'Pyment',
        precio: 750,
        volumen: 750
    },
    {
        id: 4,
        estilo: 'Brùnt',
        precio: 750,
        volumen: 750
    },
    {
        id: 5,
        estilo: 'Bittur',
        precio: 750,
        volumen: 750
    },
    {
        id: 6,
        estilo: 'Idunn',
        precio: 350,
        volumen: 200
    }
];

let menu = '';
menu += '¡Bienvenido a la Tienda Hidromielera!\n';
menu += '1 - Selecciona un producto\n';
menu += '2 - Eliminar un producto\n'
menu += '3 - Mostrar mi carrito\n';
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

const totalCompra = () =>{
    let total = '';
    let compra = 0;
    for (const producto of carrito){
        total = 'El total a abonar es de: $'+(compra+= producto.precio);
    }
    alert(total);
}

tienda();