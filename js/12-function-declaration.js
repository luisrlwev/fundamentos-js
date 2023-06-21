// Funciones - Function Declaration

/*function sumar(numero = 0, numero2 = 0) {
    console.log( numero + numero2)
}

sumar(10, 20)
sumar(2, 3)
sumar(100)
sumar() */

function sumar(numero = 0, numero2 = 0) {
    //Retornar un array
    //return [ numero + numero2, 'Hola mundo']

    // Retornar un objeto
    return {
        resultado: numero + numero2,
        mensaje: 'Hola mundo'
    }
}

// Destructuring del array
//const [resultado, holaMundo] = sumar(20, 30)

// Destructuring del objeto
const {resultado, mensaje} = sumar(20, 30)

console.log(resultado)
console.log(mensaje)