const tecnologias = ['HTML', 'CSS', 'JS', 'REACT', 'NODEJS']
const numeros = [10, 20, 30]

let nuevoArray;

nuevoArray = tecnologias.filter( tech => tech !== 'REACT')

// Comprobar si un elemento existe en el array
// const resultado = tecnologias.includes('GraphQL')

// Some - Devuelve con true o false si al menos un elemento del array cumple la condición
// const resultado = numeros.some( numero => numero > 15)

// Find - Devuelve el primer elemento del array que cumpla la condicion
// const resultado = numeros.find( numero => numero > 5)

// Every - Retorna true o false si todos cumplen la condicion
// const resultado = numeros.every( numero => numero > 9 )

// Reduce - Acumulando en el total
// const resultado = numeros.reduce( (total, numero) => numero + total, 0 )

// Filter - Crea un nuevo arrar con base a una condicion
// const resultado = tecnologias.filter( tech => tech !== 'NODEJS' )
// const resultado = numeros.filter( numero => numero > 15 )

// forEach - Acceder o recorrer cada elemento del array
// tecnologias.forEach( tech => console.log(tech) )
// forEach para extraer el indice del array
// tecnologias.forEach( (tech, index) => console.log(index) )

// map - Acceder a cada elemento del array y crear un nuevo array
const arrayMap = tecnologias.map( tech => tech)

console.log(arrayMap)