const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const billAmountConfirm = document.querySelector("#billamount-confirm")
const message = document.querySelector("#error-message");
const messageOne = document.querySelector("#error-message1");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

billAmountConfirm.addEventListener("click", function validateBillAmount(){

    hideMessage();
    if (billAmount.value < 0){
        showMessage("Please enter correct bill amount");
        }else {
            showMessage("Please enter cash given by the customer");
        }

})

checkButton.addEventListener("click", function validateCashAmount() {
  
      hideMessage();

      if (billAmount.value < 0){
        showMessage("Please enter correct bill amount");
        }else {
            

          
      if (Number(billAmount.value) > Number(cashGiven.value)){
        showErrorMessage("Insufficient cash!!!");
    }else if (Number(billAmount.value) == Number(cashGiven.value)){
      showErrorMessage("No change to be returned");
    }else {
      const amountToBeReturned = cashGiven.value - billAmount.value; 
      calculateChange(amountToBeReturned);
      showErrorMessage("Here you go!!!");
    }




        }


      

    

});

function calculateChange(amountToBeReturned) {
 
  for (let i = 0; i < availableNotes.length; i++) {
    
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
    amountToBeReturned = amountToBeReturned % availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}

function showErrorMessage(msg){
    messageOne.style.display = "block";
    messageOne.innerText = msg;
}






















