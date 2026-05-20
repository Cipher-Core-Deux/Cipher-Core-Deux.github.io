let cardValue = ["../Images/Cards/Math/1.png", "../Images/Cards/Math/R1.png", "../Images/Cards/Math/2.png", "../Images/Cards/Math/R2.png", "../Images/Cards/Math/3.png", "../Images/Cards/Math/R3.png", "../Images/Cards/Math/4.png", "../Images/Cards/Math/R4.png", "../Images/Cards/Math/5.png", "../Images/Cards/Math/R5.png", "../Images/Cards/Math/6.png", "../Images/Cards/Math/R6.png", "../Images/Cards/Math/7.png", "../Images/Cards/Math/R7.png", "../Images/Cards/Math/8.png", "../Images/Cards/Math/R8.png", "../Images/Cards/Math/9.png", "../Images/Cards/Math/R9.png", "../Images/Cards/Math/10.png", "../Images/Cards/Math/R10.png", "../Images/Cards/Math/11.png", "../Images/Cards/Math/R11.png", "../Images/Cards/Math/12.png", "../Images/Cards/Math/R12.png", "../Images/Cards/Math/13.png", "../Images/Cards/Math/R13.png", "../Images/Cards/Math/14.png", "../Images/Cards/Math/R14.png", "../Images/Cards/Math/15.png", "../Images/Cards/Math/R15.png", "../Images/Cards/Math/16.png", "../Images/Cards/Math/R16.png", "../Images/Cards/Math/17.png", "../Images/Cards/Math/R17.png", "../Images/Cards/Math/18.png", "../Images/Cards/Math/R18.png"]
let cardValueJeu = [""];
var affiche = document.getElementById("divScore");
var scoreCard = "Matches : 0 / 18"
affiche.innerHTML = scoreCard
console.log(cardValue.length)
let j;
cardValueJeu = [""];
for (let i = 0; i < 36; i++) {
    j = parseInt(Math.floor(Math.random() * cardValue.length))
    cardValueJeu[i] = cardValue[j]
    cardValue.splice(j, 1)
}
cardValue = ["../Images/Cards/Math/1.png", "../Images/Cards/Math/R1.png", "../Images/Cards/Math/2.png", "../Images/Cards/Math/R2.png", "../Images/Cards/Math/3.png", "../Images/Cards/Math/R3.png", "../Images/Cards/Math/4.png", "../Images/Cards/Math/R4.png", "../Images/Cards/Math/5.png", "../Images/Cards/Math/R5.png", "../Images/Cards/Math/6.png", "../Images/Cards/Math/R6.png", "../Images/Cards/Math/7.png", "../Images/Cards/Math/R7.png", "../Images/Cards/Math/8.png", "../Images/Cards/Math/R8.png", "../Images/Cards/Math/9.png", "../Images/Cards/Math/R9.png", "../Images/Cards/Math/10.png", "../Images/Cards/Math/R10.png", "../Images/Cards/Math/11.png", "../Images/Cards/Math/R11.png", "../Images/Cards/Math/12.png", "../Images/Cards/Math/R12.png", "../Images/Cards/Math/13.png", "../Images/Cards/Math/R13.png", "../Images/Cards/Math/14.png", "../Images/Cards/Math/R14.png", "../Images/Cards/Math/15.png", "../Images/Cards/Math/R15.png", "../Images/Cards/Math/16.png", "../Images/Cards/Math/R16.png", "../Images/Cards/Math/17.png", "../Images/Cards/Math/R17.png", "../Images/Cards/Math/18.png", "../Images/Cards/Math/R18.png"]
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
    for (let i = 0; i < 36; i++) {
        j = parseInt(Math.floor(Math.random() * cardValue.length))
        cardValueJeu[i] = cardValue[j]
        cardValue.splice(j, 1)
    }
    cardValue = ["../Images/Cards/Math/1.png", "../Images/Cards/Math/R1.png", "../Images/Cards/Math/2.png", "../Images/Cards/Math/R2.png", "../Images/Cards/Math/3.png", "../Images/Cards/Math/R3.png", "../Images/Cards/Math/4.png", "../Images/Cards/Math/R4.png", "../Images/Cards/Math/5.png", "../Images/Cards/Math/R5.png", "../Images/Cards/Math/6.png", "../Images/Cards/Math/R6.png", "../Images/Cards/Math/7.png", "../Images/Cards/Math/R7.png", "../Images/Cards/Math/8.png", "../Images/Cards/Math/R8.png", "../Images/Cards/Math/9.png", "../Images/Cards/Math/R9.png", "../Images/Cards/Math/10.png", "../Images/Cards/Math/R10.png", "../Images/Cards/Math/11.png", "../Images/Cards/Math/R11.png", "../Images/Cards/Math/12.png", "../Images/Cards/Math/R12.png", "../Images/Cards/Math/13.png", "../Images/Cards/Math/R13.png", "../Images/Cards/Math/14.png", "../Images/Cards/Math/R14.png", "../Images/Cards/Math/15.png", "../Images/Cards/Math/R15.png", "../Images/Cards/Math/16.png", "../Images/Cards/Math/R16.png", "../Images/Cards/Math/17.png", "../Images/Cards/Math/R17.png", "../Images/Cards/Math/18.png", "../Images/Cards/Math/R18.png"]
    affiche.innerHTML = "Matches : 0 / 18"
    score = 0
}
let preCard = 0
let card = 0
let score = 0
let flip = 0
let preCardNum = ""
function cardCheck(cardNum) {
    console.log(cardNum)
    card = cardValue.indexOf(cardValueJeu[cardNum - 1])
    console.log(card)
    console.log(cardValue[cardValue.indexOf(cardValueJeu[cardNum - 1])])
    console.log(cardValueJeu[cardNum - 1])
    console.log(preCard)
    console.log(score)
    if (flip == 1) {
        if (card % 2 == 0)  {
            for (var i=0; i<36; i+1) {
                if (document.getElementById("card" + i).src == cardValue[i].contains(R)) {
                    console.log("cheese")
                }
            }
        }
        if (card % 2 == 0) {
            if (preCard == card + 1) {
                score++
                console.log(score)
                preCard = 0
                flip = 0
            } else {
                preCard = 0
                flip = 0
                setTimeout(() => {
                    document.getElementById("card" + cardNum).src = "../Images/cardBack.png"
                    document.getElementById("card" + preCardNum).src = "../Images/cardBack.png"
                }, 1000);
            }
        } else {
            if (preCard == card - 1) {
                score++
                console.log(score)
                preCard = 0
                flip = 0
                scoreCard = "Matches : " + score + "/ 18"
                affiche.innerHTML = scoreCard
            } else {
                preCard = 0
                flip = 0
                setTimeout(() => {
                    document.getElementById("card" + cardNum).src = "../Images/cardBack.png"
                    document.getElementById("card" + preCardNum).src = "../Images/cardBack.png"
                }, 1000);
                scoreCard = "Matches : " + score + "/ 18"
                affiche.innerHTML = scoreCard
            }
        }
    } else {
        flip = 1
        preCard = card
        preCardNum = cardNum
        scoreCard = "Matches : " + score + "/ 18"
        affiche.innerHTML = scoreCard
    }
}
function flipCard1() {
    //source = https://www.w3schools.com/JSREF/prop_pushbutton_value.asp
    document.getElementById("card1").src = cardValueJeu[0]
    cardCheck("1")
}
function flipCard2() {
    document.getElementById("card2").src = cardValueJeu[1]
    cardCheck("2")
}
function flipCard3() {
    document.getElementById("card3").src = cardValueJeu[2]
    cardCheck("3")
}
function flipCard4() {
    document.getElementById("card4").src = cardValueJeu[3]
    cardCheck("4")
}
function flipCard5() {
    document.getElementById("card5").src = cardValueJeu[4]
    cardCheck("5")
}
function flipCard6() {
    document.getElementById("card6").src = cardValueJeu[5]
    cardCheck("6")
}
function flipCard7() {
    document.getElementById("card7").src = cardValueJeu[6]
    cardCheck("7")
}
function flipCard8() {
    document.getElementById("card8").src = cardValueJeu[7]
    cardCheck("8")
}
function flipCard9() {
    document.getElementById("card9").src = cardValueJeu[8]
    cardCheck("9")
}
function flipCard10() {
    document.getElementById("card10").src = cardValueJeu[9]
    cardCheck("10")
}
function flipCard11() {
    document.getElementById("card11").src = cardValueJeu[10]
    cardCheck("11")
}
function flipCard12() {
    document.getElementById("card12").src = cardValueJeu[11]
    cardCheck("12")
}
function flipCard13() {
    document.getElementById("card13").src = cardValueJeu[12]
    cardCheck("13")
}
function flipCard14() {
    document.getElementById("card14").src = cardValueJeu[13]
    cardCheck("14")
}
function flipCard15() {
    document.getElementById("card15").src = cardValueJeu[14]
    cardCheck("15")
}
function flipCard16() {
    document.getElementById("card16").src = cardValueJeu[15]
    cardCheck("16")
}
function flipCard17() {
    document.getElementById("card17").src = cardValueJeu[16]
    cardCheck("17")
}
function flipCard18() {
    document.getElementById("card18").src = cardValueJeu[17]
    cardCheck("18")
}
function flipCard19() {
    document.getElementById("card19").src = cardValueJeu[18]
    cardCheck("19")
}
function flipCard20() {
    document.getElementById("card20").src = cardValueJeu[19]
    cardCheck("20")
}
function flipCard21() {
    document.getElementById("card21").src = cardValueJeu[20]
    cardCheck("21")
}
function flipCard22() {
    document.getElementById("card22").src = cardValueJeu[21]
    cardCheck("22")
}
function flipCard23() {
    document.getElementById("card23").src = cardValueJeu[22]
    cardCheck("23")
}
function flipCard24() {
    document.getElementById("card24").src = cardValueJeu[23]
    cardCheck("24")
}
function flipCard25() {
    document.getElementById("card25").src = cardValueJeu[24]
    cardCheck("25")
}
function flipCard26() {
    document.getElementById("card26").src = cardValueJeu[25]
    cardCheck("26")
}
function flipCard27() {
    document.getElementById("card27").src = cardValueJeu[26]
    cardCheck("27")
}
function flipCard28() {
    document.getElementById("card28").src = cardValueJeu[27]
    cardCheck("28")
}
function flipCard29() {
    document.getElementById("card29").src = cardValueJeu[28]
    cardCheck("29")
}
function flipCard30() {
    document.getElementById("card30").src = cardValueJeu[29]
    cardCheck("30")
}
function flipCard31() {
    document.getElementById("card31").src = cardValueJeu[30]
    cardCheck("31")
}
function flipCard32() {
    document.getElementById("card32").src = cardValueJeu[31]
    cardCheck("32")
}
function flipCard33() {
    document.getElementById("card33").src = cardValueJeu[32]
    cardCheck("33")
}
function flipCard34() {
    document.getElementById("card34").src = cardValueJeu[33]
    cardCheck("34")
}
function flipCard35() {
    document.getElementById("card35").src = cardValueJeu[34]
    cardCheck("35")
}
function flipCard36() {
    document.getElementById("card36").src = cardValueJeu[35]
    cardCheck("36")
}
