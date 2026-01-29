
// side 32 – endre html med js

document.getElementById("tekst").innerHTML =
    "Denne teksten er endra med JavaScript";

document.getElementById("bilde").width = 600;

// side 42 – alert, write, prompt

alert("Informasjonsteknologi 2");

document.write("<h2>Namnet mitt:</h2>");
document.write("Vlad<br><br>");

let namn = prompt("Kva heiter du?");
document.write("Hei " + namn + "<br><br>");


// konsoll – meldingar

console.log("Dette er ein vanleg melding");
console.warn("Dette er ei åtvaring");
console.error("Dette er ei feilmelding");


// variablar – tekst


let melding = "Dette er tekst lagra i ein variabel";
document.write(melding + "<br><br>");

let tekst1 = "Hei!";
let tekst2 = "Korleis går det?";

document.write(tekst1 + " " + tekst2 + "<br><br>");

// fornamn + etternamn

let fornamn = "Vlad";
let etternamn = "Onoprienko";

document.write("Fullt namn: " + fornamn + " " + etternamn + "<br><br>");


// PROMPT – VELKOMMEN

let brukar = prompt("Skriv inn namnet ditt:");
document.write("Velkommen " + brukar + "<br><br>");


// INVITASJON TIL FEST

let gjest = prompt("Kven vil du invitere?");

document.write(
    gjest + " er invitert til fest. " +
    "Vi gler oss til å sjå deg, " +
    gjest + "!<br><br>"
);


// math.random

// terning 1–6
let terning = Math.floor(Math.random() * 6) + 1;
document.write("Terningkast: " + terning + "<br>");

// 0–10
let tilfeldig1 = Math.floor(Math.random() * 11);
document.write("Tal 0–10: " + tilfeldig1 + "<br>");

// 10–20
let tilfeldig2 = Math.floor(Math.random() * 11) + 10;
document.write("Tal 10–20: " + tilfeldig2 + "<br><br>");



// rektangel

let hoyde = 10;
let bredde = 5;

let areal = hoyde * bredde;
let omkrets = 2 * (hoyde + bredde);

document.write("Areal: " + areal + "<br>");
document.write("Omkrets: " + omkrets + "<br><br>");


// kule

let radius = Number(prompt("Skriv radius på kula:"));

let kuleOmkrets = 2 * Math.PI * radius;
let kuleAreal = 4 * Math.PI * radius * radius;
let kuleVolum = (4 / 3) * Math.PI * radius ** 3;

document.write("Omkrets: " + kuleOmkrets.toFixed(2) + "<br>");
document.write("Areal: " + kuleAreal.toFixed(2) + "<br>");
document.write("Volum: " + kuleVolum.toFixed(2) + "<br><br>");


// karakter

let poeng = Number(prompt("Kor mange poeng fekk du?"));
let maks = Number(prompt("Kor mange poeng var mogleg?"));

let karakter = Math.round((poeng / maks) * 6);

document.write("Karakter: " + karakter + "<br><br>");



// kmi / bmi

let vekt = Number(prompt("Vekt i kg:"));
let hoydeMeter = Number(prompt("Høgde i meter:"));

let kmi = vekt / (hoydeMeter * hoydeMeter);

document.write("KMI: " + kmi.toFixed(2));
