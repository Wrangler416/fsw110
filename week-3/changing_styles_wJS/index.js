for (var i = 0; i < 5; i++) {
    var header = document.createElement("h2"); 
    header.textContent = "DOM and JS"; 
    header.setAttribute("id", "title"); 
    document.body.append(header); 
    header.style.fontSize = "20px"; 
    header.style.color = "cornflowerblue";
    header.style.fontWeight = "lighter";
    header.style.fontFamily = "sans serif"; 
    var className = document.querySelector("#title").className;
    let ul = document.querySelector("#title");
    ul.classList.add("border"); 
}





