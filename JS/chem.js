let valeursCartes = ["../Images/Cards/Chem/1.png", "../Images/Cards/Chem/R1.png", "../Images/Cards/Chem/2.png", "../Images/Cards/Chem/R2.png", "../Images/Cards/Chem/3.png", "../Images/Cards/Chem/R3.png", "../Images/Cards/Chem/4.png", "../Images/Cards/Chem/R4.png", "../Images/Cards/Chem/5.png", "../Images/Cards/Chem/R5.png", "../Images/Cards/Chem/6.png", "../Images/Cards/Chem/R6.png", "../Images/Cards/Chem/7.png", "../Images/Cards/Chem/R7.png", "../Images/Cards/Chem/8.png", "../Images/Cards/Chem/R8.png", "../Images/Cards/Chem/9.png", "../Images/Cards/Chem/R9.png", "../Images/Cards/Chem/10.png", "../Images/Cards/Chem/R10.png", "../Images/Cards/Chem/11.png", "../Images/Cards/Chem/R11.png", "../Images/Cards/Chem/12.png", "../Images/Cards/Chem/R12.png", "../Images/Cards/Chem/13.png", "../Images/Cards/Chem/R13.png", "../Images/Cards/Chem/14.png", "../Images/Cards/Chem/R14.png", "../Images/Cards/Chem/15.png", "../Images/Cards/Chem/R15.png", "../Images/Cards/Chem/16.png", "../Images/Cards/Chem/R16.png", "../Images/Cards/Chem/17.png", "../Images/Cards/Chem/R17.png", "../Images/Cards/Chem/18.png", "../Images/Cards/Chem/R18.png"];

let valeursCartesJeu = [""];

console.log(valeursCartes.length);

function randomizer() {
    let indexAleatoire;
    valeursCartesJeu = [""];

    for (let index = 0; index < 36; index++) {
        indexAleatoire = parseInt(Math.floor(Math.random() * valeursCartes.length));

        console.log(indexAleatoire + " " + valeursCartes[indexAleatoire]);

        valeursCartesJeu[index] = valeursCartes[indexAleatoire];

        console.log(valeursCartes.toString());
        console.log(valeursCartesJeu.toString());

        valeursCartes.splice(indexAleatoire, 1);
    }

    valeursCartes = ["../Images/Cards/Chem/1.png", "../Images/Cards/Chem/R1.png", "../Images/Cards/Chem/2.png", "../Images/Cards/Chem/R2.png", "../Images/Cards/Chem/3.png", "../Images/Cards/Chem/R3.png", "../Images/Cards/Chem/4.png", "../Images/Cards/Chem/R4.png", "../Images/Cards/Chem/5.png", "../Images/Cards/Chem/R5.png", "../Images/Cards/Chem/6.png", "../Images/Cards/Chem/R6.png", "../Images/Cards/Chem/7.png", "../Images/Cards/Chem/R7.png", "../Images/Cards/Chem/8.png", "../Images/Cards/Chem/R8.png", "../Images/Cards/Chem/9.png", "../Images/Cards/Chem/R9.png", "../Images/Cards/Chem/10.png", "../Images/Cards/Chem/R10.png", "../Images/Cards/Chem/11.png", "../Images/Cards/Chem/R11.png", "../Images/Cards/Chem/12.png", "../Images/Cards/Chem/R12.png", "../Images/Cards/Chem/13.png", "../Images/Cards/Chem/R13.png", "../Images/Cards/Chem/14.png", "../Images/Cards/Chem/R14.png", "../Images/Cards/Chem/15.png", "../Images/Cards/Chem/R15.png", "../Images/Cards/Chem/16.png", "../Images/Cards/Chem/R16.png", "../Images/Cards/Chem/17.png", "../Images/Cards/Chem/R17.png", "../Images/Cards/Chem/18.png", "../Images/Cards/Chem/R18.png"];
}

let cartePrecedente;
let carteActuelle = 0;
let score = 0;
let carteRetournee = 0;

function flipCard1() {
    document.getElementById("card1").src = valeursCartesJeu[0];
    carteActuelle = valeursCartes.indexOf(valeursCartesJeu[0]);

    console.log(carteActuelle);

    if (carteRetournee = 1) {
        if (cartePrecedente = carteActuelle) {
            score++;
        } else {
            document.getElementById("card8").src = "../Images/cardBack";
        }
    } else {
        carteRetournee = 0;
        cartePrecedente = carteActuelle;
        document.getElementById("card1").src = "../Images/cardBack";
    }
}

function flipCard2() {
    document.getElementById("card2").src = valeursCartesJeu[1];
    carteActuelle = valeursCartes.indexOf(valeursCartesJeu[1]);

    console.log(carteActuelle);

    if (carteRetournee = 1) {
        if (cartePrecedente = carteActuelle) {
            score++;
        } else {
            document.getElementById("card8").src = "../Images/cardBack";
        }
    } else {
        carteRetournee = 0;
        cartePrecedente = carteActuelle;
        document.getElementById("card2").src = "../Images/cardBack";
    }
}

function flipCard3() {
    document.getElementById("card3").src = valeursCartesJeu[2];
    carteActuelle = valeursCartes.indexOf(valeursCartesJeu[2]);

    console.log(carteActuelle);

    if (carteRetournee = 1) {
        if (cartePrecedente = carteActuelle) {
            score++;
        } else {
            document.getElementById("card8").src = "../Images/cardBack";
        }
    } else {
        carteRetournee = 0;
        cartePrecedente = carteActuelle;
        document.getElementById("card3").src = "../Images/cardBack";
    }
}

