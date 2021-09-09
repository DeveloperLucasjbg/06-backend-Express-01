import express from "express";
import fs from "fs";

const app = express();
const PORT = 8080;

const productos = JSON.parse(fs.readFileSync("./productos.txt", "utf-8"))
const randomProduct = () => productos[Math.floor(Math.random() * productos.length)];
console.log(randomProduct)
  let visitas1= 0;
  let visitas2 = 0;

const server = app.listen(PORT, () => {
  console.log("escuchando el 8080", server.address().port);
});
server.on("error", (error) => console.log("Error en servidor", error));

app.get("/", (req, res) => {
  console.log("request a get, RUTA RAIZ");
  res.json({ msg: "Home" })

});
app.get("/items", (req, res) => {
  console.log("request a get recibidi!, RUTA ITEMS");
  res.json(productos);
  ++visitas1
});
app.get("/itemsRandom", (req, res) => {
    console.log("request a get recibidi!, RUTA ITEMS Random");
    res.json(randomProduct());
    // items random sin cantidad desde .txt
    ++visitas2
  });
  app.get("/visitas", (req, res) => {
    console.log("request a get recibidi!, RUTA ITEMS Random");
    res.json({visitas:{items:visitas1,itemsRandoms:visitas2} });
  
  });
  
