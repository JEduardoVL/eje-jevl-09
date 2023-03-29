const express = require("express");
const app = express();

app.get("/", (req,res) =>{
    res.send("Hola este es un servidor en Noda.js con express");
});
app.get("*",(req,send)=>{
    res.send("404 | Pagina no encontrada");
});

app.get("/Productos",(req,res)=>{
    res.send("Pagina de productos");
});


const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log('El servidor en Noda.js con express escuchando en el puerto http://localhost:${port}');
});
