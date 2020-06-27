function calculateFromBinToDec(){
    var inputValue = document.getElementById("input").value;

    if(inputValue ==="") return alert("Please input a binary number.")
    
    inputValue.split('').map((char) => {
        if(char !== '0' && char !== '1') return alert("Please input a binary number");
    });

    const result = parseInt(inputValue, 2);
    document.getElementById('result').value = result;
    return true;
}