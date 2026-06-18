function nome(){
    console.log("Rhuan")
}

function soma(){
    let n1 = 2
    let n2 = 10
    let soma = n1 + n2
    console.log(soma)
}

for(let i = 0; i < 10; i++){
    soma()
}
console.log("Fim")

function mudarTexto(){
    let text1 = document.getElementById("d1")
    let text2 = document.getElementById("d2")
    let text3 = document.getElementById("d3")
    text1.innerHTML="RHUAN PABLO"
    text2.innerHTML="RHUAN PABLO"
    text3.innerHTML="RHUAN PABLO"
}
