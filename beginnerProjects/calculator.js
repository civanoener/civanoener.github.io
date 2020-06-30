var currentValue;
var valueToAdd;
var newValue; 
var cache = [];

function getValue(clicked_id) {
        currentValue = document.getElementById("content").innerHTML;
        valueToAdd = document.getElementById(clicked_id).innerHTML;
        document.getElementById("content").innerHTML = currentValue + valueToAdd;
}

function addOperation(clicked_id) {
    cache.push(document.getElementById("content").innerHTML);
    cache.push(clicked_id);
    alert(cache);
    newValue = document.getElementById("cache").innerHTML + " " + document.getElementById("content").innerHTML + " " + clicked_id;
    document.getElementById("cache").innerHTML = newValue 
    document.getElementById("content").innerHTML = "";
    currentValue = document.getElementById("content").innerHTML
}

function evaluate() {
    
}

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Lemon");    // adds a new element (Lemon) to fruits