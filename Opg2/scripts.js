var formEl = document.getElementById("form");

formEl.addEventListener("submit", function(e){
    var data = formEl.elements;
    var name = data.name.value;
    var age = data.age.value;
    
    
    console.log("Hei jeg heter", name)
    document.getElementById("result").innerHTML = "Hei jeg heter " + name + age
    e.preventDefault();
})


   
