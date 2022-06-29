const h3 = document.querySelector("h3");
const button = document.querySelector("button");

const textApi = async () => {
  const dados = await fetch("https://api.adviceslip.com/advice");
  const texto = await dados.json();
  const api = await texto.slip.advice;
  h3.innerText = await api;
  h3.classList.toggle("animar");
};
button.addEventListener("click", textApi);
