// Desafios

class Moto {
  constructor(public nome: string, public velocidade: number = 0) {}

  public buzinar() {
    console.log("Toooooooooot!");
  }

  public acelerar(delta: number): number {
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
  constructor(public base: number = 0, public altura: number = 0) {}
}

class retangulo extends objeto2D {
  constructor(base: number = 0, altura: number = 0) {
    super(base, altura);
  }
  area(): number {
    return this.base * this.altura;
  }
}

const areaRetangulo = new retangulo(5, 7);
console.log(`The area of the rectangle will be: ${areaRetangulo.area()}m²`);

// Exerc団io 3 - Getters & Setters

class estagiario {
  private _primeiroNome: string = "";

  get primeiroNome(): string {
    return this._primeiroNome;
  }

  set primeiroNome(valor) {
    if (valor.length >= 3) {
      this._primeiroNome = valor;
    } else {
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
