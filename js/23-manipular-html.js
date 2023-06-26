// Manipular elementos HTML con JS

const heading = document.querySelector('.heading')
heading.textContent = 'Un Nuevo Heading'
console.log(heading.textContent)

const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'Un valor por default'
console.log(inputNombre)

const enlaces = document.querySelectorAll('.navegacion a')
enlaces.forEach( enlace => enlace.textContent = 'Nuevo Enlace' )