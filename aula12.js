/*
let n1=[10,20,30]
let n2=[11,22,33,44,55]
let n3=[...n1,...n2]

console.log("N1: " + n1)
console.log("N2: " + n2)
console.log("N3: " + n3)
console.log("O tipo da N3 é: " + typeof(n3))*/

/*
const jogador1={nome:"Rhuan",energia:150,vidas:3,magia:150}
const jogador2={nome:"Carlos",energia:150,vidas:6,velocidade:200}
const jogador3={...jogador1,...jogador2}

console.log(jogador3)*/

const obj = document.getElementsByTagName("div");
const obj1 = [...document.getElementsByTagName("div")];

obj1.forEach((elementos) => {
  console.log(elementos);
});

console.log(obj);
console.log(obj1);

/*
const soma=(v1,v2,v3)=>{
    return v1+v2+v3
}
let valores=[1,5,4]

console.log(soma(...valores))
*/
