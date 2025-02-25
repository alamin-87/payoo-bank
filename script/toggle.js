document.getElementById("add-money-section").style.display = "block";
document.getElementById("cashout-section").style.display = "none";
document
  .getElementById("add-money-main-btn")
  .addEventListener("click", function () {
    document.getElementById("add-money-section").style.display = "block";
    document.getElementById("cashout-section").style.display = "none";
  });
document.getElementById("cash-out-main-btn").addEventListener("click", function () {
  document.getElementById("add-money-section").style.display = "none";
  document.getElementById("cashout-section").style.display = "block";
});
