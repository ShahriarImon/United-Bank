document.getElementById('login').addEventListener('click', function (event) {
    document.getElementById('login-area').style.display = 'none';
    document.getElementById('transaction-area').style.display = 'block';
    
})

// ............This function is used only for (-1 multiplication for balance to add negative value since withdraw)
function inputStringToValue(inputId) {
    depositAmount = document.getElementById(inputId).value;
    console.log(depositAmount);
    return parseFloat(depositAmount);
}

function transaction(currentAmountId, inputedAmount) {
    let currentAmount = document.getElementById(currentAmountId);
    currentAmount.innerText = parseFloat(currentAmount.innerText) + inputedAmount;
}

document.getElementById('depositBtn').addEventListener('click', function () {
    depositNumber = inputStringToValue('depositAmount');
    if (document.getElementById('depositAmount').value == '') {
        alert("Hey, Don't Click Deposit Button without inserting Amount")
    } else {


        if (depositNumber < 0) {
            alert("Hey, Don't insert negative amount")
        } else {
            transaction('currentDeposit', depositNumber);
            transaction('currentBalance', depositNumber);
        }
    }
})

document.getElementById('withdrawBtn').addEventListener('click', function () {
    withdrawNumber = inputStringToValue('withdrawAmount');
    if (document.getElementById('depositAmount').value == '') {
        alert("Hey, Don't Click Withdraw Button without inserting Amount")
    } else {
        if (withdrawNumber < 0) {
            alert("Hey, Don't insert negative amount")
        } else {
            transaction('currentWithdraw', withdrawNumber);
            transaction('currentBalance', -1 * withdrawNumber);
        }
    }
})
