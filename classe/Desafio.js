"use strict";
// Desafios
class Moto {
    constructor(nome, velocidade = 0) {
        this.nome = nome;
        this.velocidade = velocidade;
    }
    buzinar() {
        console.log("Toooooooooot!");
    }
    acelerar(delta) {
        return (this.velocidade = this.velocidade + delta);
    }
}
const moto = new Moto("Ducati");
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
// Exercicio 2 - Heranca
class objeto2D {
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
    }
}
class retangulo extends objeto2D {
    constructor(base = 0, altura = 0) {
        super(base, altura);
    }
    area() {
        return this.base * this.altura;
    }
}
const areaRetangulo = new retangulo(5, 7);
console.log(`The area of the rectangle will be: ${areaRetangulo.area()}m²`);
// Exerc団io 3 - Getters & Setters
class estagiario {
    constructor() {
        this._primeiroNome = "";
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor;
        }
        else {
            this._primeiroNome = "";
        }
    }
}
const estagiarioNome = new estagiario();
console.log(estagiarioNome.primeiroNome);
estagiarioNome.primeiroNome = "Le";
console.log(estagiarioNome.primeiroNome);
estagiarioNome.primeiroNome = "Leonardo";
console.log(estagiarioNome.primeiroNome);
//# sourceMappingURL=Desafio.js.map