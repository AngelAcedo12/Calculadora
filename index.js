// Estas dos lineas si funcionan apartir de ellas no funciona nada
const $numbers = document.getElementsByClassName("number")
const $input = document.querySelector("input")
const $rest = document.getElementsByClassName("rest").item(0)

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



