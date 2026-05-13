let cardValue = ["../Images/Cards/Math/1.png", "../Images/Cards/Math/R1.png", "../Images/Cards/Math/2.png", "../Images/Cards/Math/R2.png", "../Images/Cards/Math/3.png", "../Images/Cards/Math/R3.png", "../Images/Cards/Math/4.png", "../Images/Cards/Math/R4.png", "../Images/Cards/Math/5.png", "../Images/Cards/Math/R5.png", "../Images/Cards/Math/6.png", "../Images/Cards/Math/R6.png", "../Images/Cards/Math/7.png", "../Images/Cards/Math/R7.png", "../Images/Cards/Math/8.png", "../Images/Cards/Math/R8.png", "../Images/Cards/Math/9.png", "../Images/Cards/Math/R9.png", "../Images/Cards/Math/10.png", "../Images/Cards/Math/R10.png", "../Images/Cards/Math/11.png", "../Images/Cards/Math/R11.png", "../Images/Cards/Math/12.png", "../Images/Cards/Math/R12.png", "../Images/Cards/Math/13.png", "../Images/Cards/Math/R13.png", "../Images/Cards/Math/14.png", "../Images/Cards/Math/R14.png", "../Images/Cards/Math/15.png", "../Images/Cards/Math/R15.png", "../Images/Cards/Math/16.png", "../Images/Cards/Math/R16.png", "../Images/Cards/Math/17.png", "../Images/Cards/Math/R17.png", "../Images/Cards/Math/18.png", "../Images/Cards/Math/R18"]
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
    cardValue = ["../Images/Cards/Math/1.png", "../Images/Cards/Math/R1.png", "../Images/Cards/Math/2.png", "../Images/Cards/Math/R2.png", "../Images/Cards/Math/3.png", "../Images/Cards/Math/R3.png", "../Images/Cards/Math/4.png", "../Images/Cards/Math/R4.png", "../Images/Cards/Math/5.png", "../Images/Cards/Math/R5.png", "../Images/Cards/Math/6.png", "../Images/Cards/Math/R6.png", "../Images/Cards/Math/7.png", "../Images/Cards/Math/R7.png", "../Images/Cards/Math/8.png", "../Images/Cards/Math/R8.png", "../Images/Cards/Math/9.png", "../Images/Cards/Math/R9.png", "../Images/Cards/Math/10.png", "../Images/Cards/Math/R10.png", "../Images/Cards/Math/11.png", "../Images/Cards/Math/R11.png", "../Images/Cards/Math/12.png", "../Images/Cards/Math/R12.png", "../Images/Cards/Math/13.png", "../Images/Cards/Math/R13.png", "../Images/Cards/Math/14.png", "../Images/Cards/Math/R14.png", "../Images/Cards/Math/15.png", "../Images/Cards/Math/R15.png", "../Images/Cards/Math/16.png", "../Images/Cards/Math/R16.png", "../Images/Cards/Math/17.png", "../Images/Cards/Math/R17.png", "../Images/Cards/Math/18.png", "../Images/Cards/Math/R18"]
}

let card = 0
let score = 0
function flipCard1() {
    //source = https://www.w3schools.com/JSREF/prop_pushbutton_value.asp
    document.getElementById("card1").src = cardValue[0]
    card = 1
    for (let i = 0; i < cardValue.length; i++) {
        if (i%2 != 0) {
            if (card == 1) {
                if (cardValueJeu[card-1] == cardValue[i]) {
                    if (card == 2) {
                        score = score + 1
                    }
                }
            }
        }
    }
}
function flipCard2() {
    document.getElementById("card2").src = "../Images/cardFrontBlank.png"
    card = 2
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

affiche = document.getElementById("divScore");
scoreCard = score + "/18"
affiche.innerHTML = scoreCard