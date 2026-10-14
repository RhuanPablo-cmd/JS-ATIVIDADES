const pupilas = [...document.getElementsByClassName("pupila")]

window.addEventListener("mousemove", (evt) => {
    pupilas.forEach((pupila) => {
        const olho = pupila.closest(".olho")
        const limites = olho.getBoundingClientRect()
        const centroX = limites.left + limites.width / 2
        const centroY = limites.top + limites.height / 2
        const angulo = Math.atan2(evt.clientY - centroY, evt.clientX - centroX) * 180 / Math.PI

        pupila.setAttribute("transform", `rotate(${angulo + 45} 100 100)`)
    })
})