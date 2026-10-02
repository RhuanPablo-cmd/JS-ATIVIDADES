const data_div = document.getElementById("data_div")
const data_relo = document.getElementById("data_relo")
const btn_ativar = document.getElementById("btn_ativar")
const btn_parar = document.getElementById("btn_parar")
const tmp_alarme = document.getElementById("tmp_alarme")
const hora_alarme = document.getElementById("hora_alarme")
const timer = document.getElementById("timer")

let ts_atual=null
let ts_alarme=null
let alarme_ativado=false
let alarme_tocando=false
let contexto_audio=null
let intervalo_som=null

const tocarSomAlarme = () => {
    if (!contexto_audio) return

    const oscilador = contexto_audio.createOscillator()
    const volume = contexto_audio.createGain()
    oscilador.type = "sine"
    oscilador.frequency.value = 880
    volume.gain.setValueAtTime(0.2, contexto_audio.currentTime)
    volume.gain.exponentialRampToValueAtTime(0.001, contexto_audio.currentTime + 0.35)
    oscilador.connect(volume)
    volume.connect(contexto_audio.destination)
    oscilador.start()
    oscilador.stop(contexto_audio.currentTime + 0.35)
}

btn_ativar.addEventListener("click", ()=>{
    const tempo = Number(tmp_alarme.value)
    if (!Number.isFinite(tempo) || tempo < 0) return

    if (!contexto_audio) {
        const AudioContext = window.AudioContext || window.webkitAudioContext
        if (AudioContext) contexto_audio = new AudioContext()
    }
    if (contexto_audio?.state === "suspended") contexto_audio.resume()

    clearInterval(intervalo_som)
    alarme_tocando=false
    timer.classList.remove("alarme")
    ts_atual=Date.now()
    ts_alarme=ts_atual+(tempo*1000)
    alarme_ativado=true
    const dt_alarme = new Date(ts_alarme)
    const hora = String(dt_alarme.getHours()).padStart(2, "0")
    const minutos = String(dt_alarme.getMinutes()).padStart(2, "0")
    const segundos = String(dt_alarme.getSeconds()).padStart(2, "0")
    hora_alarme.textContent = `Hora do Alarme: ${hora}:${minutos}:${segundos}`
})
btn_parar.addEventListener("click", ()=>{
    alarme_ativado=false
    alarme_tocando=false
    clearInterval(intervalo_som)
    intervalo_som=null
    hora_alarme.innerHTML="Hora do Alarme"
    tmp_alarme.value=0
    timer.classList.remove("alarme")
})

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
    if(alarme_ativado && !alarme_tocando){
        if(data.getTime() >= ts_alarme){
            alarme_tocando=true
            alarme_ativado=false
            tocarSomAlarme()
            intervalo_som=setInterval(tocarSomAlarme, 700)
            timer.classList.add("alarme")
        }
    }
}

const intevalo=setInterval(relogio, 1000)

relogio()