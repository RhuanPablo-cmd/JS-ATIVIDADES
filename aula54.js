const caixa = document.querySelector("#caixa")

let mapa=new Map()

mapa.set("curso", "Java")
mapa.set("curso2", "HTML")
mapa.set("curso3", "CSS")
mapa.set("curso4", "REACT")

console.log(mapa)
let pes="curso2"

if(mapa.has("curso2")){
    caixa.innerHTML="A chave existe na coleção " + mapa.get( pes)
}else{
        caixa.innerHTML="A chave NÃO está na coleção"
}

// caixa.innerHTML=mapa.get("curso")

mapa.forEach((el)=>{
    console.log(el)
})