// Operatori

// Matemātiskie operātori: + - * / % () ^

// + Ja saskaita String = Konkatenācija (salīmēšana)

// console.log("2"+"2");
// console.log( +prompt("Ievadi pirmo skaitli")+ +prompt("Ievadi otru skaitli"));

// Pielīdzināšanas operatori
let data = "";

data +="<h1>Virsraksts</h1>";
data +="<p>rindkopa</p>";

document.body.innerHTML = data;

// += -= *= /= ++ -- 

// salidzināšanas operatori

console.log(2==="2");

// > < >= <= == === <== >==

// Darbības ar skatiļiem

let summa = 30.2352324234;

console.log(summa.toFixed(2));

setInterval(function(){
    let rgb = {
    red:Math.trunc(Math.random()*255),
    green:Math.trunc(Math.random()*255),
    blue:Math.trunc(Math.random()*255)
}

document.body.style.background = `rgb(${rgb.red},${rgb.green},${rgb.blue})`;
},5000);

// Funkcijas darbam ar tekstu (String)

let text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";




let array1 = text.split('. '); //teksta sadalīšana pēc noteiktā simbola
let shortTxt = text.slice(100,255)+"...";
let upperLetters = text.toUpperCase();
let searchText = text.search("1500ss");    



console.log(text.length);
console.log(array1);
console.log(shortTxt.length,shortTxt);
console.log(upperLetters);
console.log(searchText);
console.log(text.charAt(searchText));
// Regulārā izteiksme

let phoneRegex = /(\+371)([0-9]{8})/gm;
let passworCheck = /^.*(?=.{8,120})(?!.*\s)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\!\@\#\$\%\^\&\*\(\)\-\=\¡\£\_\+\`\~\.\,\<\>\/\?\;\:\'\"\\\|\[\]\{\}]).*$/gm;

phone = "+37122222222";

console.log(phone.match(phoneRegex))
console.log(shortTxt + " " + phone);

// trim()