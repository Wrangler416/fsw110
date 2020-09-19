
function add(num1, num2) {
    var varnum1 = document.getElementById("num1").value;
    var varnum2 = document.getElementById("num2").value; 
    var added = +varnum1 + +varnum2;

    document.getElementById("equals").innerHTML = added; 
}
function subtract(num3, num4) {
    var x = document.getElementById("num3").value; 
    var y = document.getElementById("num4").value;
    var xy = +x - +y;

    document.getElementById("equals2").innerHTML = xy; 
}
function multiply(num5, num6) {
    var z = document.getElementById("num5").value; 
    var t = document.getElementById("num6").value; 
    var zt = +z * +t; 

    document.getElementById("equals3").innerHTML = zt; 
}


