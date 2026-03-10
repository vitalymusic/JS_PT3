let obj1 = [
    {
        laukaVards:"username",
        laukaTips:"text",
        laukaTeksts:"Ievadiet savu lietotājvārdu"
    },
    {
        laukaVards:"password",
        laukaTips:"password",
        laukaTeksts:"Ievadiet savu paroli"
    },
    {
        laukaVards:"date",
        laukaTips:"date",
        laukaTeksts:"Ievadiet savu dzimšanas datumu"
    },

    {
        laukaVards:"submit",
        laukaTips:"submit",
        laukaTeksts:"Nosūtīt"
    }  
]

const forma = document.createElement('form')
for (lauks of obj1){
    const input = document.createElement('input')
    input.type = lauks.laukaTips
    input.name = lauks.laukaVards
    input.placeholder = lauks.laukaTeksts

    forma.appendChild(input);

}

// document.body.appendChild(forma);
document.querySelector('h1').insertAdjacentElement('afterend',forma);