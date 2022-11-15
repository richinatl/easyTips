//Calculate Tip
function calculate ()
    var totalBill = .value
    var tipPercentage = .value
    var numGuests = .value

    //make sure valid values are entered
    if (totalBill === "") {alert("Enter Amount")}; return;
    if (tipPercentage === "") {alert("Enter Amount")}; return;
    if (numGuests === "") {alert ("Enter Amount")}; return;

    //Calculate
    var tipTotal = (totalBill * tipPercentage) / numGuests;
    
    //round to two decimal places
    var tipTotal = Math.round (tipTotal*100)/100;

    //make sure it always has two decimal places
    var tipTotal.toFixed(2);

    //display