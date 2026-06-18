class Npc{
    static alerta=false
    constructor(energia){
        this.energia=energia
    }
    info=function(){
        console.log(`Energia ${this.energia}`)
        // console.log(`Alerta ${(this.alerta?"Sim":"Não")}`)
        console.log(`Alerta ${(Npc.alerta?"Sim":"Não")}`)
        console.log('--------------------------------')
    }
    static setAlerta=function(){
        Npc.alerta=true
    }
}

const npc1 = new Npc(200)
const npc2 = new Npc(300)
const npc3 = new Npc(400)

Npc.setAlerta()

npc1.info()
npc2.info()
npc3.info()

