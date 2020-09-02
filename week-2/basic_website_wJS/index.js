document.body.style.backgroundColor = "lightgreen";

var header = document.createElement("nav");
header.textContent = "Home About Contact";
document.body.appendChild(header);

header.setAttribute("id", "head")
document.getElementById("head").style.textAlign = "center"; 
document.getElementById("head").style.backgroundColor = "white"; 
document.getElementById("head").style.wordSpacing = "100px";
document.getElementById("head").style.position = "sticky";
document.getElementById("head").style.border = "solid"; 
console.log(header);





var content = document.createElement("h1");
content.textContent = "Sailing New Horizons"; 
document.body.appendChild(content);

content.setAttribute("id", "headline");
document.getElementById("headline").style.textAlign = "center";
document.getElementById("headline").style.color = "darkblue"; 
document.getElementById("headline").style.fontSize = "50px";



var mainPage = document.createElement("p");
mainPage.textContent = "On a Caribbean sailing vacation you'll experience your nautical dreams in a unique and thrilling way.  Set sail aboard your private charter yacht from one of seven island bases, each with their distinct history, delicious cuisine and culture waiting to be discovered."; 
document.body.appendChild(mainPage); 
console.log(mainPage);

var list = document.createElement("ul");








var foot = document.createElement("p");
foot.textContent = "Caribbean Sailing Tours, 2020";
document.body.appendChild(foot); 

foot.setAttribute("id", "footerText");
document.getElementById("footerText").style.position = "absolute"; 
document.getElementById("footerText").style.bottom = "0"; 
 
document.getElementById("footerText").style.fontSize = "30px";
document.getElementById("footerText").style.marginLeft = "300px"; 
console.log(foot);




