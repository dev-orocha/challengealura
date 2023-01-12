let input = document.querySelector("#box-1");
let resultado = document.querySelector("#box-2");

function criptografar() {
  let i = input.value.toLowerCase();

  let tratado = i
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

  return (resultado.innerHTML = tratado);
}

function descriptografar() {
  let i = input.value.toLowerCase();

  let tratado = i
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

  return (resultado.innerHTML = tratado);
}

function copy() {
  navigator.clipboard.writeText(resultado.innerHTML);
  alert("Texto copiado com sucesso!");
}
