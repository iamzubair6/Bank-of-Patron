// login button handler.
const enterBtn = document.getElementById("loginBtn");
enterBtn.addEventListener("click", function(){
    const loginAria = document.getElementById("login-aria");
    loginAria.style.display = "none";
    const transactionAria = document.getElementById("transaction-aria");
    transactionAria.style.display = "block";
})

// Deposite button handler.
const addDeposit = document.getElementById("addDeposit");

addDeposit.addEventListener("click", function(){
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);

    const currentDeposit = document.getElementById("currentDeposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;

    document.getElementById("currentDeposit").innerText = totalDeposit;
    document.getElementById("depositAmount").value = "";

});
