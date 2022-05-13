interface Humano {
  nome: string;
  idade?: number;
  [prop: string]: any;
  saudar(sobrenome: string): void;
}

function saudarComOla(pessoa: Humano) {
  console.log("Ola " + pessoa.nome);
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = "Joanna";
}

const pessoa: Humano = {
  nome: "Joao",
  idade: 27,
  saudar(sobrenome: string) {
    console.log(
      `Ola eu sou ${this.nome} ${sobrenome}, e tenho ${this.idade} anos`
    );
  },
};

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
pessoa.saudar("Skywalker");

// usando Classes

class Cliente implements Humano {
  nome: string = "";
  idade?: number;
  ultimaCompra: Date = new Date();
  [prop: string]: any;
  saudar(sobrenome: string): void {
    console.log(
      `Ola eu sou ${this.nome} ${sobrenome}, e tenho ${this.idade} anos`
    );
  }
}

const meuClient = new Cliente();
meuClient.nome = "Han";
meuClient.idade = 32;
saudarComOla(meuClient);
meuClient.saudar("Solo");
console.log(meuClient.ultimaCompra);

//Interface Function

interface FuncaoCalculo {
  (a: number, b: number): number;
}

let potencia: FuncaoCalculo;

potencia = (base: number, exp: number): number => {
  // return num1 ** num2

  return Array(exp)
    .fill(base)
    .reduce((t, a) => t * a);
};

console.log(potencia(5, 2));

// heranca

interface A {
  a(): void;
}

interface B {
  b(): void;
}

interface ABC extends A, B {
  c(): void;
}

class RealA implements A {
  a(): void {}
}

class RealAB implements A, B {
  a(): void {}
  b(): void {}
}

class RealABC implements ABC {
  a(): void {}
  b(): void {}
  c(): void {}
}

abstract class AbstrataABD implements A, B {
  a(): void {}
  b(): void {}
  abstract d(): void;
}
