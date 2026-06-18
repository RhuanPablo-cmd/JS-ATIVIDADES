const p_array = document.querySelector("#array")
const btnReduzir = document.querySelector("#btnReduzir")
const resultado = document.querySelector("#resultado")

const elementos_arry=[1,2,3,4,5]
let aux=[]
let atuals=[]

p_array.innerHTML="[" + elementos_arry + "]"


btnReduzir.addEventListener("click", (evt)=>{
    resultado.innerHTML=elementos_arry.reduce((anterior, atual, pos)=>{
        aux.push(anterior)
        atuals.push(atual)
        return atual+anterior
    })
    resultado.innerHTML+="<br/>" + aux
    resultado.innerHTML+="<br/>" + atuals
})