function flipCard4() {
    document.getElementById("card4").src = valeursCartesJeu[3];
    carteActuelle = valeursCartes.indexOf(valeursCartesJeu[3]);

    console.log(carteActuelle);

    if (carteRetournee = 1) {
        if (cartePrecedente = carteActuelle) {
            score++;
        } else {
            document.getElementById("card8").src = "../Images/cardBack";
        }
    } else {
        carteRetournee = 0;
        cartePrecedente = carteActuelle;
        document.getElementById("card4").src = "../Images/cardBack";
    }
}

function flipCard5() {
    document.getElementById("card5").src = valeursCartesJeu[4];
    carteActuelle = valeursCartes.indexOf(valeursCartesJeu[4]);

    console.log(carteActuelle);

    if (carteRetournee = 1) {
        if (cartePrecedente = carteActuelle) {
            score++;
        } else {
            document.getElementById("card8").src = "../Images/cardBack";
        }
    } else {
        carteRetournee = 0;
        cartePrecedente = carteActuelle;
        document.getElementById("card5").src = "../Images/cardBack";
    }
}

function flipCard6() {
    document.getElementById("card6").src = valeursCartesJeu[5];
    carteActuelle = valeursCartes.indexOf(valeursCartesJeu[5]);

    console.log(carteActuelle);

    if (carteRetournee = 1) {
        if (cartePrecedente = carteActuelle) {
            score++;
        } else {
            document.getElementById("card8").src = "../Images/cardBack";
        }
    } else {
        carteRetournee = 0;
        cartePrecedente = carteActuelle;
        document.getElementById("card6").src = "../Images/cardBack";
    }
}

function flipCard7() {
    document.getElementById("card7").src = valeursCartesJeu[6];
    carteActuelle = valeursCartes.indexOf(valeursCartesJeu[6]);

    console.log(carteActuelle);

    if (carteRetournee = 1) {
        if (cartePrecedente = carteActuelle) {
            score++;
        } else {
            document.getElementById("card8").src = "../Images/cardBack";
        }
    } else {
        carteRetournee = 0;
        cartePrecedente = carteActuelle;
        document.getElementById("card7").src = "../Images/cardBack";
    }
}

function flipCard8() {
    document.getElementById("card8").src = valeursCartesJeu[7];
    carteActuelle = valeursCartes.indexOf(valeursCartesJeu[7]);

    console.log(carteActuelle);

    if (carteRetournee = 1) {
        if (cartePrecedente = carteActuelle) {
            score++;
        } else {
            document.getElementById("card8").src = "../Images/cardBack";
        }
    } else {
        carteRetournee = 0;
        cartePrecedente = carteActuelle;
        document.getElementById("card8").src = "../Images/cardBack";
    }
}

function flipCard9() {
    document.getElementById("card9").src = valeursCartesJeu[8];
}

function flipCard10() {
    document.getElementById("card10").src = valeursCartesJeu[9];
}

function flipCard11() {
    document.getElementById("card11").src = valeursCartesJeu[10];
}

function flipCard12() {
    document.getElementById("card12").src = valeursCartesJeu[11];
}

function flipCard13() {
    document.getElementById("card13").src = valeursCartesJeu[12];
}

function flipCard14() {
    document.getElementById("card14").src = valeursCartesJeu[13];
}

function flipCard15() {
    document.getElementById("card15").src = valeursCartesJeu[14];
}

function flipCard16() {
    document.getElementById("card16").src = valeursCartesJeu[15];
}

function flipCard17() {
    document.getElementById("card17").src = valeursCartesJeu[16];
}

function flipCard18() {
    document.getElementById("card18").src = valeursCartesJeu[17];
}

function flipCard19() {
    document.getElementById("card19").src = valeursCartesJeu[18];
}

function flipCard20() {
    document.getElementById("card20").src = valeursCartesJeu[19];
}

function flipCard21() {
    document.getElementById("card21").src = valeursCartesJeu[20];
}

function flipCard22() {
    document.getElementById("card22").src = valeursCartesJeu[21];
}

function flipCard23() {
    document.getElementById("card23").src = valeursCartesJeu[22];
}

function flipCard24() {
    document.getElementById("card24").src = valeursCartesJeu[23];
}

function flipCard25() {
    document.getElementById("card25").src = valeursCartesJeu[24];
}

function flipCard26() {
    document.getElementById("card26").src = valeursCartesJeu[25];
}

function flipCard27() {
    document.getElementById("card27").src = valeursCartesJeu[26];
}

function flipCard28() {
    document.getElementById("card28").src = valeursCartesJeu[27];
}

function flipCard29() {
    document.getElementById("card29").src = valeursCartesJeu[28];
}

function flipCard30() {
    document.getElementById("card30").src = valeursCartesJeu[29];
}

function flipCard31() {
    document.getElementById("card31").src = valeursCartesJeu[30];
}

function flipCard32() {
    document.getElementById("card32").src = valeursCartesJeu[31];
}

function flipCard33() {
    document.getElementById("card33").src = valeursCartesJeu[32];
}

function flipCard34() {
    document.getElementById("card34").src = valeursCartesJeu[33];
}

function flipCard35() {
    document.getElementById("card35").src = valeursCartesJeu[34];
}

function flipCard36() {
    document.getElementById("card36").src = valeursCartesJeu[35];
}

let affichageScore = document.getElementById("divScore");
let texteScore = score + "/18";
affichageScore.innerHTML = texteScore;
