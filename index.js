const main = document.querySelector("main");
const input = document.getElementById("input");
const resultInp = document.getElementById("result");
const root = document.querySelector(":root");

import calculate from "./calculate.js";
import {
  charkey,
  clearFull,
  copy,
  KeyPress,
  themeToggle,
} from "./functions.js";

//forEach ou PARA CADA ".charkey" button acionar a função (charKeyBtn)
document.querySelectorAll(".charKey").forEach(charkey);

document.getElementById("clear").addEventListener("click", clearFull);

//ASSIM Q O BOTÃO "=" FOR CLICADO, CHAMARA A FUNÇÃO COM A VARIÁVEL CALCULATE, ou seja chamará a função de calcular!
document.getElementById("equal").addEventListener("click", calculate);

input.addEventListener("keydown", KeyPress);

//Função para alternancia de Tema: Escuro/Claro
document.getElementById("themeSwitcher").addEventListener("click", themeToggle);

//FUNÇÃO PARA COPIAR o resultado!
document
  .getElementById("copyToClipboard") //pegando-\puxando ele do DOM para a função
  .addEventListener("click", copy);
