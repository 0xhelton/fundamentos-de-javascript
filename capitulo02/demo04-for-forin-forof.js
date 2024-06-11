const textoPar = "par";
const textoImpar = "impar";

for (let index = 0; index <= 10; index++) {
  const decisao = index % 2 === 0 ? textoPar : textoImpar;
  console.log(`O Número ${index} é ${decisao}`);
}

const minhaListaDeTarefas = [
  {
    id: parseInt(Math.random() * 10),
    nome: "Zezinho",
    superPoder: "Veloz",
  },
  {
    id: Math.random(),
    nome: "Mariazinha",
    superPoder: "Super força",
  },
];
console.log(minhaListaDeTarefas);

for (let index = 0; index < minhaListaDeTarefas.length; index++) {
  const item = minhaListaDeTarefas[index];

  console.log(`
    id: ${item.id}
    nome: ${item.name}
    super poder: ${item.superPoder}
    `);
}

// nao precisa do contador

for (const index in minhaListaDeTarefas) {
  const item = minhaListaDeTarefas[index];
  console.log("Nome", item.nome);
}

// nao precisa usar o index

for (const item of minhaListaDeTarefas) {
  console.log("Nome", item.nome);
}
