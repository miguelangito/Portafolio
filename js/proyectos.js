import { vanta } from "./export.js";

const contenedor = document.querySelector(".bigCont");
const spaceX = document.querySelector("#spaceX");
const hogwarts = document.querySelector("#hogwarts");
const veterinaria = document.querySelector("#veterinaria");
const mavam = document.querySelector("#MAVAM");
const petCare = document.querySelector("#petCare");
const crudUsuarios = document.querySelector("#crudUsuarios");
const rutasPaisas = document.querySelector("#rutasPaisas");
const biblioteca = document.querySelector("#biblioteca");
const riwiEcologico = document.querySelector("#riwiEcologico");

document.addEventListener("DOMContentLoaded", vanta(contenedor));

spaceX.addEventListener("click", (event) => {
  window.location = "https://spacex-steel-seven.vercel.app/";
});

hogwarts.addEventListener("click", (event) => {
  window.location = "https://hogwarts-nine.vercel.app/";
});

veterinaria.addEventListener("click", (event) => {
  window.location = "https://veterinaria-ochre.vercel.app";
});

mavam.addEventListener("click", (event) => {
  window.location = "https://mavam-lovat.vercel.app";
});

petCare.addEventListener("click", (event) => {
  window.location = "https://spacex-steel-seven.vercel.app/";
});

crudUsuarios.addEventListener("click", (event) => {
  window.location = "https://crud-basico-usuarios.vercel.app";
});

rutasPaisas.addEventListener("click", (event) => {
  window.location = "https://spacex-steel-seven.vercel.app/";
});

biblioteca.addEventListener("click", (event) => {
  window.location = "https://login-con-guardian.vercel.app";
});

riwiEcologico.addEventListener("click", (event) => {
  window.location = "https://riwi-ecologico-roan.vercel.app";
});
