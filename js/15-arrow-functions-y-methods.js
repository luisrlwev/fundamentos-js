const tecnologias = ['HTML', 'CSS', 'JS', 'REACT', 'NODEJS']

/* const nuevoArray = tecnologias.map( tech => {
    if(tech === 'HTML'){
        return 'GraphQL'
    }else{
        return tech
    }
})
*/

const nuevoArray2 = tecnologias.filter( tech => tech !== 'REACT')

//console.log(nuevoArray)
console.log(nuevoArray2)