const amountElement = document.querySelector(".js-amount");
const formElement = document.querySelector(".js-form");
const currencyElement = document.querySelector(".js-currency");
const resultElement = document.querySelector(".js-result");

console.log(amountElement.value);

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Formularz został wysłany");

  const amount = amountElement.value;
  const eur = amount * 0.2312;
  const usd = amount * 0.2474;
  const aud = amount * 0.3759;
  const gbp = amount * 0.1967;

  switch (currencyElement.value) {
    case "eur":
      resultElement.innerText = `${eur.toFixed(2)} €`;
      break;
    case "usd":
      resultElement.innerText = `${usd.toFixed(2)} $`;
      break;
    case "aud":
      resultElement.innerText = `${aud.toFixed(2)} A$`;
      break;
    case "gbp":
      resultElement.innerText = `${gbp.toFixed(2)} £`;
      break;
  }
});
