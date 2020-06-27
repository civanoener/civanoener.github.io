var cssText = '';

function changeBorderProperties(){
    var topLeft = document.getElementById('top-left').value;
    var topRight = document.getElementById('top-right').value;
    var bottomLeft = document.getElementById('bottom-right').value;
    var bottomRight = document.getElementById('bottom-left').value;

    var newRadius = topLeft + "px " + topRight + "px " + bottomRight + "px " + bottomLeft + "px"

    cssText = "#box {border-radius: " + newRadius + "}"; 
    document.getElementById('box').style.borderRadius = newRadius;
}

function createCSSAndCopyToClipboard(){
    document.getElementById('cssText').value = cssText;
    document.getElementById('cssText').select();
    document.getElementById('cssText').setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + document.getElementById('cssText').value);
}