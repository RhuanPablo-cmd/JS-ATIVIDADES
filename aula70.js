const todasnum = [...document.querySelectorAll(".num")]
const todasop = [...document.querySelectorAll(".op")]
const res = document.querySelector(".res")
const display = document.querySelector(".display")
const onOf = document.querySelector("#t_ligar")
const limpar = document.querySelector("#tlimpar")

todasnum.forEach((el) => {
    el.addEventListener("click", (evt) => {
        display.innerHTML += evt.target.innerHTML
    })
})

todasop.forEach((el) => {
    el.addEventListener("click", (evt) => {
        display.innerHTML += evt.target.innerHTML
    })
})

limpar.addEventListener("click", (evl)=>{
    display.innerHTML="0"
})