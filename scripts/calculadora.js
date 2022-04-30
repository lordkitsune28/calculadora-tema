export { operation }
const pantalla = document.getElementById('screen')
const teclado = document.getElementById('teclas')
let status = false
let firstNumber = "0"
let tipo = "0"

pantalla.textContent = '0'

const operation = () => {
    if (!teclado) return
    teclado.addEventListener('click', e => {
        const teclado = e.target,
            display = teclado.dataset
        
        if (display.number) mostrarPantalla(display.number)

        if (display.math) getDatos(teclado,display.math)

        if (display.operation) getOperacion(display.operation)

        if (display.borrar) borrar(display.borrar)
    })
}

const mostrarPantalla = number => {
    pantalla.textContent === '0' || status === true
        ? pantalla.textContent = number
        : pantalla.textContent += number
        status = false
}

const getDatos = (element, operacion) => {
    status = true
     firstNumber = Number(pantalla.textContent);
     tipo = operacion
    pantalla.textContent = element.textContent
    
}

const getOperacion = operation => {

    const getResult = (firstNumber, tipo) => {
       const secondNumber = Number(pantalla.textContent)
       
        switch (tipo) {
            case 'add':
                pantalla.textContent = firstNumber + secondNumber
                break;
            case 'minus':
                pantalla.textContent = firstNumber - secondNumber
                break;
            case 'multiply':
                pantalla.textContent = firstNumber * secondNumber
                break
            case 'divide':
                pantalla.textContent = firstNumber / secondNumber
                break
                default:
                break;

        } 
    }
    operation === 'reset'
        ? pantalla.textContent = '0'
        : getResult(firstNumber, tipo)
}

const borrar = ()=>{
    const valor = pantalla.textContent.slice(0, -1);
    pantalla.textContent = valor
}