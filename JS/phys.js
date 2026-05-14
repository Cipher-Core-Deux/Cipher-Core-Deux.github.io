let cardValue = ["../Images/Cards/Phys/1", "../Images/Cards/Phys/2", "../Images/Cards/Phys/3", "../Images/Cards/Phys/4", "../Images/Cards/Phys/5", "../Images/Cards/Phys/6", "../Images/Cards/Phys/7", "../Images/Cards/Phys/8", "../Images/Cards/Phys/9", "../Images/Cards/Phys/10", "../Images/Cards/Phys/11", "../Images/Cards/Phys/12", "../Images/Cards/Phys/13", "../Images/Cards/Phys/14", "../Images/Cards/Phys/15", "../Images/Cards/Phys/16", "../Images/Cards/Phys/17", "../Images/Cards/Phys/18", "../Images/Cards/Phys/R1", "../Images/Cards/Phys/R2", "../Images/Cards/Phys/R3", "../Images/Cards/Phys/R4", "../Images/Cards/Phys/R5", "../Images/Cards/Phys/R6", "../Images/Cards/Phys/R7", "../Images/Cards/Phys/R8", "../Images/Cards/Phys/R9", "../Images/Cards/Phys/R10", "../Images/Cards/Phys/R11", "../Images/Cards/Phys/R12", "../Images/Cards/Phys/R13", "../Images/Cards/Phys/R14", "../Images/Cards/Phys/R15", "../Images/Cards/Phys/R16", "../Images/Cards/Phys/R17", "../Images/Cards/Phys/R18"]
let cardValueJeu = [""];
function randomizer() {
    let j;
    cardValueJeu = [""];
    for (let i=0; i<36; i++) {
        j = parseInt(Math.floor(Math.random() * cardValue.length))
        console.log(j + " " + cardValue[j] )
        cardValueJeu[i] = cardValue[j]
        console.log(cardValue.toString())
        console.log(cardValueJeu.toString() )
        cardValue.splice(j, 1) 
    }
    cardValue = ["../Images/Cards/Phys/1", "../Images/Cards/Phys/2", "../Images/Cards/Phys/3", "../Images/Cards/Phys/4", "../Images/Cards/Phys/5", "../Images/Cards/Phys/6", "../Images/Cards/Phys/7", "../Images/Cards/Phys/8", "../Images/Cards/Phys/9", "../Images/Cards/Phys/10", "../Images/Cards/Phys/11", "../Images/Cards/Phys/12", "../Images/Cards/Phys/13", "../Images/Cards/Phys/14", "../Images/Cards/Phys/15", "../Images/Cards/Phys/16", "../Images/Cards/Phys/17", "../Images/Cards/Phys/18", "../Images/Cards/Phys/R1", "../Images/Cards/Phys/R2", "../Images/Cards/Phys/R3", "../Images/Cards/Phys/R4", "../Images/Cards/Phys/R5", "../Images/Cards/Phys/R6", "../Images/Cards/Phys/R7", "../Images/Cards/Phys/R8", "../Images/Cards/Phys/R9", "../Images/Cards/Phys/R10", "../Images/Cards/Phys/R11", "../Images/Cards/Phys/R12", "../Images/Cards/Phys/R13", "../Images/Cards/Phys/R14", "../Images/Cards/Phys/R15", "../Images/Cards/Phys/R16", "../Images/Cards/Phys/R17", "../Images/Cards/Phys/R18"]
}

function flipCard1() {
    //source = https://www.w3schools.com/JSREF/prop_pushbutton_value.asp
    document.getElementById("card1").value = cardValueJeu[0]
}

function flipCard2() {
    document.getElementById("card2").value = cardValueJeu[1]
}

function flipCard3() {
    document.getElementById("card3").value = cardValueJeu[2]
}

function flipCard4() {
    document.getElementById("card4").value = cardValueJeu[3]
}

function flipCard5() {
    document.getElementById("card5").value = cardValueJeu[4]
}

function flipCard6() {
    document.getElementById("card6").value = cardValueJeu[5]
}

function flipCard7() {
    document.getElementById("card7").value = cardValueJeu[6]
}

function flipCard8() {
    document.getElementById("card8").value = cardValueJeu[7]
}

function flipCard9() {
    document.getElementById("card9").value = cardValueJeu[8]
}

function flipCard10() {
    document.getElementById("card10").value = cardValueJeu[9]
}

function flipCard11() {
    document.getElementById("card11").value = cardValueJeu[10]
}

function flipCard12() {
    document.getElementById("card12").value = cardValueJeu[11]
}

function flipCard13() {
    document.getElementById("card13").value = cardValueJeu[12]
}

function flipCard14() {
    document.getElementById("card14").value = cardValueJeu[13]
}

function flipCard15() {
    document.getElementById("card15").value = cardValueJeu[14]
}

function flipCard16() {
    document.getElementById("card16").value = cardValueJeu[15]
}

function flipCard17() {
    document.getElementById("card17").value = cardValueJeu[16]
}

function flipCard18() {
    document.getElementById("card18").value = cardValueJeu[17]
}

function flipCard19() {
    document.getElementById("card19").value = cardValueJeu[18]
}

function flipCard20() {
    document.getElementById("card20").value = cardValueJeu[19]
}

function flipCard21() {
    document.getElementById("card21").value = cardValueJeu[20]
}

function flipCard22() {
    document.getElementById("card22").value = cardValueJeu[21]
}

function flipCard23() {
    document.getElementById("card23").value = cardValueJeu[22]
}

function flipCard24() {
    document.getElementById("card24").value = cardValueJeu[23]
}

function flipCard25() {
    document.getElementById("card25").value = cardValueJeu[24]
}

function flipCard26() {
    document.getElementById("card26").value = cardValueJeu[25]
}

function flipCard27() {
    document.getElementById("card27").value = cardValueJeu[26]
}

function flipCard28() {
    document.getElementById("card28").value = cardValueJeu[27]
}

function flipCard29() {
    document.getElementById("card29").value = cardValueJeu[28]
}

function flipCard30() {
    document.getElementById("card30").value = cardValueJeu[29]
}

function flipCard31() {
    document.getElementById("card31").value = cardValueJeu[30]
}

function flipCard32() {
    document.getElementById("card32").value = cardValueJeu[31]
}

function flipCard33() {
    document.getElementById("card33").value = cardValueJeu[32]
}

function flipCard34() {
    document.getElementById("card34").value = cardValueJeu[33]
}

function flipCard35() {
    document.getElementById("card35").value = cardValueJeu[34]
}

function flipCard36() {
    document.getElementById("card36").value = cardValueJeu[35]
}
