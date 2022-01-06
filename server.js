const express = require("express");

const app = express();

app.set("view engine", "ejs");

const subtitle = "Uma liguagem de modelagem para criação de página HTML";
app.get("/", (req, res) => {
  const items = [
    {
      title: "D",
      message: "esenvolver aplicações/serviços de forma fácil",
    },
    {
      title: "E",
      message: " JS usa Javascript para renderizar HTML",
    },
    {
      title: "M",
      message: "uito facil de usar",
    },
    {
      title: "A",
      message: "rmozinho",
    },
    {
      title: "I",
      message: "nstall EJS",
    },
    {
      title: "S",
      message: " -intaxe simples",
    },
  ];
  res.render("pages/index", {
    qualitys: items,
    subtitle,
  });
});

app.get("/sobre", (req, res) => {
  res.render("pages/about");
});

app.listen(8080, () => console.log("Rodando servidor"));
