// Estas dos lineas si funcionan apartir de ellas no funciona nada
const $numbers = document.getElementsByClassName("number")
const $input = document.querySelector("input")
const $rest = document.getElementsByClassName("rest").item(0)
const $clear = document.getElementsByClassName("clear").item(0)
const $igual = document.getElementsByClassName("igual").item(0)
const $removed_one = document.getElementsByClassName("remov-one").item(0)
const $sum = document.getElementsByClassName("sum").item(0)
const $mult = document.getElementsByClassName("mult").item(0)
const $div = document.getElementsByClassName("dividir").item(0) 
const $box_historial = document.getElementById("box_historial")
let operaciones = []
const $item_historial = document.getElementsByClassName("item_historial")

createHistorial()


for (let index = 0; index < $numbers.length; index++) {
    $numbers.item(index).addEventListener("click", () => {
        $input.value=$input.value.concat($numbers.item(index).innerHTML);
    })
}


$sum.addEventListener("click", ()=> {
    $input.value=$input.value.concat("+")
})

$clear.addEventListener("click",()=>{
    $input.value=""
})

$rest.addEventListener("click" , ()=>{
    $input.value=$input.value.concat("-")
})

$removed_one.addEventListener("click",()=>{
    $input.value=$input.value.substring(0,$input.value.length-1)
})

$mult.addEventListener("click", () => {
    $input.value=$input.value.concat("*")
})

$div.addEventListener("click", () => {
    $input.value=$input.value.concat("/")
 
})


$igual.addEventListener("click",()=>{
    var valueInput = $input.value;
    operaciones.push(valueInput)
    console.log(operaciones);
    $input.value=eval(valueInput)
    createHistorial()
})


function savedInLocalStorage(){
    localStorage.setItem("operaciones",operaciones)
}

function getOperationInLocalStorage(){
    var items = localStorage.getItem("operaciones")
    if(items!=null){
        operaciones=items
    }
}

window.addEventListener("keydown",()=>{
    
})
function createHistorial(){
    getOperationInLocalStorage()    
    $box_historial.innerHTML=""
    operaciones.forEach(operacion => {
        $box_historial.innerHTML+=`<div  class='item_historial'>${operacion}</div>`
        
    })
    
    for (let index = 0; index < $item_historial.length; index++) {
        var item = $item_historial.item(index);
        
        item.addEventListener("click",() => {
            $input.value=$item_historial.item(index).innerHTML;
        })
    }
}


