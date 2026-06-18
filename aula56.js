const caixa=document.querySelector("#caixa")

const carros=["Gol","Palio", "Golf"]

let ol=`<ol>`
carros.map((el)=>{
    ol+=`<li>${el}</li>`
})
ol + `</ol>`

const curso="JavaScript"
const canal="CFB-CURSOS"
// const frase="Este é o curso de " + curso + " do canal " + canal
const frase=`Este é o<br/> curso de ${curso} do<br/> canal ${canal}`


caixa.innerHTML=ol