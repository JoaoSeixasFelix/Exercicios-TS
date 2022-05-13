function saudarComOla(pessoa: { nome: string }) {
  console.log("Ola " + pessoa.nome);
}

const pessoa = {
  nome: "Joao",
  idade: 27,
};

saudarComOla(pessoa);
