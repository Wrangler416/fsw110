
document.getElementsByClassName('red-box')[0].addEventListener('mousemove', function(){
  var x = event.clientX;
  var y = event.clientY;
  var coor = "X = " + x + ", Y = " + y;
  document.getElementsByClassName('red-box')[0].textContent = coor;
  });
