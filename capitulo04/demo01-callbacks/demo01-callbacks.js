const fs = require("fs");
// fs.readFile("./capitulo04/demo01-callbacks/arq1.txt", (error, resposta) => {
//   if (error) {
//     console.error("Deu ruim ***", error.stack);
//   }

//   console.log("resposta", resposta.toString());
// });

fs.readFile("./capitulo04/demo01-callbacks/arq1.txt", (errorArq1, respostaArq1) => {
  if (errorArq1) {
    console.error("Deu ruim no arq1", errorArq1);
    return;
  }
  fs.readFile("./capitulo04/demo01-callbacks/arq2.txt", (errorArq2, respostaArq2) => {
    if (errorArq2) {
      console.error("Deu ruim no arq2", errorArq2);
      return;
    }
    fs.readFile("./capitulo04/demo01-callbacks/arq3.txt", (errorArq3, respostaArq3) => {
      if (errorArq3) {
        console.error("Deu ruim no arq2", errorArq3);
        return;
      }
      const conteudo = `${respostaArq1}\n${respostaArq2}\n${respostaArq3}`;
      fs.writeFile("./capitulo04/demo01-callbacks/final.txt", conteudo, (errorWrite, respostaWrite) => {
        if (errorWrite) {
          console.error("Deu ruim na gravação", errorWrite);
          return;
        }
        console.log("Arquivo salvo com sucesso!!");
      });
    });
  });
});
