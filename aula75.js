const numero = document.getElementById("numero")


let promise = new Promise((res, nres) => {
    let resultado = true
    let temp = 3000
    setTimeout(() => {
        if (resultado) {
            res("Deu tudo certo")
        } else {
            nres("Deu tudo errado")
        }
    }, temp)
})

promise.then((retorno) => {
    numero.innerHTML = retorno
    numero.classList.remove("erro")
    numero.classList.add("ok")
})
promise.catch((retorno) => {
    numero.innerHTML = retorno
    numero.classList.add("erro")
    numero.classList.remove("ok")
})

// if (resultado) {
//     numero.innerHTML = "Deu tudo certo"
//     numero.classList.remove("erro")
//     numero.classList.add("ok")
// } else {
//     numero.innerHTML = "Deu tudo errado"
//     numero.classList.add("erro")
//     numero.classList.remove("ok")
// }

numero.innerHTML = "Processando..."