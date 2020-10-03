const form = document.form1;

form.addEventListener("submit", (event) => {
    event.preventDefault()  
});

function myalert() {
    const first = form.fName.value;
    const last = form.lName.value;
    const age = form.age.value; 
    const gender = form.gender.value; 
    const cityselect = form.city.value
    const checkedInput = [];
        for(let i = 0; i < form.diet.length; i++){
            if(form.diet[i].checked){
        checkedInput.push(form.diet[i].value)
    }
};
    alert(" First Name:" + "" +  first + " Last Name:" + "" + last + " Age:" + "" + age + " Gender:" + "" + gender + " City:" + "" + cityselect + " Dietary Restrictions:" + "" + checkedInput)
}


