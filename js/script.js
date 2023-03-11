// login button handler.
const enterBtn = document.getElementById("loginBtn");
enterBtn.addEventListener("click", function () {
  const loginAria = document.getElementById("login-aria");
  loginAria.style.display = "none";
  const transactionAria = document.getElementById("transaction-aria");
  transactionAria.style.display = "block";
});

// Deposite button handler.
const addDeposit = document.getElementById("addDeposit");

addDeposit.addEventListener("click", function () {
  const depositAmount = document.getElementById("depositAmount").value;
  const depositNumber = parseFloat(depositAmount);

  const currentDeposit = document.getElementById("currentDeposit").innerText;
  const currentDepositNumber = parseFloat(currentDeposit);
  const totalDeposit = depositNumber + currentDepositNumber;

  document.getElementById("currentDeposit").innerText = totalDeposit;
  document.getElementById("depositAmount").value = "";
  const previousBalance = document.getElementById("currentBalance").innerText;
  const previousBalanceNumber = parseFloat(previousBalance);
  const newBalance = previousBalanceNumber + totalDeposit;
  document.getElementById("currentBalance").innerText = newBalance;
});

const withdraw = document.getElementById("withdraw");

//Withdraw button handler
withdraw.addEventListener("click", function () {
  const withdrawAmmount = document.getElementById("withdrawAmmount").value;
  const withdrawAmmountNumber = parseFloat(withdrawAmmount);

  const currentWithdraw = document.getElementById("currentWithdraw").innerText;
  const currentWithdrawNumber = parseFloat(currentWithdraw);
  const newCurrentWithdraw = withdrawAmmountNumber + currentWithdrawNumber;

  document.getElementById("currentWithdraw").innerText = newCurrentWithdraw;
  document.getElementById("withdrawAmmount").value = "";

  const previousBalance = document.getElementById("currentBalance").innerText;
  const previousBalanceNumber = parseFloat(previousBalance);

  const newBalance = previousBalanceNumber - newCurrentWithdraw;
  document.getElementById("currentBalance").innerText = newBalance;
});
