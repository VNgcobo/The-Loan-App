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

   //Display the loan info
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

      //Display the amortization table
      var table = "";

      // table += "<table cellpadding='15' border='1'>"
         // table += "<tr>"; 
         //    table += "<td width='30' align='center'>0</td>"; 
         //    table += "<td width='60' align='center'>&nbsp;</td>"; 
         //    table += "<td width='60' align='center'>&nbsp;</td>"; 
         //    table += "<td width='60' align='center'>&nbsp;</td>"; 
         //    table += "<td width='85' align='center'>&nbsp;</td>"; 
         //    table += "<td width='70' align='center'>"+round(loan_amt,2)+"</td>"; 
   
         // table += "</tr>";
   
         var current_balance = loan_amt;
         var payment_counter = 1;
         var total_interest = 0;
   
         monthly_payment = monthly_payment + extra;
   
         let templateRows = "";
         while(current_balance > 0) {
            //create rows
   
            towards_interest = (rate/1200)*current_balance;
   
            if (monthly_payment > current_balance){
               monthly_payment = current_balance + towards_interest;
            }
            
            towards_balance = monthly_payment - towards_interest;
            total_interest = total_interest + towards_interest;
            current_balance = current_balance - towards_balance;
   
            // template row
            table += "<tr>";
               table += "<td>"+payment_counter+"</td>";
               table += "<td>"+round(monthly_payment,2)+"</td>";
               table += "<td>"+round(towards_balance,2)+"</td>";
               table += "<td>"+round(towards_interest,2)+"</td>";
               table += "<td>"+round(total_interest,2)+"</td>";
               table += "<td>"+round(current_balance,2)+"</td>";
            table += "</tr>";
   
            
         }
      table += "</table>";   
   
      document.getElementById("results").innerHTML = table;

}

//display the values to the page
//view function
// function displayData(loanArray){

//     //get the tbody element from the page
//     let tableBody = document.getElementById("results");

//     //get the template row
//     let templateRow = document.getElementById("laTemplate");

//     //clear table first
//     tableBody.innerHTML = "";

//     for (let index = 0; index < loanArray.length; index += 6) {
        
//         let tableRow = document.importNode(templateRow.content, true);
        
//         //grab the td's and put them in an array
//         let rowCols = tableRow.querySelectorAll("td");
//         rowCols[0].textContent = loanArray[index];
//         rowCols[1].textContent = loanArray[index+1];
//         rowCols[2].textContent = loanArray[index+2];
//         rowCols[3].textContent = loanArray[index+3];
//         rowCols[4].textContent = loanArray[index+4];
//         rowCols[5].textContent = loanArray[index+5];
//     }
//     document.getElementById("paymentInfo").innerHTML = "Monthly Payment = ${} + payment";
// }

//round off to two places
function round (num, dec){
    return (Math.round(num*Math.pow(10,dec))/Math.pow(10,dec)).toFixed(dec);
}