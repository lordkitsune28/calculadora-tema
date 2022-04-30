//importar
import {seleccion} from "./theme.js"
import {operation} from "./calculadora.js"
//capturar
const select = document.getElementById("temaselec")
const del = document.getElementById("del")
//tema
select.addEventListener('click', () =>{
const tema = Number(document.getElementById("tema").value)
seleccion(tema);
})

//capturar botones
const teclas = document.getElementById("teclas")

//evento de las teclas
operation()
