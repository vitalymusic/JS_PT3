// DOM elementi JS


// Elementu atlase no lapas

let elem1 = document.querySelector('h1')
let result = document.querySelector('.result')
let textField = document.querySelector('#teksts')
let confirmBtn = document.querySelector('#confirmBtn')

confirmBtn.onclick = ()=>{
    elem1.innerText = textField.value
    result.innerHTML = `<h3>${textField.value}</h3>`
}


textField.oninput = ()=>{
    document.title = textField.value;

}

document.body.onkeydown =  (notikums)=>{
    // console.log(notikums)
    if(notikums.code=="Space"){
        document.body.style.background = "red";
    }
}



