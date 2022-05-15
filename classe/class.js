"use strict";
class Data {
    constructor(mounth = 1, day = 1, year = 1970) {
        this.month = mounth;
        this.day = day;
        this.year = year;
    }
}
const aniversario = new Data(3, 11, 1991);
aniversario.day = 4;
console.log(aniversario.day);
console.log(typeof aniversario);
const casamento = new Data();
casamento.year = 2017;
console.log(casamento);
class DataEsperta {
    constructor(day = 1, mounth = 1, year = 1970) {
        this.day = day;
        this.mounth = mounth;
        this.year = year;
    }
}
const aniversarioEsperto = new DataEsperta(3, 11, 1991);
aniversario.day = 4;
console.log(aniversario.day);
console.log(typeof aniversario);
const casamentoEsperto = new DataEsperta();
casamento.year = 2017;
console.log(casamento);
//Desafio Prodruto = using this.
// class Product {
//   name: string;
//   price: number;
//   discount: number;
//   constructor(
//     name: string = "user.random",
//     price: number = 0,
//     discount: number = 0
//   ) {
//     this.name = name;
//     this.price = price;
//     this.discount = discount;
//   }
// }
// const mouse = new Product("Mouse Razer Dathadder v2", 80, 10);
// const { name: f, price: z, discount: q } = mouse;
// console.log(`The mouse ${f}, which costs ${z}$ is with ${q}% discount`);
// const pen = new Product("Pentel", 10);
// const { name: pencil, price: kakaroto } = pen;
// console.log(pencil, kakaroto);
//Desafio Prodruto = using public.
class NewProduct {
    constructor(name = "product.random", price = 10, discount = 0) {
        this.name = name;
        this.price = price;
        this.discount = discount;
    }
    precoComDesconto() {
        if (this.discount != 0 && this.discount != null) {
            return this.price * (1 - this.discount);
        }
        else {
            return this.price;
        }
    }
    resume() {
        if (this.discount != 0 && this.discount != null) {
            return `${this.name} it's costing ${this.precoComDesconto()}$ with ${this.discount * 100}% discount`;
        }
        else {
            return `${this.name} it's costing ${this.price}$`;
        }
    }
}
const keyBoard = new NewProduct("keychron", 175, 0.2);
console.log(keyBoard.resume());
const fallen = new NewProduct("Pantera", 50);
console.log(fallen.resume());
const fall = new NewProduct("Laptop", 5000, 0.5);
console.log(fall.resume());
/**
 *
 *  * /Privacy and Public
 *
 * */
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro("Ford", "Ka", 185);
Array(50)
    .fill(0)
    .forEach(() => carro1.acelerar());
console.log(`A velocidade atual do carro: ${carro1.acelerar()}`);
Array(40)
    .fill(0)
    .forEach(() => carro1.frear());
console.log(`Velocidade atual do carro: ${carro1.frear()}`);
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super("Ferrari", modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari("F40", 320);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());
// Getters & Setters
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Pessoa();
pessoa1.idade = 10;
console.log(pessoa1);
// Atribustos and static method's
class Matematica {
    static areaCirc(raio) {
        return this.PI * raio * raio;
    }
}
Matematica.PI = 3.141619;
console.log(Matematica.areaCirc(4));
// Classe Abstrata
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
class Multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}
let c1 = new Soma();
c1.executar(1, 2, 4, 6, 7, 9);
console.log(c1.getResultado());
c1 = new Multiplicacao();
c1.executar(1, 2, 3, 4, 5);
console.log(c1.getResultado());
//# sourceMappingURL=class.js.map