// Operaciones en los arreglos

const tecnologias = ['HTML', 'CSS', 'JS', 'REACT', 'NODEJS']

// Añadir elemntos al array
// tecnologias.push('GrapQL') // Añade elementos al final del array
// tecnologias.unshift('GrapQL') // Añade elementos al inicio del array

// Añadir elementos al arrar sin modificar el objeto original
// const nuevoArreglo = [...tecnologias, 'GraphQL'] // Añadir de forma correcta al inicio
// const nuevoArreglo = ['GraphQL', ...tecnologias] // Añadir de forma correcta al final

// Eliminar elementos del array
// tecnologias.pop() // Elimina del final
// tecnologias.shift() // Elimina del inicio
// tecnologias.splice(2, 2) // Elimina elementos a partir de la posicion en especifica y cuantos va a eliminar

// Eliminar elementos de un objeto con una sola funcion
/* const nuevoArray = tecnologias.filter( function(tech) {
    return tech !== 'HTML'
})
*/

// Reemplazar elementos del array modificando el array original
// tecnologias[0] = 'GraphQL'

// Reemplazar elementos del array SIN modificar el array original
const nuevoArray = tecnologias.map( function(tech) {
    if(tech === 'HTML'){
        return 'GraphQL'
    }else{
        return tech
    }
})

console.table(tecnologias)
// console.table(nuevoArreglo)
// console.table(nuevoArray)
console.table(nuevoArray)