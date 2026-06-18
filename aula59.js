class Pessoa {
    constructor(pnome, pidade) {
        this.nome = pnome
        this.idade = pidade

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
    setIdade(idade) {
        this.idade=idade
    }
    info() {
        console.log(`Seu nome é: ${this.nome}`)
        console.log(`E sua idade é: ${this.idade}`)
        console.log("___________________________")
    }
}

let pessoas=[]
// const nomes=document.querySelector("#f_nome").value
// const idades=document.querySelector("#f_idade").value
const btn_add=document.querySelector("#btn_add")
const res=document.querySelector(".res")

const addPessoa=()=>{
    res.innerHTML=""
    pessoas.map((p)=>{
        const div=document.createElement("div")
        div.setAttribute("class", "pessoa")
        div.innerHTML=`Nome: ${p.getNome()} sua idade é ${p.getIdade() }</br>`
        res.appendChild(div)
    })
}

btn_add.addEventListener("click",(evt)=>{
    const nome=document.querySelector("#f_nome")
    const idade=document.querySelector("#f_idade")
    const p=new Pessoa(nome.value,idade.value)
    pessoas.push(p)
    addPessoa()
    nome.value=""
    idade.value=""
    nome.focus()
    console.log(pessoas)
    // console.log(`Seu nome é ${nomes}, e sua idade é: ${idades}`)
})
