import { vanta } from "./export.js"

const contenedor = document.querySelector(".bigCont")
const proyectos = document.querySelector(".proyectos")
const contactos = document.querySelector(".contactos")
const informacion = document.querySelector(".informacion")

document.addEventListener("DOMContentLoaded",vanta(contenedor))

proyectos.addEventListener("click", (event) => {
    window.location = "trabajos.html"
})

contactos.addEventListener("click", (event) => {
    window.location = "contactos.html"
})

informacion.addEventListener("click",(event) => {
    window.location = "informacion.html"
})


