function getValue(inputId){
    const inputField =document.getElementById(inputId);
    const inputFieldText = inputField.value;
    const inputFieldValue =parseFloat(inputFieldText);
    return inputFieldValue;
}


// total Expenses calculation 
function expenses (foodGetValue,rentGetValue,clothesGetValue){

    const totalExpenses = foodGetValue + rentGetValue +clothesGetValue;
    
    return totalExpenses;
}



function balanceAfterExpenses (incomeGetValue,totalExpenses){

    const balance =(incomeGetValue-totalExpenses);
    
    return balance;



}

function totalAmount (amountId,totalAmount){
    const amountField = document.getElementById(amountId);
    amountField.innerText = totalAmount;
}

document.getElementById('submit-calculation').addEventListener('click',()=>{

const incomeGetValue=getValue('income-amount')

// Expenses value call from here
const foodGetValue =getValue ('food-amount');
const rentGetValue = getValue('rent-amount');
const clothesGetValue = getValue('clothes-amount');

const totalExpenses = expenses ( foodGetValue,rentGetValue,clothesGetValue);
 const balance =balanceAfterExpenses (incomeGetValue,totalExpenses);

 totalAmount('balance',balance);
 totalAmount('total-expense',totalExpenses);
 

})