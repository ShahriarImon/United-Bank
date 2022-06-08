document.getElementById('login').addEventListener('click', function (event) {
    document.getElementById('login-area').style.display = 'none';
    document.getElementById('transaction-area').style.display = 'block';

})
// ............This function is used only for (-1 multiplication for balance to add negetive value since withdraw)
function inputStringToValue(inputId) {
    depositAmount = document.getElementById(inputId).value;
    return parseFloat(depositAmount);
}

function transaction(currentAmountId, inputedAmount) {
    let currentAmount = document.getElementById(currentAmountId);
    currentAmount.innerText = parseFloat(currentAmount.innerText) + inputedAmount;
}

document.getElementById('depositBtn').addEventListener('click', function () {
    depositNumber = inputStringToValue('depositAmount');
    transaction('currentDeposit', depositNumber);
    transaction('currentBalance', depositNumber);
})
document.getElementById('withdrawBtn').addEventListener('click', function () {
    withdrawNumber = inputStringToValue('withdrawAmount');
    transaction('currentWithdraw', withdrawNumber);
    transaction('currentBalance', -1*withdrawNumber);
})
