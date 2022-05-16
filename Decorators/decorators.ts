// Desafio Decorator perfilAdmin

type Construtor = { new (...args: any[]): {} };
const usuarioLogado = {
  nome: "Guilherme Filho",
  email: "guigui@gmail.com",
  admin: false,
};

class MudancaAdministrativa {
  critico() {
    console.log("Algo critico foi alterado!");
  }
}

new MudancaAdministrativa().critico();

function perfilAdmin<T extends Construtor>(constructor: T) {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      if (!usuarioLogado || !usuarioLogado.admin) {
        throw new Error("Acess Denied.");
      }
    }
  };
}

class ContaCorrente {
  private saldo: number;

  constructor(saldo: number) {
    this.saldo = saldo;
  }
  @congelar
  sacar(valor: number) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
    } else {
      return false;
    }
  }
  @congelar
  getSaldo() {
    return this.saldo;
  }
}

const cc = new ContaCorrente(2000);
cc.sacar(1800);
console.log(cc.getSaldo());

function congelar(
  alvo: any,
  nomePropriedade: string,
  descritor: PropertyDescriptor
) {
  console.log(alvo);
  console.log(nomePropriedade);
  descritor.writable = false;
}

