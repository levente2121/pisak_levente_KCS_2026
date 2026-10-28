console.log(osszesOszto(77));

function osszesOszto(szam:number):number[]{
    var osztok:number[] = [];

    for(var i:number = 1; i <= szam; i++){
        if(szam % i == 0){
            osztok.push(i);
        }
    }

    return osztok;

}


console.log(parosDarab([0, 12, 14, 55, 77 ,91]));

function parosDarab(tomb:number[]):number {
    var parosSzamokDb:number = 0;

    for(var i:number = 0; i < tomb.length; i++){
        if(tomb[i] % 2 ==0) {
            parosSzamokDb++;
        }
    }

    return parosSzamokDb;
}

function fuggvenyhivasPalindrom(szovegVisszaad: () => string):boolean{

    var szoveg = szovegVisszaad();
    var szovegFoloslegesKarakterekNelkul = szoveg.replaceAll(" ", "");

    var szovegFoloslegesKarakterekNelkulVisszafele = szovegFoloslegesKarakterekNelkul.split("").reverse().join("");

    if(szovegFoloslegesKarakterekNelkul == szovegFoloslegesKarakterekNelkulVisszafele){
        return true;
    }
    else {
        return false;
    }
}

function szovegVisszaad():string {
    return "indul a gorog aludni";
}

console.log(fuggvenyhivasPalindrom(szovegVisszaad));