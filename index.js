const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const {
  listarTarefaId,
  listarTarefas,
  cadastrarTarefa,
  atualizarTarefa,
  removerTarefa,
  concluirTarefa
} = require("./controllers/gerenciador-tarefas.js");

const {finalizarCompra} = require("./controllers/mini-ecommerce.js");
const { application } = require("express");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.get("/gerenciador-tarefas", listarTarefas);

app.get("/gerenciador-tarefas/:id", listarTarefaId);

app.post("/gerenciador-tarefas", cadastrarTarefa);

app.put("/gerenciador-tarefas/:id", atualizarTarefa);

app.delete("/gerenciador-tarefas/:id", removerTarefa);

app.put("/gerenciador-tarefas/:id/concluir", concluirTarefa);

//mini-ecommerce
app.post('/mini-ecommerce/checkout/finalizar-compra', finalizarCompra);

app.listen(port, () => console.log(`Servidor inicializado na porta ${port}`));
