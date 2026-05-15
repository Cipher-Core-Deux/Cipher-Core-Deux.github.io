let valeursCartes = [];
let valeursCartesJeu = [""];
let separation = ", ";

for (let compteur = 0; compteur != 18; compteur++) {
    let categorieAleatoire = Math.floor(Math.random() * 3);
    let numeroCarteAleatoire = Math.floor(Math.random() * 18);

    if (categorieAleatoire == 0) {
        if (numeroCarteAleatoire == 0) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Math/1";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Math/R1";
        } else if (numeroCarteAleatoire == 1) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Math/2";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Math/R2";
        } else if (numeroCarteAleatoire == 2) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Math/3";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Math/R3";
        } else if (numeroCarteAleatoire == 3) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Math/4";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Math/R4";
        } else if (numeroCarteAleatoire == 4) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Math/5";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Math/R5";
        } else if (numeroCarteAleatoire == 5) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Math/6";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Math/R6";
        } else if (numeroCarteAleatoire == 6) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Math/7";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Math/R7";
        } else if (numeroCarteAleatoire == 7) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Math/8";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Math/R8";
        } else if (numeroCarteAleatoire == 8) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Math/9";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Math/R9";
        } else if (numeroCarteAleatoire == 9) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Math/10";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Math/R10";
        } else if (numeroCarteAleatoire == 10) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Math/11";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Math/R11";
        } else if (numeroCarteAleatoire == 11) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Math/12";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Math/R12";
        } else if (numeroCarteAleatoire == 12) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Math/13";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Math/R13";
        } else if (numeroCarteAleatoire == 13) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Math/14";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Math/R14";
        } else if (numeroCarteAleatoire == 14) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Math/15";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Math/R15";
        } else if (numeroCarteAleatoire == 15) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Math/16";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Math/R16";
        } else if (numeroCarteAleatoire == 16) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Math/17";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Math/R17";
        } else if (numeroCarteAleatoire == 17) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Math/18";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Math/R18";
        } else {
            console.log("Erreur: numeroCarteAleatoire categorieAleatoire == 0");
        }

    } else if (categorieAleatoire == 1) {
        if (numeroCarteAleatoire == 0) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Chem/1";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Chem/R1";
        } else if (numeroCarteAleatoire == 1) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Chem/2";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Chem/R2";
        } else if (numeroCarteAleatoire == 2) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Chem/3";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Chem/R3";
        } else if (numeroCarteAleatoire == 3) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Chem/4";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Chem/R4";
        } else if (numeroCarteAleatoire == 4) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Chem/5";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Chem/R5";
        } else if (numeroCarteAleatoire == 5) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Chem/6";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Chem/R6";
        } else if (numeroCarteAleatoire == 6) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Chem/7";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Chem/R7";
        } else if (numeroCarteAleatoire == 7) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Chem/8";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Chem/R8";
        } else if (numeroCarteAleatoire == 8) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Chem/9";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Chem/R9";
        } else if (numeroCarteAleatoire == 9) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Chem/10";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Chem/R10";
        } else if (numeroCarteAleatoire == 10) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Chem/11";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Chem/R11";
        } else if (numeroCarteAleatoire == 11) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Chem/12";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Chem/R12";
        } else if (numeroCarteAleatoire == 12) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Chem/13";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Chem/R13";
        } else if (numeroCarteAleatoire == 13) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Chem/14";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Chem/R14";
        } else if (numeroCarteAleatoire == 14) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Chem/15";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Chem/R15";
        } else if (numeroCarteAleatoire == 15) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Chem/16";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Chem/R16";
        } else if (numeroCarteAleatoire == 16) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Chem/17";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Chem/R17";
        } else if (numeroCarteAleatoire == 17) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Chem/18";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Chem/R18";
        } else {
            console.log("Erreur: numeroCarteAleatoire categorieAleatoire == 1");
        }

    } else if (categorieAleatoire == 2) {
        if (numeroCarteAleatoire == 0) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Phys/1";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Phys/R1";
        } else if (numeroCarteAleatoire == 1) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Phys/2";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Phys/R2";
        } else if (numeroCarteAleatoire == 2) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Phys/3";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Phys/R3";
        } else if (numeroCarteAleatoire == 3) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Phys/4";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Phys/R4";
        } else if (numeroCarteAleatoire == 4) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Phys/5";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Phys/R5";
        } else if (numeroCarteAleatoire == 5) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Phys/6";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Phys/R6";
        } else if (numeroCarteAleatoire == 6) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Phys/7";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Phys/R7";
        } else if (numeroCarteAleatoire == 7) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Phys/8";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Phys/R8";
        } else if (numeroCarteAleatoire == 8) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Phys/9";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Phys/R9";
        } else if (numeroCarteAleatoire == 9) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Phys/10";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Phys/R10";
        } else if (numeroCarteAleatoire == 10) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Phys/11";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Phys/R11";
        } else if (numeroCarteAleatoire == 11) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Phys/12";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Phys/R12";
        } else if (numeroCarteAleatoire == 12) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Phys/13";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Phys/R13";
        } else if (numeroCarteAleatoire == 13) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Phys/14";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Phys/R14";
        } else if (numeroCarteAleatoire == 14) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Phys/15";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Phys/R15";
        } else if (numeroCarteAleatoire == 15) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Phys/16";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Phys/R16";
        } else if (numeroCarteAleatoire == 16) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Phys/17";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Phys/R17";
        } else if (numeroCarteAleatoire == 17) {
            valeursCartes[valeursCartes.length] = "../Images/Cards/Phys/18";
            valeursCartes[valeursCartes.length] = "../Images/Cards/Phys/R18";
        } else {
            console.log("Erreur: numeroCarteAleatoire categorieAleatoire == 2");
        }

    } else {
        console.log("Erreur: categorieAleatoire");
    }

    console.log(compteur);
}

console.log(valeursCartes.length);

function randomizer() {
    let indexAleatoire;
    valeursCartesJeu = [""];

    for (let index = 0; index < 18; index++) {
        indexAleatoire = parseInt(Math.floor(Math.random() * valeursCartes.length));

        console.log(indexAleatoire + " " + valeursCartes[indexAleatoire]);

        valeursCartesJeu[index] = valeursCartes[indexAleatoire];

        console.log(valeursCartes.toString());
        console.log(valeursCartesJeu.toString());

        valeursCartes.splice(indexAleatoire, 1);
    }
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
