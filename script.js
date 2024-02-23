function land() {
    let street1 = document.getElementById('street1');
    let street2 = document.getElementById('street2');
    let street3 = document.getElementById('street3');
    let pot1 = document.getElementById('pot1');
    let pot2 = document.getElementById('pot2');
    let pot3 = document.getElementById('pot3');
    let land2 = document.getElementById('land2');
    let land1 = document.getElementById('land1');
    let land3 = document.getElementById('land3');

    land1.style.display = "block"
    land2.style.display = "block"
    land3.style.display = "block"
    street1.style.display = "none"
    street2.style.display = "none"
    street3.style.display = "none"
    pot1.style.display = "none"
    pot2.style.display = "none"
    pot3.style.display = "none"

}

function all() {
    let land2 = document.getElementById('land2');
    let land1 = document.getElementById('land1');
    let land3 = document.getElementById('land3');
    let street1 = document.getElementById('street1');
    let street2 = document.getElementById('street2');
    let street3 = document.getElementById('street3');
    let pot1 = document.getElementById('pot1');
    let pot2 = document.getElementById('pot2');
    let pot3 = document.getElementById('pot3');

    land1.style.display = "block"
    land2.style.display = "block"
    land3.style.display = "block"

    street1.style.display = "block"
    street2.style.display = "block"
    street3.style.display = "block"
    pot1.style.display = "block"
    pot2.style.display = "block"
    pot3.style.display = "block"
}

function street() {
    let land2 = document.getElementById('land2');
    let land1 = document.getElementById('land1');
    let land3 = document.getElementById('land3');
    let street1 = document.getElementById('street1');
    let street2 = document.getElementById('street2');
    let street3 = document.getElementById('street3');
    let pot1 = document.getElementById('pot1');
    let pot2 = document.getElementById('pot2');
    let pot3 = document.getElementById('pot3');

    land1.style.display = "none"
    land2.style.display = "none"
    land3.style.display = "none"

    street1.style.display = "block"
    street2.style.display = "block"
    street3.style.display = "block"
    pot1.style.display = "none"
    pot2.style.display = "none"
    pot3.style.display = "none"

}

function pot() {
    let street1 = document.getElementById('street1');
    let street2 = document.getElementById('street2');
    let street3 = document.getElementById('street3');
    let land2 = document.getElementById('land2');
    let land1 = document.getElementById('land1');
    let land3 = document.getElementById('land3');
    let pot1 = document.getElementById('pot1');
    let pot2 = document.getElementById('pot2');
    let pot3 = document.getElementById('pot3');

    land1.style.display = "none"
    land2.style.display = "none"
    land3.style.display = "none"
    street1.style.display = "none"
    street2.style.display = "none"
    street3.style.display = "none"
    pot1.style.display = "block"
    pot2.style.display = "block"
    pot3.style.display = "block"
}