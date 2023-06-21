// Objetos - Manipulación

// Objeto
const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

// Reescribir el valor de un objeto
producto.nombre = "Monitor Curvo"

// Agregar un valor a un objeto. Si el valor no existe lo va a añadir
producto.imagen = "imagen.jpg"

// Eliminar un valor de un objeto
delete producto.disponible

// Con Object.freeze ya no se puede modificar un objeto (ni reescribir, ni añadir, ni eliminar propiedades)
// Object.freeze(producto)

// Con Object.seal solo puedes reescribir propiedades (ni añadir, ni eliminar)
// Object.seal(producto)

console.table(producto)

