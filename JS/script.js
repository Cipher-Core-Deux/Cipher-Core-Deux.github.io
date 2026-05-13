let cardValue = ["../Images/Cards/Math/1.png", "../Images/Cards/Math/R1.png", "../Images/Cards/Math/2.png", "../Images/Cards/Math/R2.png", "../Images/Cards/Math/3.png", "../Images/Cards/Math/R3.png", "../Images/Cards/Math/4.png", "../Images/Cards/Math/R4.png", "../Images/Cards/Math/5.png", "../Images/Cards/Math/R5.png", "../Images/Cards/Math/6.png", "../Images/Cards/Math/R6.png", "../Images/Cards/Math/7.png", "../Images/Cards/Math/R7.png", "../Images/Cards/Math/8.png", "../Images/Cards/Math/R8.png", "../Images/Cards/Math/9.png", "../Images/Cards/Math/R9.png", "../Images/Cards/Math/10.png", "../Images/Cards/Math/R10.png", "../Images/Cards/Math/11.png", "../Images/Cards/Math/R11.png", "../Images/Cards/Math/12.png", "../Images/Cards/Math/R12.png", "../Images/Cards/Math/13.png", "../Images/Cards/Math/R13.png", "../Images/Cards/Math/14.png", "../Images/Cards/Math/R14.png", "../Images/Cards/Math/15.png", "../Images/Cards/Math/R15.png", "../Images/Cards/Math/16.png", "../Images/Cards/Math/R16.png", "../Images/Cards/Math/17.png", "../Images/Cards/Math/R17.png", "../Images/Cards/Math/18.png", "../Images/Cards/Math/R18.png"]
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
    cardValue = ["../Images/Cards/Math/1.png", "../Images/Cards/Math/R1.png", "../Images/Cards/Math/2.png", "../Images/Cards/Math/R2.png", "../Images/Cards/Math/3.png", "../Images/Cards/Math/R3.png", "../Images/Cards/Math/4.png", "../Images/Cards/Math/R4.png", "../Images/Cards/Math/5.png", "../Images/Cards/Math/R5.png", "../Images/Cards/Math/6.png", "../Images/Cards/Math/R6.png", "../Images/Cards/Math/7.png", "../Images/Cards/Math/R7.png", "../Images/Cards/Math/8.png", "../Images/Cards/Math/R8.png", "../Images/Cards/Math/9.png", "../Images/Cards/Math/R9.png", "../Images/Cards/Math/10.png", "../Images/Cards/Math/R10.png", "../Images/Cards/Math/11.png", "../Images/Cards/Math/R11.png", "../Images/Cards/Math/12.png", "../Images/Cards/Math/R12.png", "../Images/Cards/Math/13.png", "../Images/Cards/Math/R13.png", "../Images/Cards/Math/14.png", "../Images/Cards/Math/R14.png", "../Images/Cards/Math/15.png", "../Images/Cards/Math/R15.png", "../Images/Cards/Math/16.png", "../Images/Cards/Math/R16.png", "../Images/Cards/Math/17.png", "../Images/Cards/Math/R17.png", "../Images/Cards/Math/18.png", "../Images/Cards/Math/R18.png"]
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
        } 
    } else {
    flip = 0
    preCard = card
    }
}
function flipCard2() {
    document.getElementById("card2").src = cardValueJeu[1]
    card = cardValue.indexOf(cardValueJeu[0])
    console.log(card)
    if (flip = 1) {
        if (preCard = card){
            score++
        } 
    } else {
    flip = 0
    preCard = card
    }
}
function flipCard3() {
    document.getElementById("card3").src = cardValueJeu[2]
}
function flipCard4() {
    document.getElementById("card4").src = cardValueJeu[3]
}
function flipCard5() {
    document.getElementById("card5").src = cardValueJeu[4]
}
function flipCard6() {
    document.getElementById("card6").src = cardValueJeu[5]
}
function flipCard7() {
    document.getElementById("card7").src = cardValueJeu[6]
}
function flipCard8() {
    document.getElementById("card8").src = cardValueJeu[7]
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