// get inputed value 
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


// substract expenses from Income 
function balanceAfterExpenses (incomeGetValue,totalExpenses){
    const balance =(incomeGetValue-totalExpenses);
    return balance;
}


// placed the value to innerText field of Balance and Expesnse 
function totalAmount (amountId,totalAmount){

    
        const amountField = document.getElementById(amountId);
        const visibleBalance= amountField.innerText ;
         amountField.innerText = totalAmount ;
        return visibleBalance; 
}


// saving function 
function savingAmount (balanceId,percentageId,savingMoneyId,remainingMoneyId){
    // const balance =balanceAfterExpenses
    const balance = document.getElementById(balanceId);
    const balanceText = balance.innerText;
    const balanceValue = parseFloat(balanceText);
    const visibleBalanceText= totalAmount (balanceId,balanceValue);
    const visibleBalance =parseFloat(visibleBalanceText);
    const inputFieldText =getValue(percentageId);
    const inputFieldValue = parseFloat(inputFieldText);

    const alertMassage = document.getElementById('alert-percentage');
    

    if(inputFieldValue<0 || isNaN(inputFieldValue) || inputFieldValue>100){
        alertMassage.style.display='block';
        // console.log("Input a valid number");
    }
    else{
        const savingMoney =visibleBalance *(inputFieldValue/100);
        const remainingMoney =balanceValue-savingMoney
        totalAmount (savingMoneyId,savingMoney);
        totalAmount(remainingMoneyId,remainingMoney);
        alertMassage.style.display='none';

    }
    



}


// clickable button 
document.getElementById('submit-calculation').addEventListener('click',()=>{

// income value call from here
const incomeGetValue=getValue('income-amount')

// Expenses value call from here
const foodGetValue =getValue ('food-amount');
const rentGetValue = getValue('rent-amount');
const clothesGetValue = getValue('clothes-amount');

const alertMassage = document.getElementById('alert');

if(incomeGetValue<0 || foodGetValue < 0 || rentGetValue <0 || clothesGetValue<0 || isNaN(incomeGetValue) || isNaN(foodGetValue) ||isNaN(rentGetValue) || isNaN(clothesGetValue)){

    alertMassage.style.display='block';
    // console.log("Input valid number");
}
else{
    
    const totalExpenses = expenses ( foodGetValue,rentGetValue,clothesGetValue);
    const balance =balanceAfterExpenses (incomeGetValue,totalExpenses);
    
    // called function of "placed the value to innerText field of Balance and Expesnse"
     totalAmount('balance',balance);
     totalAmount('total-expense',totalExpenses);
     alertMassage.style.display='none';
}

 
})

document.getElementById('submit-percentage').addEventListener('click',()=>{
    
    savingAmount ('balance','percentage','saving-amount','remaining-amount');

})