// Objetos

//const nombre = "Tablet"
//const precio = 300
//const disponible = true

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

console.log(producto)
console.table(producto)

console.log(producto.nombre)
console.log(producto.precio)
console.log(producto.disponible)

// Destructuring: Sacar de una estructura en este caso del objeto
const { nombre, precio, disponible } = producto
console.log(nombre)
console.log(precio)
console.log(disponible)

// Object Literal Enhacement
const autenticado = true
const usuario = "Luis"

const nuevoObjeto = {
    autenticado: autenticado,
    usuario: usuario
}

console.table(nuevoObjeto)