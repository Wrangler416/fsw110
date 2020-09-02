var header = document.createElement("h1");
header.textContent = "Welcome to my JS site";
document.body.appendChild(header);
console.log(header);

var paragraph = document.createElement("p");
paragraph.textContent = "All of this was created with Javascript";
document.body.appendChild(paragraph);
console.log(paragraph);

var orderedList = document.createElement("ol");
orderedList.setAttribute("id", "list");
document.body.appendChild(orderedList); 

var listItems = document.createElement("li");
listItems.textContent = "Mango";
document.getElementById("list").appendChild(listItems); 
console.log(listItems);

var listItems2 = document.createElement("li");
listItems2.textContent = "Guava";
document.getElementById("list").appendChild(listItems2); 
console.log(listItems2);

var listItems3 = document.createElement("li");
listItems3.textContent = "Papaya";
document.getElementById("list").appendChild(listItems3); 
console.log(listItems3); 
console.log(orderedList);




 