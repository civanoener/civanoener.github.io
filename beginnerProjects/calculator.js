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
    document.getElementById("cache").innerHTML = cache.join(' ');
    document.getElementById("content").innerHTML = "";
}

function clearCache() {
    cache.pop();
    alert(cache);
}

function evaluate() {
    
}