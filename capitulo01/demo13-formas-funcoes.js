function minhaFuncao1(parametro1) {
  return `aeeeee`;
}

const minhaFuncao2 = function (parametro1) {
  return `aeeee ${parametro1}`;
};

const minhaFuncao3 = (parametro1) => {
  return `aeeee ${parametro1}`;
};

const minhaFuncao4 = (parametro1) => `aeeee ${parametro1}`;

const obj1 = {
  minhaFuncao: (parametro1) => `aeee ${parametro1}`,
};

obj1.minhaFuncao("teste");

const obj2 = {
  minhaFuncao(parametro1) {
    return `aeeee ${parametro1}`;
  },
};

obj2.minhaFuncao();
