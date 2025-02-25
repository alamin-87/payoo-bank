document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = getInputValueByID("amount-value");
    const pin = getInputValueByID("pin");
    const mainAmount = getTextValueByID("main-amount");
    const accInput = document.getElementById("acc-input").value;
    if (accInput.length == 11) {
      if (amount && pin) {
        if (pin === 1234) {
          const sum = mainAmount + amount;
        //   document.getElementById("main-amount").innerText = sum;
          setInnerText("main-amount",sum);
        } else {
          alert("Enter pin");
        }
      } else {
        alert("Enter your Amount & pin");
      }
    } else {
      alert("Enter your ACC number");
    }
  });
