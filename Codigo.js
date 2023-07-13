function Input() {
    let input = document.createElement('input')
    input.type = 'text'
    input.name = 'input[]'
    input.placeholder = 'Ingrese sus datos'

    let eliminar = document.createElement('button')
    eliminar.type = 'button'
    eliminar.innerHTML = 'eliminar'
    eliminar.onclick = function() {
        eliminarInput(input)
    }
}

