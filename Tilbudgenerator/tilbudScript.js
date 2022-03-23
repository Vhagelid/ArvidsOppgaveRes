var formEl = document.getElementById("form");
var surname;
var areaEl = document.getElementById("result");
var monthPrice = 0;

formEl.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = formEl.elements;
    var name = data.name.value;
    surname = data.surname.value;
    var discount = parseInt(document.getElementById("discount").value);

    var selectedProducts = [];
    var total = 0;
    var totalDiscounted = 0;

    var vilmer = {ForNavn:"Vilmer", EtterNavn:"Hagelid"};

    for (var productChoice of data) {
        if (productChoice.checked) {

            var selectedProduct = {
                Productname: productChoice.previousElementSibling.textContent,
                ProductPrice: parseInt(productChoice.value),
                Discount: parseInt(productChoice.value) * (parseInt(discount) / 100),
                DiscountedPrice: CalculateDiscountedPrice(parseInt(productChoice.value), parseInt(discount)),
                IsMonthly: productChoice.name == "internett"
            };
            // if (productChoice.name == "internett")
            //     selectedProduct.IsMonthly = true;
            // else
            //     selectedProduct.IsMonthly = false;

            selectedProducts.push(selectedProduct);
            total += selectedProduct.ProductPrice;
            totalDiscounted += selectedProduct.DiscountedPrice;

        }
    };


    console.log(selectedProducts);

    console.log(`Hei ${name} ${surname}`);
    var offerText = [];
    offerText.push(`Hei ${name} ${surname} og takk for en hyggelig telefonsamtale\nDu har valgt:`);

    for (var product of selectedProducts) {
        offerText.push(`${product.Productname}\t${product.ProductPrice}\t${ToFixed(product.Discount)} (${discount}%) \t${ToFixed(product.DiscountedPrice)} ${product.IsMonthly?"(pr måned)":""}  `);
    }
    offerText.push(`Totalt: ${total}`);
    offerText.push(`Totalt å betale: ${ToFixed(totalDiscounted)}`);


    areaEl.innerHTML = offerText.join("\n");
    Clipboard.apply


   

});

function CopyToClipboard(id){
    var elem=document.getElementById(id);
    navigator.clipboard.writeText(elem.innerHTML);
}

function ToFixed(numb) {
    return Math.round(numb*100)/100;
}

function CalculateDiscountedPrice(prodPrice, discountValue) {
    return prodPrice - (prodPrice * (discountValue / 100));

}
