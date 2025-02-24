document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amountValue = document.getElementById("amount-value").value;
    const convertAmount = parseFloat(amountValue);
    const pin = document.getElementById("pin").value;
    const convertPin = parseInt(pin);
    const mainAmount = document.getElementById("main-amount").innerText;
    const convertMainAmount = parseFloat(mainAmount);
    if (convertPin === 1234) {
      const sum = convertMainAmount + convertAmount;
      document.getElementById("main-amount").innerText = sum;
    }
    else{
        alert('Enter your pin')
    }
  });
