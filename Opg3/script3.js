// Henter form
var formEl = document.getElementById("form");

// Lytter på formen og venter på at man submitter formen, så kjøres denne funksjonen
formEl.addEventListener("submit", function (e) {
    // Variabler for å definere elementer og element verdier
    var data = formEl.elements;
    var name = data.name.value;
    var age = data.age.value;
    var markedBox = document.getElementsByName("food");
    var ele = document.getElementsByName('drink');
    // string
    var boxValue = "";

    // Løkke som henter verdien av alle huket av check bokser
    for (var checkbox of markedBox) {
        if (checkbox.checked) {
            boxValue = boxValue + ' ' + checkbox.value;
        }
    }


   
    // Løkke som sjekker om radio knapper er huket av, og skriver ut verdien av radioknappene og verdien til de andre elementene ut i tekstfeltet
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            document.getElementById("result").innerHTML = "Hei jeg heter "
             + name + age + "Min favoritt brus er " + ele[i].value + '\r\n'
            + boxValue;


    }



    console.log("Hei jeg heter", name)
    e.preventDefault();
})



