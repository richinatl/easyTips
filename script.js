//Calculate Tip
function calculateTip() {
    let billAmt = document.getElementById("total").value;
    let serviceQual = document.getElementById("serviceQual").value;
    let numOfPeople = document.getElementById("peopleamt").value
    let total = (billAmt * serviceQual) / numOfPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    
    
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;}
    document.getElementById("calculate").onclick = function() {calculateTip();};