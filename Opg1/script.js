var formEl = document.getElementById("form");

formEl.addEventListener("submit", function(e){
    var data = formEl.elements;
    var name = data.name.value;
    
    
    console.log("Hei jeg heter", name)
    e.preventDefault();
})


   



