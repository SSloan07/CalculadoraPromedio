const express = require("express"); 
const app = express(); 
const port = 3000; 

app.use(express.json()); // Esto hace que todos los datos que el usuario mande se van a convertir a JSON 


let Notas = [
    {Materia: "Calculo", Nota: 5, Creditos: 3},
    {Materia: "NFI", Nota: 4, Creditos:3}, 
    {Materia: "Sistemas Operativos", Nota: 5, Creditos:3},     
];
app.get("/", (req, res) => {
    return res.json(Notas); 
}); 
app.listen(port, () =>{
    console.log("Servidor escuchando en http://localhost:"+port); 
}); 