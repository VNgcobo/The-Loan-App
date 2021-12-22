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
        document.loan_form.loan_amt.value = "";
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

//generate the values
//logic
function calculate(amount,term,rate){
    var monthly_payment = amount*(rate/1200)/(1-(1+rate/1200)**(-term));
    // alert(round(monthly_payment,2));
}

let loanObj = {
   Term(){

   },
   Payment(amount, rate, term){
      var monthly_payment = amount*(rate/1200)/(1-(1+rate/1200)**(-term));
   },
   Principal(){
      towards_balance = monthly_payment - towards_interest;
   },
   Interest(){
      towards_interest = (i/12)*current_balance;
   },
   totalInterest(){
      total_interest = total_interest + towards_interest;
   },
   Balance(){
      current_balance = current_balance - towards_balance;
   },
}

return loanObj;

//round off to two places
function round (num, dec){
   return (Math.round(num*Math.pow(10,dec))/Math.pow(10,dec)).toFixed(dec);
}

//Display code (loan summary)
//prelim code

   var info = "";

   info += "<table width ='250'>";

        info += "<p align='center'><i>Monthly Payment:</i></p>";
        info += "<h1 align='center'><b>R"+round(monthly_payment,2)+"</b></h1>";

        info += "<tr><td>Total Principle:</td>";
        info += "<td align='right'>R"+amount+"</td>";

        info += "<tr><td>Total Interest:</td>";
        info += "<td align='right'>"+rate+"%</td>";

        info += "<tr><td>Total Cost:</td>";
        info += "<td align='right'>"+rate+"%</td>";

   info += "</table>"   

   document.getElementById("paymentInfo").innerHTML = info; //info is a string which contains all the html table code
 //Display code (loan table)
 




