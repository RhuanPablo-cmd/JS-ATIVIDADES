const caixa1 = document.querySelector("#caixa1")
const btn_c1 = document.getElementById("#c1")
const cursosTotal = [...document.querySelectorAll(".curso")]

caixa1.addEventListener("click", (evt) => {
    console.log(evt.target)
    console.log(evt)
})

cursosTotal.map((el) => {
    el.addEventListener("click", (evt) => {
        evt.stopPropagation()
    })
})


