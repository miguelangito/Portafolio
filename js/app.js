import { vanta } from "./export.js"

const contenedor = document.querySelector(".bigCont")
const proyectos = document.querySelector(".proyectos")


document.addEventListener("DOMContentLoaded",vanta(contenedor))

document.addEventListener("click", (event) => {
    window.location = "trabajos.html"
})



