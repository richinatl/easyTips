//Calculate Tip
function calculate () {
    var totalBill = document.getElementById("total").value;
    var tipPercentage = document.getElementById("serviceQual").value;
    var numGuests = document.getElementById("peopleamt").value;

    //Calculate
    var tipTotal = (totalBill * tipPercentage) / numGuests;
    
    //round to two decimal places
    var tipTotal = Math.round (tipTotal*100)/100;

    //make sure it always has two decimal places
    var tipTotal.toFixed(2);

    //display
    document.getElementById("totalTip").style.display = "none";

    //button
    document.getElementById("each").onclick = function () {calculateTip();};

}