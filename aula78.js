
const data_div = document.getElementById("data_div")
const data_relo = document.getElementById("data_relo")

const data = new Date()

let dia = data.getDate()
dia = dia < 10 ? "0" + dia : dia

let mes = data.getMonth()
mes = mes < 10 ? "0" + mes : mes

const dia_m = data.getDate() < 10 ? "0" + data.getDate() : data.getDate() 
const dia_mes = data.getMonth() < 10 ? "0" + data.getMonth() : data.getMonth() 
// dia_m=dia_m<10?"0"+dia_m:dia_m
const data_r = dia_m + "/" + dia_mes + "/" + data.getFullYear()

data_div.innerHTML = data_r
console.log(data.getDate())
console.log(data.getDay())
console.log(data.getFullYear())
console.log(data.getMonth())
console.log(data.getMilliseconds())
console.log(data.getTimezoneOffset())
console.log(data.getUTCDate())

const relogio = () => {
    const data = new Date()
    let hora = data.getHours()
    console.log(hora)
    hora = hora < 10 ? "0" + hora : hora
    let minutos = data.getMinutes()
    console.log(minutos)
    minutos = minutos< 10 ? "0" + minutos : minutos
    let segundos = data.getSeconds()
    console.log(segundos)
    segundos = segundos< 10 ? "0" + segundos : segundos
    const horas_completas = hora+":"+minutos+":"+segundos
    data_relo.innerHTML = horas_completas
}

const intevalo=setInterval(relogio, 1000)

relogio()