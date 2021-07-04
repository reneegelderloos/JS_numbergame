//Gebruik prompt om input te vragen van de gebruiker
//result = prompt(title, [default]);

//Gebruik console.log om de gebruiker iets te melden


//vraag naar naam
let name = prompt("Welkom! Wat is je naam?");
alert("Hoi " + name);


//checknr function

const checkNumber = function () {
    const getRandomnumber = function (max) {
        return Math.floor(Math.random() * max);
    };
    let guessNumber = prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden..");
    while (guessNumber != getRandomnumber) {
        if (guessNumber === "getRandomnumber") {
            alert("Goed geraden!");
        } else {
            alert("Niet goed geraden!");
        }
    }
    alert("Goed gedaan, " + name);
};


console.log(checkNumber(25));

