let cardValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "r1", "r2", "r3", "r4", "r5", "r6", "r7", "r8", "r9", "r10", "r11", "r12", "r13", "r14", "r15", "r16", "r17", "r18",]
let cardValueJeu = new cardValueJeu[36];
var card1Value = 0
var card1value = 0
var card2Value = 0
var card3Value = 0
var card4Value = 0
var card5Value = 0
var card6Value = 0
var card7Value = 0
var card8Value = 0
var card9Value = 0
var card10Value = 0
var card11Value = 0
var card12Value = 0
var card13Value = 0
var card14Value = 0
var card15Value = 0
var card16Value = 0
var card17Value = 0
var card18Value = 0
var card19Value = 0
var card20Value = 0
var card21Value = 0
var card22Value = 0
var card23Value = 0
var card24Value = 0
var card25Value = 0
var card26Value = 0
var card27Value = 0
var card28Value = 0
var card29Value = 0
var card30Value = 0
var card31Value = 0
var card32Value = 0
var card33Value = 0
var card34Value = 0
var card35Value = 0
var card36Value = 0
function randomizer() {
    let j;
    for (let i=0; i<36; i++) {
        j = parseInt(Math.floor(Math.random() * cardValue.length) + 1)
        console.log(j + " " + cardValue[j] )
        cardValueJeu[i] = cardValue[j]
        cardValue.splice(j, 1) 
    }
    
    
}
function flipCard1() {
    //source = https://www.w3schools.com/JSREF/prop_pushbutton_value.asp
    document.getElementById("card1").value = card1Value
}
function flipCard2() {
    document.getElementById("card2").value = card2Value
}
