document.body.style.backgroundColor = "lightgreen";

var header = document.createElement("nav");
header.textContent = "Home About Contact";
header.setAttribute("id", "head"); 
document.body.appendChild(header);
document.getElementById("head").style.textAlign = "center"; 
document.getElementById("head").style.backgroundColor = "white"; 
document.getElementById("head").style.wordSpacing = "100px";
document.getElementById("head").style.position = "sticky";
document.getElementById("head").style.border = "solid"; 
document.getElementById("head").style.color = "darkblue";

console.log(header);

var title = document.createElement("h1");
title.textContent = "Sailing the Caribbean"; 
title.setAttribute("id", "headline");
document.body.appendChild(title);
document.getElementById("headline").style.textAlign = "center";
document.getElementById("headline").style.color = "darkblue"; 
document.getElementById("headline").style.fontSize = "50px";

console.log(title); 

var mainPage = document.createElement("p");
mainPage.textContent = "On a Caribbean sailing vacation you'll experience your nautical dreams in a unique and thrilling way.  Set sail aboard your private charter yacht from one of seven island bases, each with their distinct history, delicious cuisine and culture waiting to be discovered."; 
mainPage.setAttribute("id", "info"); 
document.body.appendChild(mainPage); 
document.getElementById("info").style.margin = "20px"; 
document.getElementById("info").style.color = "darkblue";
document.getElementById("info").style.fontSize = "20px"; 
document.getElementById("info").style.textAlign = "center"; 

console.log(mainPage);

var title2 = document.createElement("h2");
title2.textContent = "Charter Options"; 
title2.setAttribute("id", "options"); 
document.body.appendChild(title2); 
document.getElementById("options").style.color = "darkblue";
document.getElementById("options").style.textAlign = "center";

console.log(title2); 

var unorderedList = document.createElement("ul");
unorderedList.setAttribute("id", "list");
document.body.appendChild(unorderedList); 
document.getElementById("list").style.textAlign = "center"; 
document.getElementById("list").style.color = "darkblue"; 

var listItems = document.createElement("li");
listItems.textContent = "Captain and Crew Charter";
document.getElementById("list").appendChild(listItems); 
console.log(listItems);

var listItems2 = document.createElement("li");
listItems2.textContent = "Learn to Sail Charter";
document.getElementById("list").appendChild(listItems2); 
console.log(listItems2);

var listItems3 = document.createElement("li");
listItems3.textContent = "Bareboat Charter - For Experienced Sailors";
document.getElementById("list").appendChild(listItems3); 

console.log(listItems3); 
console.log(unorderedList);

var foot = document.createElement("p");
document.body.appendChild(foot); 
foot.textContent = "Caribbean Sailing Tours, 2020";
foot.setAttribute("id", "footerText");
document.getElementById("footerText").style.position = "absolute"; 
document.getElementById("footerText").style.bottom = "0"; 
document.getElementById("footerText").style.fontSize = "30px";
document.getElementById("footerText").style.color = "darkblue";
document.getElementById("footerText").style.margin = "40px"; 

console.log(foot);