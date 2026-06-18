const caixa=document.querySelector("#caixa")


let cores=["Azul", "Verde", "Vermelho", ["Medio"]]

let cursos=["HTML", "JS", "CSS", cores]

// cursos[0]=111

// cursos.push("C++","Python", "Rust")

// cursos.unshift("PowerBI")

// cursos.shift()

console.log(cursos[3][3][0])

cursos.map((el)=>{
    let p = document.createElement("p")
    p.innerHTML=el
    caixa.appendChild(p)
})