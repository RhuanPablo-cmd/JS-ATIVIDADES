/*let num = 0

while((num <= 10 || num <= 20)){
    console.log(num)
    num++
}

while(true){
    console.log(num)
    num++
    break
    
}*/

let num = 5
let fat = 1

while(num >= 1){
    fat *= num
    num--
}

console.log("O fatorial de 5 é: " + fat )

// É preciso colocar ++ ou -- pra relacionar