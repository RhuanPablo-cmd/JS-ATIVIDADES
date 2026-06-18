const pessoas = {
    nome: "RHUAN",
    canal: "CFB CURSOS",
    curso: "JS",
    aulas: {
        aula01: "Introdução",
        aula02: "Variaveis",
        aula03: "Condicional"
    }
}

const sting_pessoa= '{"nome":"RHUAN","canal":"CFB CURSOS","curso":"JS","aulas":{"aula01":"Introdução","aula02":"Variaveis","aula03":"Condicional"}'

const s_json_pessoa=JSON.stringify(pessoas)
const o_json_pessoa=JSON.parse(sting_pessoa)


console.log(pessoas)
console.log(s_json_pessoa)
console.log(o_json_pessoa)