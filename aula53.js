const btnSoma = document.querySelector("#somar")
const btnSubi = document.querySelector("#subtrair")
const btnMult = document.querySelector("#multiplicar")
const btnDivi = document.querySelector("#dividir")
const res = document.querySelector("#res")


// let valores=[1,2,3,4,5,6,7,8,9,10]]

const op = [
    ()=>{
        const val=[document.querySelector("#valor1").value,document.querySelector("#valor2").value]
        res.value=Number(val[0])+Number(val[1])
    },
    ()=>{
        const val=[document.querySelector("#valor1").value,document.querySelector("#valor2").value]
        res.value=Number(val[0])-Number(val[1])
    },
    ()=>{
        const val=[document.querySelector("#valor1").value,document.querySelector("#valor2").value]
        res.value=Number(val[0])*Number(val[1])
    },
    ()=>{
        const val=[document.querySelector("#valor1").value,document.querySelector("#valor2").value]
        res.value=Number(val[0])/Number(val[1])
    }
]

btnSoma.addEventListener("click", ()=>{
    op[0]()
}
)
btnSubi.addEventListener("click", ()=>{
    op[1]()
}
)
btnMult.addEventListener("click", ()=>{
    op[2]()
}
)
btnDivi.addEventListener("click", ()=>{
    op[3]()
}
)