document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    withdrawField.value = '';
    
    if(isNaN(newWithdrawAmount)){
        alert('Plz provide a valid amount');
        return;
    }

    const withdrawTotalAmount = document.getElementById('withdraw-total');
    const previousWithdrawTotalAmountString = withdrawTotalAmount.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalAmountString);

    
   

    const balanceTotalAmount = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalAmount.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if(newWithdrawAmount > previousBalanceTotal){
        alert('Sry insufficiant balance');
        return;
    }
    const currentWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;
    withdrawTotalAmount.innerText = currentWithdrawTotal;

    const currentBalnceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalAmount.innerText = currentBalnceTotal;

    
    
})