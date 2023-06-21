// Unir dos objetos
// Objeto
const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

// Objeto
const cliente = {
    nombre: 'Luis',
    premium: true
}

// const nuevoObjeto = Object.assign(producto, cliente) -> ESTA NO
const nuevoObjeto2 = {
    producto: {...producto},
    cliente: {...cliente}
}

console.log(nuevoObjeto2)
console.log(cliente)
console.log(producto)