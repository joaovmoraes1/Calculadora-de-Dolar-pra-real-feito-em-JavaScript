let dolar = 5.1;
let usdInput = document.querySelector("#usd");
let brlInput = document.querySelector("#brl");

usdInput.addEventListener("keyup", () => {
  convert("usd-to-brl");
});

brlInput.addEventListener("keyup", () => {
  convert("brl-to-usd");
});

usdInput.addEventListener("blur", () => {
  usdInput.value = formatCurrency(usdInput.value);
});

brlInput.addEventListener("blur", () => {
  brlInput.value = formatCurrency(brlInput.value);
});

// Definir valor inicial com o ponto decimal
usdInput.value = "1000.00";
convert("usd-to-brl");

// Funções
function formatCurrency(value) {
  let fixedValue = fixaValue(value);
  let options = {
    useGrouping: false,
    minimumFractionDigits: 2,
  };
  let formatter = new Intl.NumberFormat("pt-BR", options);
  return formatter.format(fixedValue);
}

function fixaValue(value) {
  if (value === "") {
    return 0; // Retorna 0 para valores vazios
  }
  let fixedValue = value.replace(",", ".");
  let floatValue = parseFloat(fixedValue);
  if (isNaN(floatValue)) {
    floatValue = 0;
  }
  return floatValue;
}

function convert(type) {
  if (type === "usd-to-brl") {
    let fixedValue = fixaValue(usdInput.value);
    let result = fixedValue * dolar;
    result = result.toFixed(2);
    brlInput.value = formatCurrency(result);
  } else if (type === "brl-to-usd") {
    let fixedValue = fixaValue(brlInput.value);
    let result = fixedValue / dolar;
    result = result.toFixed(2);
    usdInput.value = formatCurrency(result);
  }
}