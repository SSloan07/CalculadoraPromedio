const express = require("express"); 
const path = require("path");
const app = express(); 
const port = 3000; 

app.use(express.json());
app.use(express.static("FrontEnd"));
app.use(express.urlencoded({ extended: true }));

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
app.post("/enviar", (req, res) => {
    console.log(req.body);

    const notas = req.body.nota;
    const creditos = req.body.creditos;

    if(!notas || !creditos || notas.length !== creditos.length) {
        return res.status(400).send("Datos incompletos");
    }

    let suma = 0;
    let totalCreditos = 0;

    for (let i = 0; i < notas.length; i++) {
        const nota = parseFloat(notas[i]);
        const credito = parseInt(creditos[i]);
        suma += nota * credito;
        totalCreditos += credito;
    }

    const promedio = (suma / totalCreditos).toFixed(2);
    res.send(`Tu promedio es: ${promedio}`);
});

