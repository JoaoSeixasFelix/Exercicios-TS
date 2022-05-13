"use strict";
function saudarComOla(pessoa) {
    console.log("Ola " + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = "Joanna";
}
const pessoa = {
    nome: "Joao",
    idade: 27,
    saudar(sobrenome) {
        console.log(`Ola eu sou ${this.nome} ${sobrenome}, e tenho ${this.idade} anos`);
    },
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
pessoa.saudar("Skywalker");
// usando Classes
class Cliente {
    constructor() {
        this.nome = "";
        this.ultimaCompra = new Date();
    }
    saudar(sobrenome) {
        console.log(`Ola eu sou ${this.nome} ${sobrenome}, e tenho ${this.idade} anos`);
    }
}
const meuClient = new Cliente();
meuClient.nome = "Han";
meuClient.idade = 32;
saudarComOla(meuClient);
meuClient.saudar("Solo");
console.log(meuClient.ultimaCompra);
let potencia;
potencia = (base, exp) => {
    // return num1 ** num2
    return Array(exp)
        .fill(base)
        .reduce((t, a) => t * a);
};
console.log(potencia(5, 2));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class AbstrataABD {
    a() { }
    b() { }
}
//# sourceMappingURL=interfaces.js.map