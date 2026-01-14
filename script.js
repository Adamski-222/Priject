document.getElementById("converterForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const amount = parseFloat(document.getElementById("amount").value);
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;
  const resultDiv = document.getElementById("result");

  // Фиксированные курсы валют (примерные)
  const rates = {
    USD: 1,
    EUR: 0.85,
    RUB: 75,
    GBP: 0.73,
  };

  // Конвертируем сумму
  const fromRate = rates[fromCurrency];
  const toRate = rates[toCurrency];
  const convertedAmount = (amount * toRate) / fromRate;

  // Выводим результат
  resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
});
