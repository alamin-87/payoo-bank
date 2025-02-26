document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = getInputValueByID("amount-value");
    const pin = getInputValueByID("pin");
    const mainAmount = getTextValueByID("main-amount");
    const accInput = document.getElementById("acc-input").value;
    const selectBank = document.getElementById("allbank").value;
    if (amount < 0) {
      alert("Enter your amount");
      return;
    }
    if (accInput.length == 11) {
      if (amount && pin) {
        if (pin === 1234) {
          const sum = mainAmount + amount;
          //   document.getElementById("main-amount").innerText = sum;
          setInnerText("main-amount", sum);
          const transactionContainer = document.getElementById(
            "transaction-container"
          );
          const div = document.createElement("div");
          div.innerHTML = `
            <h1>Added Money from ${selectBank}</h1>
            <h3> ${amount}</h3>
            <p>Account Number:${accInput}</p>
          `;
          transactionContainer.appendChild(div);
          // const p = document.createElement("p");
          // p.innerText = `Added ${amount} from ${accInput} account`;
          // transactionContainer.appendChild(p);
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
