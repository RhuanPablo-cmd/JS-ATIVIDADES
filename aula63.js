const tipoMilitar = document.querySelector("#f_tipoMilitar")
const tipoNomral = document.querySelector("#f_tipoNormal")
const f_blindagem = document.querySelector("#f_blindagem")
const f_municao = document.querySelector("#f_municao")
const f_nome = document.querySelector("#f_nome")
const f_portas = document.querySelector("#f_portas")
const carrosId = document.querySelector("#carros")
const addcarros = document.querySelector("#btn_addCarro")

let carrosary = []

tipoMilitar.addEventListener("click", (el) => {
    f_blindagem.removeAttribute("disabled")
    f_municao.removeAttribute("disabled")
})

tipoNomral.addEventListener("click", (el) => {
    f_blindagem.setAttribute("disabled", "disabled")
    f_municao.setAttribute("disabled", "disabled")
    f_blindagem.value = "0"
    // f_blindagem.focus()
    f_municao.value = "0"
    // f_blindagem.focus()
})

const gerenciarExibocaoCarros = () => {
    carrosId.innerHTML = ""
    carrosary.forEach((c) => {
        const div = document.createElement("div")
        div.setAttribute("class", "carro")

        const tipo = c instanceof militar ? "Militar" : "Comum"
        const detalhes = [
            `Nome: ${c.nome}`,
            `Portas: ${c.portas}`,
            `Tipo: ${tipo}`,
        ]

        if (c instanceof militar) {
            detalhes.push(`Blindagem: ${c.blindagem}`)
            detalhes.push(`Munição: ${c.municao}`)
        }

        div.innerHTML = detalhes.join("<br />")
        carrosId.appendChild(div)
    })
}

addcarros.addEventListener("click", (evl) => {
    evl.preventDefault()

    const nome = f_nome.value.trim()
    const portas = f_portas.value.trim()

    if (!nome || !portas) {
        alert("Preencha o nome e o número de portas do carro.")
        return
    }

    let carro
    if (tipoMilitar.checked) {
        carro = new militar(
            nome,
            portas,
            Number(f_blindagem.value) || 0,
            Number(f_municao.value) || 0
        )
    } else {
        carro = new Carro(nome, portas)
    }

    carrosary.push(carro)
    gerenciarExibocaoCarros()
    limparFormulario()
})

const limparFormulario = () => {
    f_nome.value = ""
    f_portas.value = ""
    if (tipoNomral.checked) {
        f_blindagem.value = "0"
        f_municao.value = "0"
    }
}

class Carro {   //Class Pai
    constructor(nome, portas) {
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }
    ligar = function () {
        this.ligado = true
    }
    desligar = function () {
        this.ligado = false
    }
    setCor = function (cor) {
        this.cor = cor
    }
    setVel = function (vel) {
        this.vel = vel
    }
}

class militar extends Carro {
    constructor(nome, portas, blindagem, municao) {
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao
        this.setCor("Verde")
        this.setVel("100Km")
    }
    atirar = function () {
        if (this.municao > 0) {
            this.municao--
        }
        // else if(this.municao < 0){  }
    }
}


const c1 = new Carro("MILITAR", 4)

const c2 = new militar("LUTADOR", 6, 100, 500)

c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()

// c2.ligar(true)

c1.ligar()
c1.setVel("200Km")
c1.setCor("Preto")


console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${(c1.ligado ? "Sim" : "Não")}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)
console.log("-------------------------------")

console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Blindagem ${c2.blindagem}`)
console.log(`Munição: ${c2.municao}`)
console.log(`Ligado: ${(c2.ligar ? "Sim" : "Não")}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Cor: ${c2.cor}`)
console.log("-------------------------------")

