// Comparación y Operador Estricto

const numero1 = 20
const numero2 = "20"

/**
 * ==  (Comparación, pero no es estricta)
 * === (Comparación estricta - Revisa valor y tipo de dato)
 */

if(numero1 === numero2){
    console.log('Sí, son iguales')
}else{
    console.log('No, no son iguales')
}

const autenticado =  true
if(autenticado){
    console.log('Sí esta autenticado')
}