async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}


function calculatepaella() {
    let portions = +document.getElementById('p-number').value;
    let menge1 = 100;
    let menge2 = 65;
    let menge3 = 20;
    let menge4 = 0.5;
    let menge5 = 0.5;
    let menge6 = 0.25;
    let menge7 = 1.25;
    let menge8 = 0.25;
    let menge9 = 0.25;
    let menge10 = 0.25;
    let menge11 = 175;
    let menge12 = 25;
    if (portions <= 0) {
        alert("Bitte gib mindestens 1 Portion ein.");
    } else
        document.getElementById('menge1').innerHTML = menge1 * portions;
    document.getElementById('menge2').innerHTML = menge2 * portions;
    document.getElementById('menge3').innerHTML = menge3 * portions;
    document.getElementById('menge4').innerHTML = menge4 * portions;
    document.getElementById('menge5').innerHTML = menge5 * portions;
    document.getElementById('menge6').innerHTML = menge6 * portions;
    document.getElementById('menge7').innerHTML = menge7 * portions;
    document.getElementById('menge8').innerHTML = menge8 * portions;
    document.getElementById('menge9').innerHTML = menge9 * portions;
    document.getElementById('menge10').innerHTML = menge10 * portions;
    document.getElementById('menge11').innerHTML = menge11 * portions;
    document.getElementById('menge12').innerHTML = menge12 * portions;
}

function curry() {
    let portions = +document.getElementById('p-number').value;
    let menge1 = 400;
    let menge2 = 400;
    let menge3 = 4;
    let menge4 = 2;
    let menge5 = 1;
    let menge6 = 250;
    let menge7 = 150;
    let menge8 = 1;
    let menge9 = 1;
    let menge10 = 400;
    let menge11 = 50;
    let menge12 = 25;
    if (portions <= 0) {
        alert("Bitte gib mindestens 1 Portion ein.");
    } else
        document.getElementById('menge1').innerHTML = menge1 * portions;
    document.getElementById('menge2').innerHTML = menge2 * portions;
    document.getElementById('menge3').innerHTML = menge3 * portions;
    document.getElementById('menge4').innerHTML = menge4 * portions;
    document.getElementById('menge5').innerHTML = menge5 * portions;
    document.getElementById('menge6').innerHTML = menge6 * portions;
    document.getElementById('menge7').innerHTML = menge7 * portions;
    document.getElementById('menge8').innerHTML = menge8 * portions;
    document.getElementById('menge9').innerHTML = menge9 * portions;
    document.getElementById('menge10').innerHTML = menge10 * portions;
    document.getElementById('menge11').innerHTML = menge11 * portions;
    document.getElementById('menge12').innerHTML = menge12 * portions;
}
function hack() {
    let portions = +document.getElementById('p-number').value;
    let menge1 = 2;
    let menge2 = 2;
    let menge3 = 600;
    let menge4 = 2;
    let menge5 = 1;
    let menge6 = 2;
    let menge7 = 300;
    let menge8 = 2;
    let menge9 = 2;
    let menge10 = 200;
    let menge11 = 200;
    let menge12 = 1;
    if (portions <= 0) {
        alert("Bitte gib mindestens 1 Portion ein.");
    } else
        document.getElementById('menge1').innerHTML = menge1 * portions;
    document.getElementById('menge2').innerHTML = menge2 * portions;
    document.getElementById('menge3').innerHTML = menge3 * portions;
    document.getElementById('menge4').innerHTML = menge4 * portions;
    document.getElementById('menge5').innerHTML = menge5 * portions;
    document.getElementById('menge6').innerHTML = menge6 * portions;
    document.getElementById('menge7').innerHTML = menge7 * portions;
    document.getElementById('menge8').innerHTML = menge8 * portions;
    document.getElementById('menge9').innerHTML = menge9 * portions;
    document.getElementById('menge10').innerHTML = menge10 * portions;
    document.getElementById('menge11').innerHTML = menge11 * portions;
    document.getElementById('menge12').innerHTML = menge12 * portions;
}
function plov() {
    let portions = +document.getElementById('p-number').value;
    let menge1 = 500;
    let menge2 = 250;
    let menge3 = 500;
    let menge4 = 2;
    let menge5 = 1;
    let menge6 = 3;

    if (portions <= 0) {
        alert("Bitte gib mindestens 1 Portion ein.");
    } else
        document.getElementById('menge1').innerHTML = menge1 * portions;
    document.getElementById('menge2').innerHTML = menge2 * portions;
    document.getElementById('menge3').innerHTML = menge3 * portions;
    document.getElementById('menge4').innerHTML = menge4 * portions;
    document.getElementById('menge5').innerHTML = menge5 * portions;
    document.getElementById('menge6').innerHTML = menge6 * portions;

}

function wokimg() {
    document.getElementById('image1').src = `./img/wok.jpg`
    setTimeout(image2, 3500);
}

function image2() {
    document.getElementById('image1').src = `./img/wok3.jpg`
    setTimeout(image3, 3500);
}

function image3() {
    document.getElementById('image1').src = `./img/wok2.jpg`
    setTimeout(wokimg, 3500);
}
