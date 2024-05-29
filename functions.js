const input = document.getElementById("input");
const root = document.querySelector(":root");
const main = document.querySelector("main");
const resultInp = document.getElementById("result");
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
];

function charkey(charKeyBtn) {
  //para cada botão, Key Button clicada adicionar esse valor ao meu input
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  });
}

//ADICIONANDO FUNÇÃO DE LIMPAR ao botão "C"
function clearFull() {
  //ao acionar esse botão com o click o valor de input será string vazia
  input.value = "";
  input.focus();
}

function KeyPress(ev) {
  //previnindo comportamento padrão da função
  ev.preventDefault();

  //SE A TECLA APERTADA FOR UM VALOR DECLARADO NO ARRAY allowedKeys ACIONAR ESSA TECLA NO VALOR DE INPUT
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
    return;
  }
  //SE A TELCA APERTADA FOR BACKSPACE, APAGAR UM VALOR DA MINHA INPUT
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
  //SE A TECLA APERTADA FOR ENTER, ACIONAR A FUNÇÃO DE CALCULAR
  if (ev.key === "Enter") {
    calculate();
  }
}

function themeToggle() {
  //se em meu elemento main do HTML a propriedade data-theme for igual "dark" ele ira alterar para o branco
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9");
    root.style.setProperty("--border-color", "#aaa");
    root.style.setProperty("--font-color", "#212529");
    root.style.setProperty("--primary-color", "#26834a");
    //e definir como o tema branco
    main.dataset.theme = "light";

    //se não, se for "light" ira mudar o tema para claro
  } else {
    root.style.setProperty("--bg-color", "#212529");
    root.style.setProperty("--border-color", "#666");
    root.style.setProperty("--font-color", "#f1f5f9");
    root.style.setProperty("--primary-color", "#4dff91");
    main.dataset.theme = "dark";
  }
}

function copy(ev) {
  // adicionado o evento de click nele com uma função
  const button = ev.currentTarget; //adicionando o elemento do proprio botão a uma variavel
  //se o texto que estiver no botão for igual a "Copy" quando chamar o evento, ira mudar o texto para "Copied!" e adicionar uma class a ele, e copiar o valor do input de resultado!
  if (button.innerText === "Copy") {
    button.innerText = "Copied!";
    button.classList.add("success");
    navigator.clipboard.writeText(resultInp.value);
  } else {
    button.innerText = "Copy";
    button.classList.remove("success");
  }
}

export { charkey, clearFull, KeyPress, themeToggle, copy };
