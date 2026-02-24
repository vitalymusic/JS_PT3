// Populārie datu tipi

// Vienkāršie datu tipi

// Integer
// Float (double)
// String
// Boolean

// Saliktie

// array = []
// object = {}

// Lielie un mazie burti ir dažādi simboli

// camelCase
// piem.: toUpperCase()

// pirmaisMainigais


// Mainīgo izveide

let skaitlis1 = 10;

let teksts1 = 'Teksts 1';
let teksts2 = "Teksts 2";
let teksts3 = `
<h1>Javascript ir ${skaitlis1}</h1>`;

let masīvs1 = [skaitlis1,teksts3,teksts2,50,[]];
let tabula = [
    ["Npk","Vārds","Uzvārds"],
    [1,"Jānis","Ozoloņš"],
    [2,"Anna","Lapiņa"]
] //Matrica

let objekts1 = {
    nosaukums:"BMW",
    dzinējs:2.5,
    cena:4500

}

const vecums = 20;

// JSON - JavaScript Object Notation

// Datu ievade

let vards = prompt("Ka tevi sauc???"); //Atgriež tikai String tipu
let agree = confirm("Vai jūs piekritat noteikumiem???"); //Atgriež tikai Boolean tipu
//3.variants datu ievade notiek no HTMl formām


// Datu izvade

alert(`Tevi sauc ${vards}!`);
// document.write()
document.body.innerHTML = `Tevi sauc ${tabula[1][1]}!`;
document.body.innerHTML += `Tevi sauc ${objekts1.nosaukums}!`;

console.log(vards,agree,tabula);



// Typescript - Microsoft 





