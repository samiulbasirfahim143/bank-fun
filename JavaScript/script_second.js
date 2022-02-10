document.getElementById("deposite-button").addEventListener("click",function(){
    const depositeInputfieldString = document.getElementById("deposite-field").value;
    const depositeInputfield = parseFloat(depositeInputfieldString);
    const depositeAmountString = document.getElementById("deposite-cash").innerText;
    const depositeAmount = parseFloat(depositeAmountString)
    const totalAmount = document.getElementById("total-amount").innerText;
    console.log(totalAmount);
    if(depositeInputfield >= 0){
        document.getElementById('deposite-cash').innerText = depositeAmount + depositeInputfield;
        document.getElementById('total-amount').innerText =  depositeInputfield + parseFloat(totalAmount);
    }
    else{
        alert("Please input valid number");
    }
});
document.getElementById("withdraw-button").addEventListener("click",function(){
    const withdrawInputField = parseFloat(document.getElementById("withdraw-field").value);
    const withdrawAmount = parseFloat(document.getElementById("withdraw-cash").innerText);
    const totalAmount = document.getElementById("total-amount").innerText;
    console.log(withdrawAmount);
    console.log(withdrawInputField);
    if(withdrawInputField >= 0){
        document.getElementById("withdraw-cash").innerText = withdrawAmount+withdrawInputField;
        document.getElementById("total-amount").innerText = totalAmount - withdrawInputField;
    }
    else{
        alert("Please input valid number");
    }
});
