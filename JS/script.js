let cardValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "r1", "r2", "r3", "r4", "r5", "r6", "r7", "r8", "r9", "r10", "r11", "r12", "r13", "r14", "r15", "r16", "r17", "r18",]
function randomizer() {
    console.log(Math.floor((Math.random * 36) / 100) + 1)
}
function flipCard1() {
    //source = https://www.w3schools.com/JSREF/prop_pushbutton_value.asp
    document.getElementById("card1").value = "2 + 2"
}
function flipCard2() {
    document.getElementById("card2").value = 4
}