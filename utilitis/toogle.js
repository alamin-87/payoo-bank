// document.getElementById("add-money-section").style.display = "block";
document.getElementById("cashout-section").style.display = "none";
document.getElementById("transaction-section").style.display = "none";

document
  .getElementById("add-money-main-btn")
  .addEventListener("click", function () {
    handelToggle("add-money-section", "block");
    handelToggle("cashout-section", "none");
    handelToggle("transaction-section", "none");

    // document.getElementById("add-money-section").style.display = "block";
    // document.getElementById("cashout-section").style.display = "none";
  });

document
  .getElementById("cash-out-main-btn")
  .addEventListener("click", function () {
    handelToggle("add-money-section", "none");
    handelToggle("transaction-section", "none");
    handelToggle("cashout-section", "block");
    // document.getElementById("add-money-section").style.display = "none";
    // document.getElementById("cashout-section").style.display = "block";
  });
  
document
  .getElementById("transaction-main-btn")
  .addEventListener("click", function () {
    handelToggle("transaction-section", "block");
    handelToggle("add-money-section", "none");
    handelToggle("cashout-section", "none");
  });

function handelToggle(id, status) {
  document.getElementById(id).style.display = status;
}
