let nota = 4;

switch (nota) {
  case 1:
    console.log("Parabens, Você chegou em primeiro lugar");
    break;
  case 2:
    console.log("Você chegou em segundo lugar");
    break;
  case 3:
    console.log("Você chegou em terceiro lugar");
    break;
  case 4:
  case 5:
  case 6:
    console.log("Você ganhou o premio de participação!!!");
    break;
  default:
    console.log("Você não teve colocação");
    break;
}
