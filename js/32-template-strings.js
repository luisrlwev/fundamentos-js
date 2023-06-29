// Template Strings

const producto = "Tablet de 12 pulgadas"
const precio = 400
const marca = "Orange"

function texttoFuncion(){
    return "Este texto proviene de una funcion"
}

// Antes
console.log(producto + " $" + precio + " Dolares, Marca: " + marca, texttoFuncion())

// Ahora
console.log(`${producto} $${precio} Dolares, Marca: ${marca}, ${texttoFuncion()}`)