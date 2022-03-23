var formEl = document.getElementById("form");
var surname;
var areaEl = document.getElementById("result");
var monthPrice = 0;

formEl.addEventListener("submit", function(e) {
    e.preventDefault();
    var data = formEl.elements;
    var name = data.name.value;
    surname = data.surname.value;
    var markedBox = document.getElementsByName("extra");
    var boxValue = 0;

    for (var checkbox of markedBox) {
        if (checkbox.checked) {
            boxValue += parseInt(checkbox.value);
        }
    };

    for (i = 0; i < data.internett.length; i++) {
        if (data.internett[i].checked) {
            console.log(`Hei ${name + surname}`)
            monthPrice += parseInt(data.internett[i].value)
            areaEl.innerHTML = `Hei ${name +" "+ surname} og takk for en hyggelig telefonsamtale \r\n Prisen vil da bli:
            Internett hastighet ${monthPrice}
            Ekstra enheter ${boxValue}
            Sum ${boxValue + monthPrice}
            `
        }
    };

    

    

});