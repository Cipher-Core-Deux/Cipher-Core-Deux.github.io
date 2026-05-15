let cardValue = ["../Images/Cards/Math/1.png", "../Images/Cards/Math/R1.png", "../Images/Cards/Math/2.png", "../Images/Cards/Math/R2.png", "../Images/Cards/Math/3.png", "../Images/Cards/Math/R3.png", "../Images/Cards/Math/4.png", "../Images/Cards/Math/R4.png", "../Images/Cards/Math/5.png", "../Images/Cards/Math/R5.png", "../Images/Cards/Math/6.png", "../Images/Cards/Math/R6.png", "../Images/Cards/Math/7.png", "../Images/Cards/Math/R7.png", "../Images/Cards/Math/8.png", "../Images/Cards/Math/R8.png", "../Images/Cards/Math/9.png", "../Images/Cards/Math/R9.png", "../Images/Cards/Math/10.png", "../Images/Cards/Math/R10.png", "../Images/Cards/Math/11.png", "../Images/Cards/Math/R11.png", "../Images/Cards/Math/12.png", "../Images/Cards/Math/R12.png", "../Images/Cards/Math/13.png", "../Images/Cards/Math/R13.png", "../Images/Cards/Math/14.png", "../Images/Cards/Math/R14.png", "../Images/Cards/Math/15.png", "../Images/Cards/Math/R15.png", "../Images/Cards/Math/16.png", "../Images/Cards/Math/R16.png", "../Images/Cards/Math/17.png", "../Images/Cards/Math/R17.png", "../Images/Cards/Math/18.png", "../Images/Cards/Math/R18.png"]
let cardValueJeu = [""];
console.log(cardValue.length)
function randomizer() {
    document.getElementById("card1").src = "../Images/cardBack.png"
    document.getElementById("card2").src = "../Images/cardBack.png"
    document.getElementById("card3").src = "../Images/cardBack.png"
    document.getElementById("card4").src = "../Images/cardBack.png"
    document.getElementById("card5").src = "../Images/cardBack.png"
    document.getElementById("card6").src = "../Images/cardBack.png"
    document.getElementById("card7").src = "../Images/cardBack.png"
    document.getElementById("card8").src = "../Images/cardBack.png"
    document.getElementById("card9").src = "../Images/cardBack.png"
    document.getElementById("card10").src = "../Images/cardBack.png"
    document.getElementById("card11").src = "../Images/cardBack.png"
    document.getElementById("card12").src = "../Images/cardBack.png"
    document.getElementById("card13").src = "../Images/cardBack.png"
    document.getElementById("card14").src = "../Images/cardBack.png"
    document.getElementById("card15").src = "../Images/cardBack.png"
    document.getElementById("card16").src = "../Images/cardBack.png"
    document.getElementById("card17").src = "../Images/cardBack.png"
    document.getElementById("card18").src = "../Images/cardBack.png"
    document.getElementById("card19").src = "../Images/cardBack.png"
    document.getElementById("card20").src = "../Images/cardBack.png"
    document.getElementById("card21").src = "../Images/cardBack.png"
    document.getElementById("card22").src = "../Images/cardBack.png"
    document.getElementById("card23").src = "../Images/cardBack.png"
    document.getElementById("card24").src = "../Images/cardBack.png"
    document.getElementById("card25").src = "../Images/cardBack.png"
    document.getElementById("card26").src = "../Images/cardBack.png"
    document.getElementById("card27").src = "../Images/cardBack.png"
    document.getElementById("card28").src = "../Images/cardBack.png"
    document.getElementById("card29").src = "../Images/cardBack.png"
    document.getElementById("card30").src = "../Images/cardBack.png"
    document.getElementById("card31").src = "../Images/cardBack.png"
    document.getElementById("card32").src = "../Images/cardBack.png"
    document.getElementById("card33").src = "../Images/cardBack.png"
    document.getElementById("card34").src = "../Images/cardBack.png"
    document.getElementById("card35").src = "../Images/cardBack.png"
    document.getElementById("card36").src = "../Images/cardBack.png"
    let j;
    cardValueJeu = [""];
    for (let i=0; i < 36; i++) {
        j = parseInt(Math.floor(Math.random() * cardValue.length))
        cardValueJeu[i] = cardValue[j]
        cardValue.splice(j, 1) 
    }
    cardValue = ["../Images/Cards/Math/1.png", "../Images/Cards/Math/R1.png", "../Images/Cards/Math/2.png", "../Images/Cards/Math/R2.png", "../Images/Cards/Math/3.png", "../Images/Cards/Math/R3.png", "../Images/Cards/Math/4.png", "../Images/Cards/Math/R4.png", "../Images/Cards/Math/5.png", "../Images/Cards/Math/R5.png", "../Images/Cards/Math/6.png", "../Images/Cards/Math/R6.png", "../Images/Cards/Math/7.png", "../Images/Cards/Math/R7.png", "../Images/Cards/Math/8.png", "../Images/Cards/Math/R8.png", "../Images/Cards/Math/9.png", "../Images/Cards/Math/R9.png", "../Images/Cards/Math/10.png", "../Images/Cards/Math/R10.png", "../Images/Cards/Math/11.png", "../Images/Cards/Math/R11.png", "../Images/Cards/Math/12.png", "../Images/Cards/Math/R12.png", "../Images/Cards/Math/13.png", "../Images/Cards/Math/R13.png", "../Images/Cards/Math/14.png", "../Images/Cards/Math/R14.png", "../Images/Cards/Math/15.png", "../Images/Cards/Math/R15.png", "../Images/Cards/Math/16.png", "../Images/Cards/Math/R16.png", "../Images/Cards/Math/17.png", "../Images/Cards/Math/R17.png", "../Images/Cards/Math/18.png", "../Images/Cards/Math/R18.png"]
}
let preCard = 0
let card = 0
let score = 0
let flip = 0
let preCardNum = ""
function cardCheck(cardNum) {
    card = cardValue.indexOf(cardValueJeu[parseInt(cardNum[4])-1])
    console.log(card)
    console.log(preCard)
    console.log(score)
    if (flip == 1) {
        if (preCard == card){
            score++
            console.log(score)
            preCard = 0
        } else {
            setTimeout(() => {
                document.getElementById(cardNum).src = "../Images/cardBack.png"
                document.getElementById(preCardNum).src = "../Images/cardBack.png"
                preCard = 0
            }, 3000);
        } 
    } else {
    flip = 1
    preCard = card
    preCardNum = cardNum
    }
}
function flipCard1() {
    //source = https://www.w3schools.com/JSREF/prop_pushbutton_value.asp
    document.getElementById("card1").src = cardValueJeu[0]
    cardCheck("card1")
}
function flipCard2() {
    document.getElementById("card2").src = cardValueJeu[1]
    cardCheck("card2")
}
function flipCard3() {
    document.getElementById("card3").src = cardValueJeu[2]
    cardCheck("card3")
}
function flipCard4() {
    document.getElementById("card4").src = cardValueJeu[3]
    cardCheck("card4")
}
function flipCard5() {
    document.getElementById("card5").src = cardValueJeu[4]
    cardCheck("card5")
}
function flipCard6() {
    document.getElementById("card6").src = cardValueJeu[5]
    cardCheck("card5")
}
function flipCard7() {
    document.getElementById("card7").src = cardValueJeu[6]
    cardCheck("card5")
}
function flipCard8() {
    document.getElementById("card8").src = cardValueJeu[7]
    cardCheck("card5")
}
function flipCard9() {
    document.getElementById("card9").src = cardValueJeu[8]
    cardCheck("card5")
}
function flipCard10() {
    document.getElementById("card10").src = cardValueJeu[9]
    cardCheck("card5")
}
function flipCard11() {
    document.getElementById("card11").src = cardValueJeu[10]
    cardCheck("card5")
}
function flipCard12() {
    document.getElementById("card12").src = cardValueJeu[11]
    cardCheck("card5")
}
function flipCard13() {
    document.getElementById("card13").src = cardValueJeu[12]
    cardCheck("card5")
}
function flipCard14() {
    document.getElementById("card14").src = cardValueJeu[13]
    cardCheck("card5")
}
function flipCard15() {
    document.getElementById("card15").src = cardValueJeu[14]
    cardCheck("card5")
}
function flipCard16() {
    document.getElementById("card16").src = cardValueJeu[15]
    cardCheck("card5")
}
function flipCard17() {
    document.getElementById("card17").src = cardValueJeu[16]
    cardCheck("card5")
}
function flipCard18() {
    document.getElementById("card18").src = cardValueJeu[17]
    cardCheck("card5")
}
function flipCard19() {
    document.getElementById("card19").src = cardValueJeu[18]
    cardCheck("card5")
}
function flipCard20() {
    document.getElementById("card20").src = cardValueJeu[19]
    cardCheck("card5")
}
function flipCard21() {
    document.getElementById("card21").src = cardValueJeu[20]
    cardCheck("card5")
}
function flipCard22() {
    document.getElementById("card22").src = cardValueJeu[21]
    cardCheck("card5")
}
function flipCard23() {
    document.getElementById("card23").src = cardValueJeu[22]
    cardCheck("card5")
}
function flipCard24() {
    document.getElementById("card24").src = cardValueJeu[23]
    cardCheck("card5")
}
function flipCard25() {
    document.getElementById("card25").src = cardValueJeu[24]
    cardCheck("card5")
}
function flipCard26() {
    document.getElementById("card26").src = cardValueJeu[25]
    cardCheck("card5")
}
function flipCard27() {
    document.getElementById("card27").src = cardValueJeu[26]
    cardCheck("card5")
}
function flipCard28() {
    document.getElementById("card28").src = cardValueJeu[27]
    cardCheck("card5")
}
function flipCard29() {
    document.getElementById("card29").src = cardValueJeu[28]
    cardCheck("card5")
}
function flipCard30() {
    document.getElementById("card30").src = cardValueJeu[29]
    cardCheck("card5")
}
function flipCard31() {
    document.getElementById("card31").src = cardValueJeu[30]
    cardCheck("card5")
}
function flipCard32() {
    document.getElementById("card32").src = cardValueJeu[31]
    cardCheck("card5")
}
function flipCard33() {
    document.getElementById("card33").src = cardValueJeu[32]
    cardCheck("card5")
}
function flipCard34() {
    document.getElementById("card34").src = cardValueJeu[33]
    cardCheck("card5")
}
function flipCard35() {
    document.getElementById("card35").src = cardValueJeu[34]
    cardCheck("card5")
}
function flipCard36() {
    document.getElementById("card36").src = cardValueJeu[35]
    cardCheck("card5")
}

affiche = document.getElementById("divScore");
scoreCard = score + "/18"
affiche.innerHTML = scoreCard