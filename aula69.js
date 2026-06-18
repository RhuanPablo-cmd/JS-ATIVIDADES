class CarroPadrao {
    constructor() {
        if (this.constructor === CarroPadrao) {
            throw new TypeError("Esta classe não pode ser instanciada")
        }
        if (this.ligado === undefined) {
            throw new TypeError("É obrigatório implementar o método ligar")
        }
        if (this.desligar === undefined) {
            throw new TypeError("É obrigatório implementar o método desligar")
        }
        this.rodas = 4
        this.portas = 4
        this.ligado = false
        // this.desligar = true
    }

}

class Carro extends CarroPadrao {
    constructor(tipo, estagioturbo) {
        super()
        this.turbo = new Turbo(estagioturbo)

        if (tipo == 1) {
            this.velMax = 120
            this.nome = "Normal"
        }
        if (tipo == 2) {
            this.velMax = 160
            this.nome = "Esportivo"
        }
        if (tipo == 3) {
            this.velMax = 200
            this.nome = "Super esportivo"
        }


        this.velMax += this.turbo.pot
    }

    info() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Velocidade Maxima: ${this.velMax}`)
        console.log(`Turbo: ${this.turbo.pot}`)
        console.log(this.rodas)
        console.log(this.portas)
        console.log(this.ligado)
        console.log("__________________________")
    }
    ligado() { 
        this.ligado=true
    }
    desligar() {
        this.ligado=false
    }
}

class Turbo {
    constructor(e) {
        if (e == 0) {
            this.pot = 0
        }
        else if (e == 1) {
            this.pot = 50

        } else if (e == 2) {
            this.pot = 75

        }
        else if (e == 3) {
            this.pot = 100
        }

    }
}

class CarroEspecial extends Carro {

    constructor(estagioturbo) {
        super(4, estagioturbo)
        this.tipoInfo = 1
        this.velMax = 300 + this.turbo.pot
        this.nome = "CARRO ESPECIAL"
    }
    info() {
        if (this.tipoInfo == 1) {
            super.info()
        } else {
            console.log("____________")
            console.log("CARROS SUPER ESPECIAIS")
            console.log(`Nome: ${this.nome}`)
            console.log(`Velocidade Maxima: ${this.velMax}`)
            console.log(`Turbo: ${this.turbo.pot}`)
            console.log("__________________________")
        }
    }
}

const c1 = new Carro(1, 0)
const c2 = new Carro(1, 1)
const c3 = new CarroEspecial(3)
// const c4 = new CarroPadrao()

c1.info()
c2.info()
c3.info()
// c4.info()
