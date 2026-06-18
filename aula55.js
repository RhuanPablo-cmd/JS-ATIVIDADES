const caixa=document.querySelector("#caixa")

let musicas=new Set(["Musica 1", "Musica Boa", "Musica 10"])

console.log(musicas)

musicas.add("Musica muito legal")

musicas.delete("Musica 1")

// musicas.clear()
// musicas.forEach((el)=>{
//     caixa.innerHTML+=el + "<br/> Mais uma Musica:"
// })

for(let m of musicas){
    caixa.innerHTML+=m + "<br/> Mais uma Musica: " 
}
