"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo("Joao").length);
console.log(echo(25));
console.log(echo({ nome: "Pedro", idade: 32 }));
// Usando Generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado("Joao").length);
console.log(echoMelhorado(25));
console.log(echoMelhorado({ nome: "Pedro", idade: 32 }));
//Generics disponiveis na API
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
console.log(avaliacoes);
function imprimir(args) {
    args.forEach((elemento) => console.log(elemento));
}
imprimir([10, 20, 50, 60, "50"]);
imprimir([10, 20, 30, 40]);
imprimir(["Pedro", "Oliver", "Bardo"]);
imprimir([
    { nome: "Marcelo", idade: 27 },
    { nome: "Mario", idade: 35 },
]);
imprimir([
    { nome: "Marcelo", idade: 27 },
    { nome: "Mario", idade: 35 },
]);
// Tipo Generics
var genericsFunction;
(function (genericsFunction) {
    // utilizando do tipo generics direto na function
    const chamarEcho = echoMelhorado;
    console.log(chamarEcho("Alguma coisa"));
})(genericsFunction || (genericsFunction = {}));
const chamarEcho = echoMelhorado;
console.log(chamarEcho("Alguma coisa"));
//Generics com Classe
class operacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
class somaBinaria extends operacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new somaBinaria(3, 4).executar());
// console.log(new somaBinaria({}, {}).executar());
class DiferencaEntreDatas extends operacaoBinaria {
    getTime(data) {
        let { month, day, year } = data;
        return new Date(`${month}/${day}/${year}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diferenca = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diferenca / dia)} dia(s)`;
    }
}
const d1 = new Data(2, 15, 2022);
const d2 = new Data(3, 3, 2022);
console.log(new DiferencaEntreDatas(d1, d2).executar());
// Desafio Classe Fila
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    entrar(elemento) {
        this.fila.push(elemento);
    }
    proximo() {
        if (this.fila.length >= 0 && this.fila[0]) {
            const primeiro = this.fila[0];
            this.fila.splice(0, 1);
            return primeiro;
        }
        else {
            return null;
        }
    }
    imprimir() {
        console.log(this.fila);
    }
}
const fila = new Fila("Gui", "Pedro", "Ana", "Lu");
fila.imprimir();
fila.entrar("Rafael");
fila.imprimir();
fila.proximo();
fila.proximo();
fila.proximo();
fila.imprimir;
class Mapa {
    constructor() {
        this.itens = new Array();
    }
    obter(chave) {
        const resultado = this.itens.filter((i) => i.chave === chave);
        return resultado ? resultado[0] : null;
    }
    colocar(par) {
        const encontrado = this.obter(par.chave);
        if (encontrado) {
            encontrado.valor = par.valor;
        }
        else {
            this.itens.push(par);
        }
    }
    limpar() {
        this.itens = new Array();
    }
    imprimir() {
        console.log(this.itens);
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: "Pedro" });
mapa.colocar({ chave: 2, valor: "Rebeca" });
mapa.colocar({ chave: 3, valor: "Maria" });
mapa.colocar({ chave: 1, valor: "Gustavo" });
console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
//# sourceMappingURL=generics.js.map