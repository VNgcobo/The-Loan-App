//get values from the page
//controller function
function getValues(){
    let amount = document.getElementById("amount").value;
    let term = document.getElementById("term").value;
    let rate = document.getElementById("rate").value;

    //parse into integers and float

    amount = parseFloat(amount);
    term = parseInt(term);
    rate = parseFloat(rate);

    if(amount < 1000 || amount > 1000000){
        alert("Please enter a valid loan amount");
        document.loan_form.amount.value = "";
     }
     else if(term < 6 || term > 96){
        alert("Please enter a valid period");
        document.loan_form.months.value = "";
     }
     else if(rate < 0 || rate > 30){
        alert("Please enter a valid interest rate");
        document.loan_form.rate.value = "";
     }
     else{
        // alert("validation is complete");
        calculate(amount,rate,rate);
     }
}

//calculate the values
//App logic
function calculate(amount,term,rate){
   //create a loan object
   let loanObj = {
      Term(){
   
      },
      Payment(amount, rate, term){
         let monthlyPayment = amount*(rate/1200)/(1-(1+rate/1200)**(-term));
         return monthlyPayment;
      },
      Principal(){
         let towardsBalance = monthly_payment - towards_interest;
         return towardsBalance;
      },
      Interest(){
         let towardInterest = (i/12)*current_balance;
         return towardInterest;
      },
      totalInterest(){
         let totalInterest = total_interest + towards_interest;
         return totalInterest;
      },
      Balance(){
         let currentBalance = current_balance - towards_balance;
         return currentBalance;
      },
   };
   
   return loanObj.Payment(amount, rate, term);
}
//--------Display Section-------

// Display the loan summary
function loanInfo(){
   var info = "";

   info += "<table width ='250'>";

        info += "<p align='center'><i>Monthly Payment:</i></p>";
        info += "<h1 align='center'><b>R"+round(monthlyPayment,2)+"</b></h1>";

        info += "<tr><td>Total Principle:</td>";
        info += "<td align='right'>R"+amount+"</td>";

        info += "<tr><td>Total Interest:</td>";
        info += "<td align='right'>"+rate+"%</td>";

        info += "<tr><td>Total Cost:</td>";
        info += "<td align='right'>"+rate+"%</td>";

   info += "</table>"   

   document.getElementById("paymentInfo").innerHTML = info; //info is a string which contains all the html table code
}

function loanTable(){

let tableBody = document.getElementById("results");

let templateRow = document.getElementById("laTemplate");

tableBody.innerHTML = "";

   let loanArray = Object.values(loanObj);

   while (loanObj.Balance > 0) {

      if (loanObj.Payment > loanObj.Balance){
         monthly_payment = current_balance + towards_interest;
         
      }

      //rows
      let tableRow = document.importNode(templateRow.content, true);

      //grab the td's and put them in an array 
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(loanArray[index]);
        rowCols[0].textContent = loanArray[index];

        rowCols[1].classList.add(loanArray[index+1]);
        rowCols[1].textContent = loanArray[index+1];

        rowCols[2].classList.add(loanArray[index+2]);
        rowCols[2].textContent = loanArray[index+2];

        rowCols[3].classList.add(loanArray[index+3]);
        rowCols[3].textContent = loanArray[index+3];

        rowCols[4].classList.add(loanArray[index+4]);
        rowCols[4].textContent = loanArray[index+4];

        rowCols[5].classList.add(loanArray[index+5]);
        rowCols[5].textContent = loanArray[index+5];

      tableBody.appendChild(tableRow);

   }
}

//round off to two places
function round (num, dec){
   return (Math.round(num*Math.pow(10,dec))/Math.pow(10,dec)).toFixed(dec);
}

//can you access an object's property globally?

