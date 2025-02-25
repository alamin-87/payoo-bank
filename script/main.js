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
    if (amountValue && pin) {
      if (convertPin === 1234) {
        const sum = convertMainAmount + convertAmount;
        document.getElementById("main-amount").innerText = sum;
      }
      else{
        alert('Enter pin')
      }
    } else {
      alert("Enter your pin");
    }
  });

  // document.getElementById('add-money-main-btn').addEventListener('click',function(){
  //   document.getElementById('add-money-main-btn').style.backgroundColor='#98C3F6';
  //   document.getElementById('add-money-main-btn').style.border='#98C3F6';
  // })
  // document.getElementById('cash-out-main-btn').addEventListener('click',function(){
  //   document.getElementById('cash-out-main-btn').style.backgroundColor='#98C3F6';
  //   document.getElementById('cash-out-main-btn').style.border='#98C3F6';
  // })

  // document.getElementsByClassName('card').addEventListener('click',function(){
  //   document.getElementsByClassName('card').style.backgroundColor='#98C3F6';
  //   document.getElementsByClassName('card').style.border='#98C3F6';
  // })

  // document.getElementsByClassName('card').addEventListener('click',function(){
  //   const card=document.getElementsByClassName('card');
  //   for(const cards of card){
  //     // cards.style.backgroundColor='#98C3F6';
  //     document.querySelectorAll('cards').style.backgroundColor='#98C3F6';
  //     document.querySelectorAll('cards').style.border='#98C3F6';
  //   }
  // })