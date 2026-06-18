class Pessoa {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
    getNome() {
        return this.nome
    }
    getIdade() {
        return this.idade
    }
    setNome(nome) {
        this.nome = nome
    }
    setIdade(idade){
        this.idade = idade
    }
}

let pessoas=[]

const btn_add = document.querySelector("#btn_add")


btn_add.addEventListener("click", (el) => {
    const idade = document.querySelector("#f_idade")
    const nome = document.querySelector("#f_nome")
    const res = new Pessoa(nome.value, idade.value)
    pessoas.push(res)
    const resultado = document.querySelector(".res")
    resultado.innerHTML=res.getNome()+ "</br>" +res.getIdade()

})



