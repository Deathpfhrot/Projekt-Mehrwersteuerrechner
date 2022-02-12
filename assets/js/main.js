// Projekt lev3_1: Mehrwertsteuer-Rechner

// Mehrwertsteuersätze: 19% und 7% auf Lebensmittel

//Mit dieser App können wir "Netto zu Brutto" oder "Brutto zu Netto" rechnen.

let mwstDrauf = document.getElementById('mwstDrauf')
let mwstAbzieh = document.getElementById('mwstAbzieh')

let neunzehn = document.getElementById('neunzehn')
let sieben = document.getElementById('sieben')

let betrag = document.getElementById('betrag')

let pTag = document.getElementById('pTag')

let endPrice1= document.getElementById('endPrice1')
let endPrice2 = document.getElementById('endPrice2')

function draufFunction() {
    pTag.innerHTML = `Nettobetrag(Preis ohne Mehrwertsteuer) in Euro*`
    hTag.innerHTML = `Bruttobetrag (Endpreis)`
}

function abFunction() {
    pTag.innerHTML = `Bruttobetrag (Preis inklusive
        Mehrwertsteuer) in
        Euro`
    hTag.innerHTML = `Nettobetrag`
}

function mwstCalculator() {

    switch (true) {

        case mwstDrauf.checked && neunzehn.checked:
            endPrice1.innerHTML = "<b>" + Number.parseFloat(betrag.value / 100 * 19).toFixed(2) + "€</b>"

            endPrice2.innerHTML = "<b>" + Number.parseFloat(betrag.value / 100 * 119).toFixed(2) + "€</b>"
            
            break;

        case mwstDrauf.checked && sieben.checked:
            endPrice1.innerHTML = "<b>" + Number.parseFloat(betrag.value / 100 * 7).toFixed(2) + "€</b>"
    
            endPrice2.innerHTML = "<b>" + Number.parseFloat(betrag.value / 100 * 107).toFixed(2) + "€</b>"
            
            break;
        
        case mwstAbzieh.checked && neunzehn.checked:
            endPrice1.innerHTML = "<b>" + Number.parseFloat(betrag.value / 119 * 19).toFixed(2) + "€</b>"
        
            endPrice2.innerHTML = "<b>" + Number.parseFloat((betrag.value) - (betrag.value / 119 * 19)).toFixed(2) + "€</b>"
                
            break;
        
        case mwstAbzieh.checked && sieben.checked:
            endPrice1.innerHTML = "<b>" + Number.parseFloat(betrag.value / 107 * 7).toFixed(2) + "€</b>"
            
            endPrice2.innerHTML = "<b>" + Number.parseFloat((betrag.value) - (betrag.value / 107 * 7)).toFixed(2) + "€</b>"
                    
            break;

        default:
            break;
    }
}
