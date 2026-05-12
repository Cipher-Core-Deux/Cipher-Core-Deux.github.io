let cardValue = ["Résous : 2x+7=19", "Réponse : 6", "Factorise : x²-9", "Réponse : (x-3)(x+3)", "Résous : x²-16=0", "x=±4", "Simplifie : (3x^2)(2x^3)", "Réponse : 6x^5", "Quelle est la pente de la droite passant par (2,3) et (6,11) ?", "Réponse : 2", "Développe : (x+5)(x-2)", "Réponse : x^2+3x-10", "Résous : 3(x-4)=18", "Réponse : 10", "Quel est le sommet de y=(x-2)^2+5 ?", "Réponse : (2,5)", "Simplifie : 12x^2/3x", "Réponse : 4x", "Résous : sqrt(x+1)=5", "Réponse : 24", "Factorise : x^2+7x+12", "Réponse : (x+3)(x+4)", "Quelle est la valeur de sin(30∘) ?", "Réponse : 1/2", "Convertis 0.625 en fraction.", "Réponse : 5/8", "Résous : 5x-12=3", "Réponse : 3", "Développe : (2x-1)^2", "Réponse : 4x^2-4x+1", "Calcule : 3^4", "Réponse : 81", "Simplifie : sqrt(72)", "Réponse : 6sqrt(2)", "Quelle est l'équation d'un cercle centré à l'origine avec un rayon de 5 ?", "Réponse : x^2+y^2=25"]
let cardValueJeu = [""];
function randomizer() {
    let j;
    cardValueJeu = [""];
    for (let i=0; i < 36; i++) {
        j = parseInt(Math.floor(Math.random() * cardValue.length))
        console.log(j + " " + cardValue[j] )
        cardValueJeu[i] = cardValue[j]
        console.log(cardValue.toString())
        console.log(cardValueJeu.toString() )
        cardValue.splice(j, 1) 
    }
    cardValue = ["Résous : 2x+7=19", "Réponse : 6", "Factorise : x²-9", "Réponse : (x-3)(x+3)", "Résous : x²-16=0", "x=±4", "Simplifie : (3x^2)(2x^3)", "Réponse : 6x^5", "Quelle est la pente de la droite passant par (2,3) et (6,11) ?", "Réponse : 2", "Développe : (x+5)(x-2)", "Réponse : x^2+3x-10", "Résous : 3(x-4)=18", "Réponse : 10", "Quel est le sommet de y=(x-2)^2+5 ?", "Réponse : (2,5)", "Simplifie : 12x^2/3x", "Réponse : 4x", "Résous : sqrt(x+1)=5", "Réponse : 24", "Factorise : x^2+7x+12", "Réponse : (x+3)(x+4)", "Quelle est la valeur de sin(30∘) ?", "Réponse : 1/2", "Convertis 0.625 en fraction.", "Réponse : 5/8", "Résous : 5x-12=3", "Réponse : 3", "Développe : (2x-1)^2", "Réponse : 4x^2-4x+1", "Calcule : 3^4", "Réponse : 81", "Simplifie : sqrt(72)", "Réponse : 6sqrt(2)", "Quelle est l'équation d'un cercle centré à l'origine avec un rayon de 5 ?", "Réponse : x^2+y^2=25"]
}
function flipCard1() {
    //source = https://www.w3schools.com/JSREF/prop_pushbutton_value.asp
    document.getElementById("card1").src = "../Images/cardFrontBlank.png"
    for (let i = 0; i < cardValue.length; i++) {
        if (i%2 != 0) {
            if (cardValueJeu[0] == cardValue[i]) {
                
            }
        }
    }
}
function flipCard2() {
    document.getElementById("card2").src = "../Images/cardFrontBlank.png"
}
function flipCard3() {
    document.getElementById("card3").src = "../Images/cardFrontBlank.png"
}
function flipCard4() {
    document.getElementById("card4").src = "../Images/cardFrontBlank.png"
}
function flipCard5() {
    document.getElementById("card5").src = "../Images/cardFrontBlank.png"
}
function flipCard6() {
    document.getElementById("card6").src = "../Images/cardFrontBlank.png"
}
function flipCard7() {
    document.getElementById("card7").src = "../Images/cardFrontBlank.png"
}
function flipCard8() {
    document.getElementById("card8").src = "../Images/cardFrontBlank.png"
}
function flipCard9() {
    document.getElementById("card9").src = "../Images/cardFrontBlank.png"
}
function flipCard10() {
    document.getElementById("card10").src = "../Images/cardFrontBlank.png"
}
function flipCard11() {
    document.getElementById("card11").src = "../Images/cardFrontBlank.png"
}
function flipCard12() {
    document.getElementById("card12").src = "../Images/cardFrontBlank.png"
}
function flipCard13() {
    document.getElementById("card13").src = "../Images/cardFrontBlank.png"
}
function flipCard14() {
    document.getElementById("card14").src = "../Images/cardFrontBlank.png"
}
function flipCard15() {
    document.getElementById("card15").src = "../Images/cardFrontBlank.png"
}
function flipCard16() {
    document.getElementById("card16").src = "../Images/cardFrontBlank.png"
}
function flipCard17() {
    document.getElementById("card17").src = "../Images/cardFrontBlank.png"
}
function flipCard18() {
    document.getElementById("card18").src = "../Images/cardFrontBlank.png"
}
function flipCard19() {
    document.getElementById("card19").src = "../Images/cardFrontBlank.png"
}
function flipCard20() {
    document.getElementById("card20").src = "../Images/cardFrontBlank.png"
}
function flipCard21() {
    document.getElementById("card21").src = "../Images/cardFrontBlank.png"
}
function flipCard22() {
    document.getElementById("card22").src = "../Images/cardFrontBlank.png"
}
function flipCard23() {
    document.getElementById("card23").src = "../Images/cardFrontBlank.png"
}
function flipCard24() {
    document.getElementById("card24").src = "../Images/cardFrontBlank.png"
}
function flipCard25() {
    document.getElementById("card25").src = "../Images/cardFrontBlank.png"
}
function flipCard26() {
    document.getElementById("card26").src = "../Images/cardFrontBlank.png"
}
function flipCard27() {
    document.getElementById("card27").src = "../Images/cardFrontBlank.png"
}
function flipCard28() {
    document.getElementById("card28").src = "../Images/cardFrontBlank.png"
}
function flipCard29() {
    document.getElementById("card29").src = "../Images/cardFrontBlank.png"
}
function flipCard30() {
    document.getElementById("card30").src = "../Images/cardFrontBlank.png"
}
function flipCard31() {
    document.getElementById("card31").src = "../Images/cardFrontBlank.png"
}
function flipCard32() {
    document.getElementById("card32").src = "../Images/cardFrontBlank.png"
}
function flipCard33() {
    document.getElementById("card33").src = "../Images/cardFrontBlank.png"
}
function flipCard34() {
    document.getElementById("card34").src = "../Images/cardFrontBlank.png"
}
function flipCard35() {
    document.getElementById("card35").src = "../Images/cardFrontBlank.png"
}
function flipCard36() {
    document.getElementById("card36").src = "../Images/cardFrontBlank.png"
}
