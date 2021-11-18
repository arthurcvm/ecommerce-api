const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const {finalizarCompra, obterCidadesPorEstado} = require("./controllers/mini-ecommerce.js");
const { application } = require("express");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/mini-ecommerce/checkout/finalizar-compra', finalizarCompra);
app.get('/mini-ecommerce/estado/:siglaEstado/cidades', obterCidadesPorEstado);

app.listen(port, () => console.log(`Servidor inicializado na porta ${port}`));
