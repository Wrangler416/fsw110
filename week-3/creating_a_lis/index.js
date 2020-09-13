for (var i = 0; i < 10; i++) {
    var title = document.createElement("h1"); 
    title.textContent = "Hello World"; 
    title.setAttribute("id", "hello");
    document.body.append(title); 
    title.style.color = "blue"; 
}



var element = document.createElement("ul");
    element.textContent = "Unordered List"; 
    element.setAttribute("id", "nameList"); 
    document.body.append(element); 

const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];



for (var x = 0; x < names.length; x++) {
    
    var list = document.getElementById("nameList"); 
    list.innerHTML += "<li>" + names[x] + "</li>" 
}


