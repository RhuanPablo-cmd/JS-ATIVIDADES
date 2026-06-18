const objs=document.getElementsByTagName("div")

let num = [10, 20, 30, 40, 50];

for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}
console.log("====================================");

for (n in num) {
  console.log(num[n]);
}
console.log("====================================");

for (m of objs) {
  console.log(m.innerHTML="Curso");
}

for (mu in objs) {
  console.log(objs[mu].innerHTML);
}
