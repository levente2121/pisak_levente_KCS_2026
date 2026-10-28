"use strict";
console.log(osszesOszto(77));
function osszesOszto(szam) {
    var osztok = [];
    for (var i = 1; i <= szam; i++) {
        if (szam % i == 0) {
            osztok.push(i);
        }
    }
    return osztok;
}
console.log(parosDarab([0, 12, 14, 55, 77, 91]));
function parosDarab(tomb) {
    var parosSzamokDb = 0;
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] % 2 == 0) {
            parosSzamokDb++;
        }
    }
    return parosSzamokDb;
}
function fuggvenyhivasPalindrom(szovegVisszaad) {
    var szoveg = szovegVisszaad();
    var szovegFoloslegesKarakterekNelkul = szoveg.replaceAll(" ", "");
    var szovegFoloslegesKarakterekNelkulVisszafele = szovegFoloslegesKarakterekNelkul.split("").reverse().join("");
    if (szovegFoloslegesKarakterekNelkul == szovegFoloslegesKarakterekNelkulVisszafele) {
        return true;
    }
    else {
        return false;
    }
}
function szovegVisszaad() {
    return "indul a gorog aludni";
}
console.log(fuggvenyhivasPalindrom(szovegVisszaad));
