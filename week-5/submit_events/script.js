document.getElementById("myForm").onsubmit = function() {goAlert()};

  function goAlert() {
    var input1 = document.getElementById("textOne").value; 
    var input2 = document.getElementById("textTwo").value; 
    var input3 = document.getElementById("textThree").value; 
    var all = input1 + input2 +input3 
    alert(all);
  }