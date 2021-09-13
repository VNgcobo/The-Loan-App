//get values from the page
//controller function
function getValues(){
    let amount = document.getElementById("amount").value;
    let term = document.getElementById("term").value;
    let rate = document.getElementById("rate").value;

    //parse into integers and float

    amount = parseInt(amount);
    term = parseInt(term);
    rate = parseInt(rate);

    //validate user input (if/else)
    if(Number.isInteger(amount) && Number.isInteger(term) && Number.isInteger(rate)){
        //call the logic function
        let loanArray = generateValues();

        //call the view function
        displayData(loanArray);
    } else{
        alert("Please enter a number");
    }
}

//generate the values
//logic
function generateValues(amount,term,rate){

    var payment = amount*(rate/1200)/(1-(1+rate/1200)^-term);
    var principal = payment - interest;
    var interest;
    var totalInterest;
    var balance = amount - payment;

    //each variable stored in an array?
    //eg: let paymentArray = []; month finalArray[payment; principal; interest; tInterst; Balance]
    //or separate this function into separate functions with parameters then store the returned values into an array.

    //loop from 1 to term
    for(let i = 1; i <= term; i++){
        
    }

}

//display the values to the page
//view function
function displayData(loanArray){

    //get the tbody element from the page
    let tableBody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("laTemplate");

    //clear table first
    tableBody.innerHTML = "";

    for (let index = 0; index < loanArray.length; index += 6) {
        
        let tableRow = document.importNode(templateRow.content, true);
        
        //grab the td's and put them in an array
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].textContent = loanArray[index];
        rowCols[1].textContent = loanArray[index];
        rowCols[2].textContent = loanArray[index];
        rowCols[3].textContent = loanArray[index];
        rowCols[4].textContent = loanArray[index];
        rowCols[5].textContent = loanArray[index];
    }
    document.getElementById("paymentInfo").innerHTML = "Monthly Payment = ${} + payment";
}