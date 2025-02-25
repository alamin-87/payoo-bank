document
  .getElementById("cashOut-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amountValue = document.getElementById("cashout-amount").value;
    const convertAmount = parseFloat(amountValue);
    const pin = document.getElementById("cashOut-pin").value;
    const convertPin = parseInt(pin);
    const mainAmount = document.getElementById("main-amount").innerText;
    const convertMainAmount = parseFloat(mainAmount);
    if (amountValue && pin) {
      if (convertPin === 1234) {
        const sum = convertMainAmount - convertAmount;
        document.getElementById("main-amount").innerText = sum;
      }
      else{
        alert('Enter pin')
      }
    } else {
      alert("Enter your pin");
    }
  });
