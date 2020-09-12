for (var i = 0; i < 10; i++) {
    var title = document.createElement("h1"); 
    title.textContent = "Hello World"; 
    title.setAttribute("id", "hello");
    // document.getElementById("hello").style.color = "blue";
    document.body.append(title); 

}



const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];
for (var x = 0; x < names.length; x++) {
    console.log(names[x]); 
}


