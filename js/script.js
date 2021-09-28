/* eslint-disable */

function mostrarDados() {
  const botao = document.querySelector(".botao-calcular");
  const alerta = document.querySelector(".alerta");
  const alertaCampo = document.querySelector(".alerta span");

  const campoNome = document.querySelector("#campoNome");
  const valorNome = document.querySelector("#nome");

  const campoIdade = document.querySelector("#campoIdade");
  const valorIdade = document.querySelector("#idade");

  const campoPeso = document.querySelector("#campoPeso");
  const valorPeso = document.querySelector("#peso");

  const campoAltura = document.querySelector("#campoAltura");
  const valorAltura = document.querySelector("#altura");

  const valorIMC = document.querySelector("#imc");
  const detalhesIMC = document.querySelector(".info-detalhes");

  const info = document.querySelectorAll(".info-pessoa");
  const arrayInfo = Array.from(info);

  campoAltura.addEventListener("change", () => {
    const regexAltura = campoAltura.value;
    const novaAltura = regexAltura.replace(/(\d{1})(\d{2})/g, "$1.$2");
    campoAltura.value = novaAltura;
  });

  botao.addEventListener("click", (event) => {
    event.preventDefault();

    if (campoNome.value === "" || campoNome.value.length < 3) {
      alerta.style.display = "block";
      alertaCampo.innerHTML = "nome";
      setTimeout(() => {
        alerta.style.display = "none";
      }, 2500);
    } else if (
      campoIdade.value === "" ||
      campoIdade.value.length > 3 ||
      campoIdade.value.includes("-")
    ) {
      alerta.style.display = "block";
      alertaCampo.innerHTML = "idade";
      setTimeout(() => {
        alerta.style.display = "none";
      }, 2500);
    } else if (campoPeso.value === "" || campoPeso.value.length > 5) {
      alerta.style.display = "block";
      alertaCampo.innerHTML = "peso";
      setTimeout(() => {
        alerta.style.display = "none";
      }, 2500);
    } else if (
      campoAltura.value === "" ||
      campoAltura.value.length < 3 ||
      campoAltura.value.length > 4
    ) {
      alerta.style.display = "block";
      alertaCampo.innerHTML = "altura";
      setTimeout(() => {
        alerta.style.display = "none";
      }, 2500);
    } else {
      arrayInfo.forEach((item) => {
        item.classList.add("ativo");
      });

      valorNome.innerHTML = campoNome.value;
      valorIdade.innerHTML = campoIdade.value;
      valorPeso.innerHTML = campoPeso.value;
      valorAltura.innerHTML = campoAltura.value;
      valorIMC.innerHTML = (
        valorPeso.innerHTML /
        (valorAltura.innerHTML * valorAltura.innerHTML)
      ).toFixed(2);

      if (valorIMC.innerHTML < 18.5) {
        detalhesIMC.innerHTML = `Tome cuidado, seu IMC é de ${valorIMC.innerHTML} e você está abaixo do peso ideal.`;
      } else if (valorIMC.innerHTML > 18.5 && valorIMC.innerHTML < 24.9) {
        detalhesIMC.innerHTML = `Parabéns, seu IMC é de ${valorIMC.innerHTML} e você está dentro do peso adequado.`;
      } else if (valorIMC.innerHTML > 25 && valorIMC.innerHTML < 29.9) {
        detalhesIMC.innerHTML = `Tenha atenção, seu IMC é de ${valorIMC.innerHTML} e você está na faixa de sobrepeso.`;
      } else if (valorIMC.innerHTML > 30 && valorIMC.innerHTML < 34.9) {
        detalhesIMC.innerHTML = `Seu IMC é de ${valorIMC.innerHTML} e você está no grau 1 de obesidade, se exercita mais e coma de forma mais saudável.`;
      } else if (valorIMC.innerHTML > 35 && valorIMC.innerHTML < 39.9) {
        detalhesIMC.innerHTML = `Seu IMC é de ${valorIMC.innerHTML} e você está no grau 2 de obesidade, se exercita mais e coma de forma mais saudável.`;
      } else if (valorIMC.innerHTML > 40) {
        detalhesIMC.innerHTML = `Procure ajuda, seu IMC é de ${valorIMC.innerHTML} e você está no grau de obesidade 3.`;
      }
    }
  });
}
mostrarDados();
