let cardValue = ["../Images/Cards/Chem/1.png", "../Images/Cards/Chem/R1.png", "../Images/Cards/Chem/2.png", "../Images/Cards/Chem/R2.png", "../Images/Cards/Chem/3.png", "../Images/Cards/Chem/R3.png", "../Images/Cards/Chem/4.png", "../Images/Cards/Chem/R4.png", "../Images/Cards/Chem/5.png", "../Images/Cards/Chem/R5.png", "../Images/Cards/Chem/6.png", "../Images/Cards/Chem/R6.png", "../Images/Cards/Chem/7.png", "../Images/Cards/Chem/R7.png", "../Images/Cards/Chem/8.png", "../Images/Cards/Chem/R8.png", "../Images/Cards/Chem/9.png", "../Images/Cards/Chem/R9.png", "../Images/Cards/Chem/10.png", "../Images/Cards/Chem/R10.png", "../Images/Cards/Chem/11.png", "../Images/Cards/Chem/R11.png", "../Images/Cards/Chem/12.png", "../Images/Cards/Chem/R12.png", "../Images/Cards/Chem/13.png", "../Images/Cards/Chem/R13.png", "../Images/Cards/Chem/14.png", "../Images/Cards/Chem/R14.png", "../Images/Cards/Chem/15.png", "../Images/Cards/Chem/R15.png", "../Images/Cards/Chem/16.png", "../Images/Cards/Chem/R16.png", "../Images/Cards/Chem/17.png", "../Images/Cards/Chem/R17.png", "../Images/Cards/Chem/18.png", "../Images/Cards/Chem/R18.png"]
let cardValueJeu = [""];
console.log(cardValue.length)
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
    cardValue = ["../Images/Cards/Chem/1.png", "../Images/Cards/Chem/R1.png", "../Images/Cards/Chem/2.png", "../Images/Cards/Chem/R2.png", "../Images/Cards/Chem/3.png", "../Images/Cards/Chem/R3.png", "../Images/Cards/Chem/4.png", "../Images/Cards/Chem/R4.png", "../Images/Cards/Chem/5.png", "../Images/Cards/Chem/R5.png", "../Images/Cards/Chem/6.png", "../Images/Cards/Chem/R6.png", "../Images/Cards/Chem/7.png", "../Images/Cards/Chem/R7.png", "../Images/Cards/Chem/8.png", "../Images/Cards/Chem/R8.png", "../Images/Cards/Chem/9.png", "../Images/Cards/Chem/R9.png", "../Images/Cards/Chem/10.png", "../Images/Cards/Chem/R10.png", "../Images/Cards/Chem/11.png", "../Images/Cards/Chem/R11.png", "../Images/Cards/Chem/12.png", "../Images/Cards/Chem/R12.png", "../Images/Cards/Chem/13.png", "../Images/Cards/Chem/R13.png", "../Images/Cards/Chem/14.png", "../Images/Cards/Chem/R14.png", "../Images/Cards/Chem/15.png", "../Images/Cards/Chem/R15.png", "../Images/Cards/Chem/16.png", "../Images/Cards/Chem/R16.png", "../Images/Cards/Chem/17.png", "../Images/Cards/Chem/R17.png", "../Images/Cards/Chem/18.png", "../Images/Cards/Chem/R18.png"]
}
let preCrad
let card = 0
let score = 0
let flip = 0
function flipCard1() {
    //source = https://www.w3schools.com/JSREF/prop_pushbutton_value.asp
    document.getElementById("card1").src = cardValueJeu[0]
    card = cardValue.indexOf(cardValueJeu[0])
    console.log(card)
    if (flip = 1) {
        if (preCard = card){
            score++
        } else {
            document.getElementById("card8").src = "../Images/cardBack"
        } 
    } else {
    flip = 0
    preCard = card
    document.getElementById("card1").src = "../Images/cardBack"
    }
}
function flipCard2() {
    document.getElementById("card2").src = cardValueJeu[1]
    card = cardValue.indexOf(cardValueJeu[1])
    console.log(card)
    if (flip = 1) {
        if (preCard = card){
            score++
        } else {
            document.getElementById("card8").src = "../Images/cardBack"
        } 
    } else {
    flip = 0
    preCard = card
    document.getElementById("card2").src = "../Images/cardBack"
    }
}
function flipCard3() {
    document.getElementById("card3").src = cardValueJeu[2]
    card = cardValue.indexOf(cardValueJeu[2])
    console.log(card)
    if (flip = 1) {
        if (preCard = card){
            score++
        } else {
            document.getElementById("card8").src = "../Images/cardBack"
        } 
    } else {
    flip = 0
    preCard = card
    document.getElementById("card3").src = "../Images/cardBack"
    }
}
function flipCard4() {
    document.getElementById("card4").src = cardValueJeu[3]
    card = cardValue.indexOf(cardValueJeu[3])
    console.log(card)
    if (flip = 1) {
        if (preCard = card){
            score++
        } else {
            document.getElementById("card8").src = "../Images/cardBack"
        } 
    } else {
    flip = 0
    preCard = card
    document.getElementById("card4").src = "../Images/cardBack"
    }
}
function flipCard5() {
    document.getElementById("card5").src = cardValueJeu[4]
    card = cardValue.indexOf(cardValueJeu[4])
    console.log(card)
    if (flip = 1) {
        if (preCard = card){
            score++
        } else {
            document.getElementById("card8").src = "../Images/cardBack"
        } 
    } else {
    flip = 0
    preCard = card
    document.getElementById("card5").src = "../Images/cardBack"
    }
}
function flipCard6() {
    document.getElementById("card6").src = cardValueJeu[5]
    card = cardValue.indexOf(cardValueJeu[5])
    console.log(card)
    if (flip = 1) {
        if (preCard = card){
            score++
        } else {
            document.getElementById("card8").src = "../Images/cardBack"
        } 
    } else {
    flip = 0
    preCard = card
    document.getElementById("card6").src = "../Images/cardBack"
    }
}
function flipCard7() {
    document.getElementById("card7").src = cardValueJeu[6]
    card = cardValue.indexOf(cardValueJeu[6])
    console.log(card)
    if (flip = 1) {
        if (preCard = card){
            score++
        } else {
            document.getElementById("card8").src = "../Images/cardBack"
        } 
    } else {
    flip = 0
    preCard = card
    document.getElementById("card7").src = "../Images/cardBack"
    }
}
function flipCard8() {
    document.getElementById("card8").src = cardValueJeu[7]
    card = cardValue.indexOf(cardValueJeu[7])
    console.log(card)
    if (flip = 1) {
        if (preCard = card){
            score++
        } else {
            document.getElementById("card8").src = "../Images/cardBack"
        }
    } else {
    flip = 0
    preCard = card
    document.getElementById("card8").src = "../Images/cardBack"
    }
}
function flipCard9() {
    document.getElementById("card9").src = cardValueJeu[8]
}
function flipCard10() {
    document.getElementById("card10").src = cardValueJeu[9]
}
function flipCard11() {
    document.getElementById("card11").src = cardValueJeu[10]
}
function flipCard12() {
    document.getElementById("card12").src = cardValueJeu[11]
}
function flipCard13() {
    document.getElementById("card13").src = cardValueJeu[12]
}
function flipCard14() {
    document.getElementById("card14").src = cardValueJeu[13]
}
function flipCard15() {
    document.getElementById("card15").src = cardValueJeu[14]
}
function flipCard16() {
    document.getElementById("card16").src = cardValueJeu[15]
}
function flipCard17() {
    document.getElementById("card17").src = cardValueJeu[16]
}
function flipCard18() {
    document.getElementById("card18").src = cardValueJeu[17]
}
function flipCard19() {
    document.getElementById("card19").src = cardValueJeu[18]
}
function flipCard20() {
    document.getElementById("card20").src = cardValueJeu[19]
}
function flipCard21() {
    document.getElementById("card21").src = cardValueJeu[20]
}
function flipCard22() {
    document.getElementById("card22").src = cardValueJeu[21]
}
function flipCard23() {
    document.getElementById("card23").src = cardValueJeu[22]
}
function flipCard24() {
    document.getElementById("card24").src = cardValueJeu[23]
}
function flipCard25() {
    document.getElementById("card25").src = cardValueJeu[24]
}
function flipCard26() {
    document.getElementById("card26").src = cardValueJeu[25]
}
function flipCard27() {
    document.getElementById("card27").src = cardValueJeu[26]
}
function flipCard28() {
    document.getElementById("card28").src = cardValueJeu[27]
}
function flipCard29() {
    document.getElementById("card29").src = cardValueJeu[28]
}
function flipCard30() {
    document.getElementById("card30").src = cardValueJeu[29]
}
function flipCard31() {
    document.getElementById("card31").src = cardValueJeu[30]
}
function flipCard32() {
    document.getElementById("card32").src = cardValueJeu[31]
}
function flipCard33() {
    document.getElementById("card33").src = cardValueJeu[32]
}
function flipCard34() {
    document.getElementById("card34").src = cardValueJeu[33]
}
function flipCard35() {
    document.getElementById("card35").src = cardValueJeu[34]
}
function flipCard36() {
    document.getElementById("card36").src = cardValueJeu[35]
}

affiche = document.getElementById("divScore");
scoreCard = score + "/18"
affiche.innerHTML = scoreCard
