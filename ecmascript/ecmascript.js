"use strict";
// Effeito de Hosting (Icamento).
var seraQuePode = "Pode!";
console.log(seraQuePode);
// Utilizacao LET, nao acontece o efeito de hoisting.
let pode = "?";
console.log(pode);
/**
 * Verificacao do tipo de escopo no qual a variavel se encontra
 * Conforme abaixo, a  variavel acao possui escopo global, pois essa declaracao, nao se enquandra
 * no contexto de function, e se encontra em escopo de bloco
 **/
// let estaFrio: boolean = true;
// if (estaFrio) {
//   var acao = "Colocar o Casaco!";
// }
// console.log(acao);
/**
 * Verificacao do tipo de escopo no qual a variavel se encontra
 * Conforme abaixo, a variavel acao possui escopo de bloco.
 **/
let estaQuente = true;
if (estaQuente) {
    let acao = "Tira Casaco!";
    console.log(acao);
}
var segredo = "externo!";
function revelar() {
    var segredo = "interno";
    console.log(segredo);
}
revelar();
console.log(segredo);
const obj3 = {
    name: "Marcelo",
    lastName: "Alcantra",
    contato: 3459872,
};
function login(name, lastName, contato) {
    obj3.name = name;
    obj3.lastName = lastName;
    obj3.contato = contato;
}
login("Vitu", "Resende", 31485854);
console.log(obj3);
function verificandoCadastro(name) {
    if (obj3.name === name) {
        console.log(`Hello ${name}, login has been successful!!!!`);
    }
    else {
        console.log(`Hello ${name}, you don't have a account!!!!`);
    }
}
verificandoCadastro("Vitu");
console.log(obj3);
// Arrow Function
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(10, 20));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(10, 10));
const saudacao = () => console.log("Ola!!");
saudacao();
const falarCom = (pessoa) => console.log("Ola " + pessoa);
falarCom("Joao");
//this
// function normalComThis() {
//   console.log(this);
// }
// const normalComThisEspecial = normalComThis.bind({ nome: "Oliver" });
// normalComThisEspecial();
// const arrowComThis = () => console.log(this);
// arrowComThis();
function contagemRegressiva(inicio = 5, fim = inicio - 5) {
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim!!!");
}
contagemRegressiva();
contagemRegressiva(5);
// Spread && Rest
// Utilizacao do Spread
const numbers = [1, 10, 99, -5, 200, 1034];
console.log(`The biggest number is: ${Math.max(...numbers)}`);
// Utilizacao do Rest
const turmaA = ["Joao", "Maria", "Flavio", "Calos"];
const turmaB = ["Carlos", ...turmaA, "Pedro", "Mateus"];
console.log(turmaB);
function retornaArray(...args) {
    return args;
}
const numeros = retornaArray(1, 2, 4, 12, 20, 80, 60, 50);
console.log(numeros);
console.log(retornaArray(...numbers));
//Rest e Spread (Tupla)
const /**Exemplo de tupla ====>**/ tupla = [
    1,
    "abc",
    false,
];
function tuplaParams1(a, b, c) {
    // utilizando de Spread.
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParams1(...tupla);
function tuplaParams2(...params) {
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParams2(...tupla);
const caracteristicas = ["Motor Zetec", 2020];
// const motor = caracteristicas[0];
// const anoDeFabricacao = caracteristicas[1];
const [motor, anoDeFabricacao] = caracteristicas;
console.log(`the vehicle has an engine ${motor}, and was launched in the year of ${anoDeFabricacao}`);
//Destructuring {objeto}
const item = {
    nome: "SSD 480GB",
    preco: 200,
};
// const nomeItem = item.preco;
// const preco = item.preco;
const { nome: n, preco } = item;
console.log(`The item: ${n}, has a price of ${preco}$`);
// Exercicios 1
const dobro = (valor) => valor * 2;
console.log(dobro(10));
//Exercicio 2
const dizerOla = (nome = "Pessoa") => !nome ? (nome = "Pessoa") : console.log(`Ola, ${nome}`);
dizerOla("Pedro");
//Exercicio 3
const nums = [-3, 33, 38, 5];
console.log(`The smallest number found was ${Math.min(...nums)}`);
const array = [55, 20, ...nums];
console.log(array);
//Exercicio 4
const notas = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
console.log(`Nota 1): ${nota1}, Nota 2) ${nota2}, Nota 3) ${nota3}`);
const cientista = {
    primeiroNome: "Will",
    experiencia: 12,
};
const { primeiroNome: x, experiencia: p } = cientista;
console.log(`The Cientist ${x}, have ${p} years of experience`);
// asynchornous JS (Example)
// function esperar3s(callback: (dado: string) => void) {
//   setTimeout(() => {
//     callback("3 Segundo Depois....");
//   }, 3000);
// }
// esperar3s(function (resultado) {
//   console.log(resultado);
// });
// function esperar3sPromise() {
//   return new Promise((resolve: any) => {
//     setTimeout(() => {
//       resolve("3 Segundo Depois Whith Promise....");
//     }, 3000);
//   });
// }
// esperar3sPromise().then((dado) => console.log(dado));
// fetch("https://swapi.dev/api/people/1")
//   .then((res) => res.json())
//   .then((personagens) => personagens.films)
//   .then((films) => fetch(films[1]))
//   .then((resFilm) => resFilm.json())
//   .then((filme) => console.log(filme.title));
//# sourceMappingURL=ecmascript.js.map