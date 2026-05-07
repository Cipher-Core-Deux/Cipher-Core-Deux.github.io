let cardValue = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "r1", "r2", "r3", "r4", "r5", "r6", "r7", "r8", "r9", "r10", "r11", "r12", "r13", "r14", "r15", "r16", "r17", "r18"]
let cardValueJeu = [""];
function randomizer() {
    let j;
    for (let i=0; i<36; i++) {
        j = parseInt(Math.floor(Math.random() * cardValue.length) + 1)
        console.log(j + " " + cardValue[j] )
        cardValueJeu[i] = cardValue[j]
         console.log(cardValue.toString())
         console.log(cardValueJeu.toString() )
        cardValue.splice(j, 1) 
    }
    
    
}
function flipCard1() {
    //source = https://www.w3schools.com/JSREF/prop_pushbutton_value.asp
    document.getElementById("card1").value = cardValueJeu[0]
}
function flipCard2() {
    document.getElementById("card2").value = cardValueJeu[1]
}
