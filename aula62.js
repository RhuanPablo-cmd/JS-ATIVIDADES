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
    atirar = function(){
        if(this.municao > 0){
            this.municao -- 
        }
        // else if(this.municao < 0){  }
    }
}


const c1 = new Carro("MILITAR", 4)

const c2 = new militar("LUTADOR", 6 , 100 , 500)

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

