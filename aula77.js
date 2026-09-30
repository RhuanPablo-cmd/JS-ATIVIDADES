const data_div=document.getElementById("data_div")
const data_relo=document.getElementById("data_relo")

const data = new Date()

let dia=data.getDate()
dia=dia<10?"0"+dia:dia

let mes=data.getMonth()
mes=mes<10?"0"+mes:mes

const dia_m=data.getDate()<10?"0"+data.getDate():data.getDate()
// dia_m=dia_m<10?"0"+dia_m:dia_m
const data_r=dia_m+"/"+data.getMonth()+"/"+data.getFullYear()

data_relo.innerHTML = data.getHours(), data.getMinutes(), data.getMilliseconds()

data_div.innerHTML = data_r
console.log(data.getDate())
console.log(data.getDay())
console.log(data.getFullYear())
console.log(data.getMonth())
console.log(data.getMilliseconds())
console.log(data.getTimezoneOffset())
console.log(data.getUTCDate())