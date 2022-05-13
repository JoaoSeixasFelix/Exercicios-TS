//strings

let nome: string = "John";
console.log(`My name is: ${nome}`);

// Numbers

let idade: number = 25;
console.log(`John's age is: ${idade}`);

//booleans

let possuiHobbies: boolean = false;

const Hobbies: string =
  possuiHobbies === false ? "no have a hobbies" : "Like a Play Futball";

console.log(Hobbies);

//Array

let hobbies: any[] = ["Cozinhar", "Praticar Esportes", "Dormir"];
console.log(hobbies);

hobbies = [100, 200, 300];
console.log(hobbies);

// Tuplas

let adress: [string, number, string] = [
  "Av. Jose Barbosa Filho",
  133,
  "Belo Horizonte - Minas Gerais",
];
console.log(adress);

// enums

enum Cor {
  Cinza, //0
  Verde = 100,
  Azul, //101
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);

console.log(Cor);

//anyu

let carro: any = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2019, tipo: "carro de luxo" };
console.log(carro);

//function

function retornaMeuNome(): string {
  // return idade
  return nome;
}

console.log(retornaMeuNome());

function digaOi(): void {
  console.log("Oi");
}

function multiplicar(numA: number, numB: number): number {
  return numA * numB;
}

console.log(multiplicar(5, 15));
console.log(multiplicar(4, 3));
console.log(multiplicar(12, 8));
console.log(multiplicar(1, 17));

// tipo function

let calculo: (numeroA: number, numeroB: number) => number;
calculo = multiplicar;
console.log(calculo(5, 5));

// objetos

let usuario: { nome: string; age: number } = {
  nome: "John",
  age: 25,
};

console.log(usuario);

usuario = {
  nome: "Maria",
  age: 32,
};

console.log(usuario);

// Desafio

let funcionarios: {
  supervisores: string[];
  baterPonto: (hora: number) => string;
};

const supervisores = ["Pedro", "Marcio", "Flavin", "Elisiario"];

console.log(supervisores);

function baterPonto(hora: number) {
  hora <= 8 ? "Ponto Normal" : "Fora do horario";
}

console.log(baterPonto(10));

// Union Types

let nota: number | string = 10;
console.log(`this is my grade: ${nota}!`);
nota = "10";
console.log(`this is my grade: ${nota}!`);

// Checando Tipos

let valor = 30;

if (typeof valor === "number") {
  console.log("that's a number");
} else {
  console.log(typeof valor);
}

//NEVER - Funcao que nunca chegara ao final, seja por conta do erro, ou do laco infinito.

function falha(msg: string): never {
  throw new Error(msg);
}

const produto = {
  nome: "Soap",
  price: 8,
  validarProduto() {
    if (!this.nome || this.nome.trim().length == 0) {
      falha("he needs a name");
    }
    if (this.price <= 0) {
      falha("invalid price");
    }
  },
};

produto.validarProduto();

let altura = 12;
// altura = null

let alturaOpcional: null | number = 12;
alturaOpcional = null;

type Contato = {
  nome: string;
  tel1: number;
  tel2: null;
};

let contato1 = {
  nome: "Pedro",
  tel1: 864984684,
  tel2: null,
};

console.log(contato1.nome);
console.log(`My contact number is: ${contato1.tel1}`);
console.log(contato1.tel2);

// Desafio

type contaBancaria = {
  saldo: number;
  depositar: (valor: number) => void;
};

type correntista = {
  nome: string;
  contaBancaria: contaBancaria;
  contatos: string[];
};

let contaBancaria = {
  saldo: 3456,
  depositar(valor: number) {
    this.saldo += valor;
  },
};

let correntista = {
  nome: "Ana Silva",
  contaBancaria: contaBancaria,
  contatos: [`34567890`, "98765432"],
};

correntista.contaBancaria.depositar(3000);
console.log(correntista);
