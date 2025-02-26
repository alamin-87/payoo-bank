// document
//   .getElementById("cashOut-btn")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     const amountValue = document.getElementById("cashout-amount").value;
//     const convertAmount = parseFloat(amountValue);
//     const pin = document.getElementById("cashOut-pin").value;
//     const convertPin = parseInt(pin);
//     const mainAmount = document.getElementById("main-amount").innerText;
//     const convertMainAmount = parseFloat(mainAmount);
//     if (amountValue && pin) {
//       if (convertPin === 1234) {
//         const sum = convertMainAmount - convertAmount;
//         document.getElementById("main-amount").innerText = sum;
//       }
//       else{
//         alert('Enter pin')
//       }
//     } else {
//       alert("Enter your pin");
//     }
//   });

document
  .getElementById("cashOut-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amountValue = getInputValueByID("cashout-amount");
    const mainAmount = getTextValueByID("main-amount");
    const pin = getInputValueByID("cashOut-pin");
    const accInput = document.getElementById("acc-input").value;
    if (amountValue < 0 || amountValue > mainAmount) {
      alert("Enter your amount");
      return;
    }
    if (accInput.length === 11) {
      if (amountValue && pin) {
        if (pin === 1234) {
          const sum = mainAmount - amountValue;
          setInnerText("main-amount", sum);
          // document.getElementById("main-amount").innerText = sum;
          const transactionContainer = document.getElementById(
            "transaction-container"
          );
          const p = document.createElement("p");
          p.innerText = `Cash Out ${amountValue} from ${accInput} account`;
          transactionContainer.appendChild(p);
        } else {
          alert("Enter pin");
        }
      } else {
        alert("Enter your Amount & pin");
      }
    } else {
      alert("Enter your ACC Number");
    }
  });
