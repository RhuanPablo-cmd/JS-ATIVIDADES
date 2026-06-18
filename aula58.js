class Carro {
    constructor(pnome, ptipo) {
        this.nome = pnome
        if (ptipo == 1) {
            this.tipo = "Esportivo"
            this.velmax = 300
        } else if (ptipo == 2) {
            this.tipo = "Utilitário"
            this.velmax = 100
        } else if (ptipo == 3) {
            this.tipo = "Passeio"
            this.velmax = 160
        } else {
            this.tipo = "Militar"
            this.velmax = 180
        }
    }
    // setNome(nome){
    //     this.nome=nome
    // }

    getNome() {
        return this.nome
    }

    setNome(nome) {
        this.nome = nome
    }
    setTipo(tipo) {
        this.tipo = tipo
    }
    setVelmax(velmax) {
        this.velmax = velmax
    }
    
    getTipo() {
        return this.tipo
    }

    getVelmax() {
        return this.velmax
    }

    getInfo() {
        return [this.nome, this.tipo, this.velmax]
    }

    info() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Velocidade máxima: ${this.velmax}`)
        console.log("--------------------")
    }
}

let c1 = new Carro("Corsa", 1)
let c2 = new Carro("Super", 3)
let c3 = new Carro("Brabo", 4)

c1.setNome("SuperVeloz")
c1.setVelmax("500")
c1.setTipo("CarroRuim")

c1.info()

// c1.info()

// console.log(c2.nome, c2.tipo, c2.velmax)

// console.log(c3.nome, c3.tipo, c3.velmax)

console.log(c1.getNome())

console.log(c2.getNome())

console.log(c3.getInfo()).value