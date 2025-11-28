const express = require("express"); 
const path = require("path");
const app = express(); 
const port = 3000; 

app.use(express.json());
app.use(express.static("FrontEnd"));

let Notas = [
    {Materia: "Calculo", Nota: 5, Creditos: 3},
    {Materia: "NFI", Nota: 4, Creditos: 3}, 
    {Materia: "Sistemas Operativos", Nota: 5, Creditos: 3}     
];

app.get("/", (req, res) => {
    return res.sendFile(path.join(__dirname, "FrontEnd", "Estructura.html"));
});

app.listen(port, () =>{
    console.log("Servidor escuchando en http://localhost:" + port);
});
