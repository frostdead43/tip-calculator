calculateBtnElment.addEventListener("click", calculate);
resettBtnElement.addEventListener("click", reset); 

tipResult.innerHTML = '$' + '00.00';
totalResult.innerHTML = '$' + '00.00';



function calculate() {
    let tipAmount = Number(tipInput.value / 100) * Number(billInput.value);
    let totalAmount = Number(billInput.value) + Number(tipAmount);
    let amountPerPerson = Number(totalAmount) / Number(numberInput.value);
    totalResult.innerHTML = '$' + (amountPerPerson).toFixed(1);
    tipResult.innerHTML = '$' + (Number(tipInput.value / 100) * amountPerPerson).toFixed(1);

    if(numberInput.value == 0) {
        warnElement.style.display = 'block';
        tipResult.innerHTML = "";
        totalResult.innerHTML = "";
        numberInput.style.border = '2px solid rgba(225, 112, 82, 1)';
    } 
}
     
function reset() {
    tipResult.innerHTML = "";
    totalResult.innerHTML = "";
    billInput.value = "";
    tipInput.value = "";
    numberInput.value = "";
    warnElement.style.display = 'none';
    numberInput.style.border = 'none';
}

