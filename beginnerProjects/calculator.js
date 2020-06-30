var currentValue;
var valueToAdd;
var newValue; 

function getValue(clicked_id) {
        currentValue = document.getElementById("content").innerHTML;   
        valueToAdd = document.getElementById(clicked_id).innerHTML;
        document.getElementById("content").innerHTML = currentValue + valueToAdd;
    
}

function addOperation(clicked_id) {
    newValue = document.getElementById("cache").innerHTML + " " + document.getElementById("content").innerHTML + " " + clicked_id;
    document.getElementById("cache").innerHTML = newValue 
    document.getElementById("content").innerHTML = "";
    currentValue = document.getElementById("content").innerHTML
}

function evaluate() {
    
}