// DOM elementi JS


// Elementu atlase no lapas

let elem1 = document.querySelector('h1')
let result = document.querySelector('.result')
let textField = document.querySelector('#teksts')
let confirmBtn = document.querySelector('#confirmBtn')
let bilde = document.querySelector('img');

confirmBtn.onclick = ()=>{
    elem1.innerText = textField.value
    result.innerHTML = `<h3>${textField.value}</h3>`
}


textField.oninput = ()=>{
    document.title = textField.value;

}

document.body.onkeydown =  (notikums)=>{
    console.log(notikums)
    if(notikums.key=="1"){

        document.body.classList.toggle('makeRed')
         document.body.classList.remove('makeYellow')
        
    }
    if(notikums.key=="2"){
        document.body.classList.add('makeGreen')
        document.body.classList.remove('makeRed')
        
    }
    if(notikums.key=="3"){
        document.body.classList.add('makeYellow')
        document.body.classList.remove('makeGreen')
        
    }

}


bilde.onclick = ()=>{
   document.body.style.background = `url('${bilde.src}')`
   bilde.remove()    
}


