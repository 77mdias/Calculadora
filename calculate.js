export default function calculate(ev) {
  //msg\aviso de ERRO caso o usuário digiti algum valor inválido na calculado EX: ()) / 2 * (10)(*())...
  const resultInp = document.getElementById("result");
  resultInp.value = "ERROR";
  resultInp.classList.add("error");

  //a variavel result esta recebendo uma avaliação do javascript de um valor "valor que o usuário quer receber da calculador (do que ele digitou no input...)" OBS: esse EVAL é muito sensível, cuidado ao usar.
  const result = eval(input.value);

  //o campo de resultado ira receber o valor da avaliação/conta
  resultInp.value = result;
  resultInp.classList.remove("error");
}
