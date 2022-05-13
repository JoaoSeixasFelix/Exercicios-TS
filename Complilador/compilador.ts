let canal: string = "Gaveta";
let inscritos: number = 610234;

// canal = inscritos;

console.log(`Canal = ${canal}`);

nome = "Pedro";
console.log(`Nome = ${nome}`);

function soma(a: any, b: any) {
  return a + b;
}

// exemplo da verificicacao do controle de fluxo realizado pelo TS

let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = "abc";

function saudar(isManha: boolean): string {
  let saudacao: string;
  if (isManha) {
    saudacao = "Bom dia!";
  } else {
    saudacao = "Tenha uma Boa vida!";
  }
  return saudacao;
}
