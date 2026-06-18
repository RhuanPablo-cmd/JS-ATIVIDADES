const p_array = document.querySelector("#array")
const btnVerificar = document.querySelector("#btnVerificar")
const resultado = document.querySelector("#resultado")

const elementos_arry=[21,22,33,44,55,66,3,77,88,99]
p_array.innerHTML="[" + elementos_arry + "]"


btnVerificar.addEventListener("click", (evt)=>{
    resultado.innerHTML="Array encontado: " + evt
    const ret = elementos_arry.every((e,i)=>{
        if(e<18){
            resultado.innerHTML="INVALIDO, Por favor alterar o valor da posição: " + i
            return
        }
        return e >= 18 
       
    })
    if(ret){
        resultado.innerHTML="OK"
    }
    console.log(ret)
})
