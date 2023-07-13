function Input() {
    let input = document.createElement('input');
    input.type = 'text';
    input.name = 'input[]';
    input.placeholder = 'Ingrese sus datos';

    let eliminar = document.createElement('button');
    eliminar.type = 'button';
    eliminar.innerHTML = 'eliminar';
    eliminar.onclick = function() {
        eliminarInput(input);
    };

    let container = document.getElementById("inputsContainer");
    container.appendChild(input);
    container.appendChild(eliminar);
    container.appendChild(document.createElement("br"));
}

function eliminarInput(input) {
    let container = document.getElementById('inputsContainer');
    container.removeChild(input.previousSibling);
    container.removeChild(input.nextSibling);
    container.removeChild(input);
}

document.getElementById('Formulario').addEventListener('submit', function(event) {
    let inputs = document.getElementsByName('input[]');
    let validacion = true;

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === '') {
            inputs[i].classList.add('error');
            validacion = false;
        }
    }
    
    if (!validacion) {
        event.preventDefault();
        alert('Por favor, llenar todos los inputs.');
    }
});
