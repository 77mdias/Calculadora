const main = document.querySelector("main")
const input = document.getElementById("input")
const resultInp = document.getElementById("result")
const root = document.querySelector(":root")
console.log(input)
console.log(main)

//declarando as teclas possiveis da calculadora...
const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
]
//forEach ou PARA CADA ".charkey" button acionar a função (charKeyBtn)
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  //para cada botão, Key Button clicada adicionar esse valor ao meu input
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value
    input.value += value
  })
})

//ADICIONANDO FUNÇÃO DE LIMPAR ao botão "C"
document.getElementById("clear").addEventListener("click", function () {
  //ao acionar esse botão com o click o valor de input será string vazia
  input.value = ""
  input.focus()
})

//ASSIM Q O BOTÃO "=" FOR CLICADO, CHAMARA A FUNÇÃO COM A VARIÁVEL CALCULATE, ou seja chamará a função de calcular!
document.getElementById("equal").addEventListener("click", calculate)

input.addEventListener("keydown", function (ev) {
  //previnindo comportamento padrão da função
  ev.preventDefault()

  //SE A TECLA APERTADA FOR UM VALOR DECLARADO NO ARRAY allowedKeys ADIONAR ESSA TECLA NO VALOR DE INPUT
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key
    return
  }
  //SE A TELCA APERTADA FOR BACKSPACE, APAGAR UM VALOR DA MINHA INPUT
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1)
  }
  //SE A TECLA APERTADA FOR ENTER, ACIONAR A FUNÇÃO DE CALCULAR
  if (ev.key === "Enter") {
    calculate()
  }
})

//FUNÇÃO DE CALCULAR
function calculate(ev) {
  //msg\aviso de ERRO caso o usuário digiti algum valor inválido na calculado EX: ()) / 2 * (10)(*())...
  resultInp.value = "ERROR"
  resultInp.classList.add("error")

  //a variavel result esta recebendo uma avaliação do javascript de um valor "valor que o usuário quer receber da calculador (do que ele digitou no input...)" OBS: esse EVAL é muito sensível, cuidado ao usar.
  const result = eval(input.value)

  //o campo de resultado ira receber o valor da avaliação/conta
  resultInp.value = result
  resultInp.classList.remove("error")
}

//Função para alternancia de Tema: Escuro/Claro
document.getElementById("themeSwitcher").addEventListener("click", function () {
  //se em meu elemento main do HTML a propriedade data-theme for igual "dark" ele ira alterar para o branco
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9")
    root.style.setProperty("--border-color", "#aaa")
    root.style.setProperty("--font-color", "#212529")
    root.style.setProperty("--primary-color", "#26834a")
    //e definir como o tema branco
    main.dataset.theme = "light"

    //se não, se for "light" ira mudar o tema para claro
  } else {
    root.style.setProperty("--bg-color", "#212529")
    root.style.setProperty("--border-color", "#666")
    root.style.setProperty("--font-color", "#f1f5f9")
    root.style.setProperty("--primary-color", "#4dff91")
    main.dataset.theme = "dark"
  }
})

//FUNÇÃO PARA COPIAR o resultado!
document
  .getElementById("copyToClipboard") //pegando-\puxando ele do DOM para a função
  .addEventListener("click", function (ev) {
    // adicionado o evento de click nele com uma função
    const button = ev.currentTarget //adicionando o elemento do proprio botão a uma variavel
    //se o texto que estiver no botão for igual a "Copy" quando chamar o evento, ira mudar o texto para "Copied!" e adicionar uma class a ele, e copiar o valor do input de resultado!
    if (button.innerText === "Copy") {
      button.innerText = "Copied!"
      button.classList.add("success")
      navigator.clipboard.writeText(resultInp.value)
    } else {
      button.innerText = "Copy"
      button.classList.remove("success")
    }
  })
