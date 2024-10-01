const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("helo world");
});

app.get("/teste", (req, res) => {
  res.send("página de teste");
});

app.get("/teste/:id", (req, res) => {
  res.send(` id enviado foi: ${req.params.id}`);
});

const PORT = 3333;

app.listen(PORT, console.log(`estou na porta ${PORT}`));
