for (var i = 0; i < 10; i++) {
    var title = document.createElement("h1"); 
    title.textContent = "Hello World"; 
    title.setAttribute("id", "hello");
    document.body.append(title); 
}
document.getElementById("hello").style.color = "blue";



const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];

var list = document.getElementById("nameList"); 

for (var x = 0; x < names.length; x++) {
    list.innerHTML += "<li>" + names[x] + "</li>" 
}


