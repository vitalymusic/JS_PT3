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



