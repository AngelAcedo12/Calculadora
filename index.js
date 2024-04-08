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


$sum.addEventListener("click", ()=> {
    
   if(operacion.operacion==null && operacion.firstNumber){
   }
})

$clear.addEventListener("click",()=>{
    $input.value=""
})


for (let index = 0; index < $numbers.length; index++) {
    $numbers.item(index).addEventListener("click", () => {
        $input.value=$input.value.concat($numbers.item(index).innerHTML);
    })
}


$rest.addEventListener("click" , ()=>{
 
    if((!$input.value.includes("-") && $input.value.startsWith("")) || (($input.value.includes("-")))){
        $input.value=$input.value.concat("-")
    }
})

$removed_one.addEventListener("click",()=>{
    $input.value=$input.value.substring(0,$input.value.length-1)
})

$mult.addEventListener("click", () => {
    if((!$input.value.includes("*") && $input.value.startsWith("")) || (($input.value.includes("*")))){
        $input.value=$input.value.concat("*")
    }
})

$div.addEventListener("click", () => {
    if((!$input.value.includes("/") && $input.value.startsWith("")) || (($input.value.includes("/")))){
        $input.value=$input.value.concat("/")
    }
})


$igual.addEventListener("click",()=>{
    $input.value=eval($input.value)

})


function savedInLocalStorage(){
    
}

function getOperationInLocalStorage(){

}


