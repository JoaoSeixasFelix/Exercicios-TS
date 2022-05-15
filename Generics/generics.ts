function echo(objeto: any) {
  return objeto;
}

console.log(echo("Joao").length);
console.log(echo(25));
console.log(echo({ nome: "Pedro", idade: 32 }));

// Usando Generics

function echoMelhorado<T>(objeto: T): T {
  return objeto;
}

console.log(echoMelhorado("Joao").length);
console.log(echoMelhorado<number>(25));
console.log(echoMelhorado({ nome: "Pedro", idade: 32 }));

//Generics disponiveis na API

const avaliacoes: Array<number> = [10, 9.3, 7.7];
avaliacoes.push(8.4);
console.log(avaliacoes);

function imprimir<T>(args: T[]) {
  args.forEach((elemento) => console.log(elemento));
}

imprimir([10, 20, 50, 60, "50"]);
imprimir<number>([10, 20, 30, 40]);
imprimir<string>(["Pedro", "Oliver", "Bardo"]);
imprimir<{ nome: string; idade: number }>([
  { nome: "Marcelo", idade: 27 },
  { nome: "Mario", idade: 35 },
]);

type Alunos = { nome: string; idade: number };

imprimir<Alunos>([
  { nome: "Marcelo", idade: 27 },
  { nome: "Mario", idade: 35 },
]);

// Tipo Generics

namespace genericsFunction {
  // utilizando do tipo generics direto na function
  const chamarEcho: <t>(data: t) => t = echoMelhorado;
  console.log(chamarEcho("Alguma coisa"));
}

// Utilizando do tipo Generics atraves da Function

type Echo = <t>(data: t) => t;
const chamarEcho: Echo = echoMelhorado;
console.log(chamarEcho("Alguma coisa"));

//Generics com Classe

abstract class operacaoBinaria<T, R> {
  constructor(public operando1: T, public operando2: T) {}

  abstract executar(): R;
}

class somaBinaria extends operacaoBinaria<number, number> {
  executar(): number {
    return this.operando1 + this.operando2;
  }
}

console.log(new somaBinaria(3, 4).executar());
// console.log(new somaBinaria({}, {}).executar());

class DiferencaEntreDatas extends operacaoBinaria<Data, string> {
  getTime(data: Data): number {
    let { month, day, year } = data;
    return new Date(`${month}/${day}/${year}`).getTime();
  }

  executar(): string {
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

class Fila<T> {
  private fila: Array<T>;

  constructor(...args: T[]) {
    this.fila = args;
  }
  entrar(elemento: T) {
    this.fila.push(elemento);
  }

  proximo(): T | null {
    if (this.fila.length >= 0 && this.fila[0]) {
      const primeiro = this.fila[0];
      this.fila.splice(0, 1);
      return primeiro;
    } else {
      return null;
    }
  }
  imprimir() {
    console.log(this.fila);
  }
}

const fila = new Fila<string>("Gui", "Pedro", "Ana", "Lu");
fila.imprimir();
fila.entrar("Rafael");
fila.imprimir();
fila.proximo();
fila.proximo();
fila.proximo();
fila.imprimir;

// Desafio Final Genericts

// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// MŽtodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()

type Par<C, V> = { chave: C; valor: V };

class Mapa<C, V> {
  itens: Array<Par<C, V>> = new Array<Par<C, V>>();

  obter(chave: C): Par<C, V> | null {
    const resultado = this.itens.filter((i) => i.chave === chave);
    return resultado ? resultado[0] : null;
  }

  colocar(par: Par<C, V>) {
    const encontrado = this.obter(par.chave);
    if (encontrado) {
      encontrado.valor = par.valor;
    } else {
      this.itens.push(par);
    }
  }

  limpar() {
    this.itens = new Array<Par<C, V>>();
  }

  imprimir() {
    console.log(this.itens);
  }
}

const mapa = new Mapa<number, string>();
mapa.colocar({ chave: 1, valor: "Pedro" });
mapa.colocar({ chave: 2, valor: "Rebeca" });
mapa.colocar({ chave: 3, valor: "Maria" });
mapa.colocar({ chave: 1, valor: "Gustavo" });

console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
