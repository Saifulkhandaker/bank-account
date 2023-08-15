document.getElementById('btn-deposit').addEventListener('click', function(){
    
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    const depositTotalAmount = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalAmount.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const currentDepositTotal = newDepositAmount + previousDepositTotal;
    depositTotalAmount.innerText = currentDepositTotal;

    const balanceTotalAmount = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalAmount.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const currentBalnceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalAmount.innerText = currentBalnceTotal;

    
    depositField.value = '';
    

    
    
})