/**
 * Variables
 * Märksõnadeks CONST ja LET
 * Kontseptsioon - mis on muutujad, milleks nad on.
 * Rules - weUseCamelCase
 */

const firstName = "Gen"; // Muutuja, mida ei saa hiljem muuta.
let familyName = "Vikat"; // Muutuja, mida saab muuta.

/**
 * HOISTING
 * RUNTIME ajal tõstetakse muutujad oma skoobi esimesteks elementideks.
 */

/**
 * SCOPING
 * Tähis - {}, kõik mis on nende sümbolite vahel, on koodiblokk
 * Igal koodiblokil on oma scope.
 * Scope on mitmeid, BLOCK, FUNCTION, GLOBAL
 */

const myFullName = () => {
    const newVariable = "Some value";
    return firstName + " " + familyName;
};

const whyDollars = `Minu nimi on ${firstName}`;

/**
 * ANDMETÜÜBID
 * String, Number, Boolean, Array, Object
 * Andmetüüpe programmaatiliselt saame kontrollida võtmesõnaga typeof
 */

console.log(typeof whyDollars);

/**
 * CONDITIONALS
 * Märksõnad if, else if, else
 * Puudutatud teemad - conditions, built-in objects, comparison (==, ===), type conversion & type casting!
 * = - väärtuse andmiseks, kasutame muutuja defineerimisel.
 * == - kontrollib kas väärtused on samad.
 * === - kontrollib, kas väärtused ja andmetüübid on samad
 */

const coffeeLimit = 100;
let coffeeCount = "100";

if (coffeeCount < coffeeLimit) {
    console.log("Võta võta.");
} else if (coffeeLimit === Number(coffeeCount)) {
    console.log("Hoiatan. See oli viimane tass.");
} else {
    console.log("Pese mind.");
}
