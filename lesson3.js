// funckcijas
let vards = "Anna";

function sayHello() {
    alert("LABRĪT!!!")
}

// arrow function
let labrit = (obj) => {
    alert(bigText(obj.teksts + " " + obj.vards));
    return bigText(obj.teksts + " " + obj.vards);
}

console.log(labrit({
    teksts: "Labvakar",
    vards: vards
}))


// Cikli

function saskaitiLidz10() {
    for (let i = 1; i <= 10; i++) {
        console.log("Skaitlis: " + i)
    }
}

saskaitiLidz10();

const menesi = [
    "Janvāris",
    "Februāris",
    "Marts",
    "Aprīlis",
    "Maijs",
    "Jūnijs",
    "Jūlijs",
    "Augusts",
    "Septembris",
    "Oktobris",
    "Novembris",
    "Decembris"
];

let menesisNr = 0;

// For OF


for (menesis of menesi) {
    menesisNr++
    document.body.innerHTML += `<p>${menesisNr}. ${menesis}</p>`
}

// For in

const lietotaji = [
    { id: 1, vards: "Jānis", uzvards: "Bērziņš", epasts: "janis.berzins@example.com", vecums: 28, pilseta: "Rīga" },
    { id: 2, vards: "Anna", uzvards: "Ozola", epasts: "anna.ozola@example.com", vecums: 34, pilseta: "Liepāja" },
    { id: 3, vards: "Mārtiņš", uzvards: "Kalniņš", epasts: "martins.kalnins@example.com", vecums: 22, pilseta: "Jelgava" },
    { id: 4, vards: "Laura", uzvards: "Liepa", epasts: "laura.liepa@example.com", vecums: 30, pilseta: "Daugavpils" },
    { id: 5, vards: "Edgars", uzvards: "Krūmiņš", epasts: "edgars.krumins@example.com", vecums: 27, pilseta: "Ventspils" },
    { id: 6, vards: "Kristīne", uzvards: "Zariņa", epasts: "kristine.zarina@example.com", vecums: 29, pilseta: "Rēzekne" },
    { id: 7, vards: "Andris", uzvards: "Eglītis", epasts: "andris.eglit@example.com", vecums: 41, pilseta: "Valmiera" },
    { id: 8, vards: "Ilze", uzvards: "Straume", epasts: "ilze.straume@example.com", vecums: 25, pilseta: "Jūrmala" },
    { id: 9, vards: "Toms", uzvards: "Pētersons", epasts: "toms.petersons@example.com", vecums: 31, pilseta: "Ogre" },
    { id: 10, vards: "Līga", uzvards: "Balode", epasts: "liga.balode@example.com", vecums: 26, pilseta: "Cēsis" },
    { id: 11, vards: "Artūrs", uzvards: "Vilks", epasts: "arturs.vilks@example.com", vecums: 38, pilseta: "Sigulda" },
    { id: 12, vards: "Elīna", uzvards: "Rudzīte", epasts: "elina.rudzite@example.com", vecums: 24, pilseta: "Tukums" },
    { id: 13, vards: "Kaspars", uzvards: "Lācis", epasts: "kaspars.lacis@example.com", vecums: 33, pilseta: "Kuldīga" },
    { id: 14, vards: "Evita", uzvards: "Upīte", epasts: "evita.upite@example.com", vecums: 29, pilseta: "Saldus" },
    { id: 15, vards: "Rihards", uzvards: "Briedis", epasts: "rihards.briedis@example.com", vecums: 36, pilseta: "Madona" },
    { id: 16, vards: "Sanita", uzvards: "Kļaviņa", epasts: "sanita.klavina@example.com", vecums: 27, pilseta: "Dobele" },
    { id: 17, vards: "Gints", uzvards: "Grīnbergs", epasts: "gints.grinbergs@example.com", vecums: 45, pilseta: "Bauska" },
    { id: 18, vards: "Ieva", uzvards: "Mežniece", epasts: "ieva.mezniece@example.com", vecums: 23, pilseta: "Aizkraukle" },
    { id: 19, vards: "Aivars", uzvards: "Dzenis", epasts: "aivars.dzenis@example.com", vecums: 39, pilseta: "Preiļi" },
    { id: 20, vards: "Zane", uzvards: "Saulīte", epasts: "zane.saulite@example.com", vecums: 32, pilseta: "Gulbene" }
];



function izvaditTabulā(lietotaji){
     let html = `<table border="1" width="50%">`;
     html+=`
        <tr>
            <td>N.p.k.</td>
            <td>Vārds</td>
            <td>Uzvārds</td>
            <td>epasts</td>
            <td>Vecums</td>
            <td>Pilsēta</td>
        </tr>`;
        for(lietotajs of lietotaji){
             html+="<tr>"
                for(lauks in lietotajs){
                   html+=`<td>${lietotajs[lauks]}</td>` 
                }
               html+="</tr>"  
        }
         html+="</table>"  
        document.body.innerHTML+=html
}

izvaditTabulā(lietotaji)


// Zarošanās

let age = prompt("Cik jums gadu???");

if(age<18){
    document.body.innerHTML="Lapas saturs nav pieejams"
}else{
    window.location.href = "https://youtube.com";
}

let vecums = 20;

let statuss = vecums >= 18 ? "Pilngadīgs" : "Nepilngadīgs";
console.log(statuss);


// | Operators | Kad lieto                                            |
// | --------- | ---------------------------------------------------- |
// | `&&`      | Nosacījumiem (UN)                                    |
// | `??`      | Noklusējuma vērtībai tikai ja `null` vai `undefined` |


// Loģiskais un -> &&  loģiskais or ->|| 




function bigText(text) {
    return text.toUpperCase();
}

