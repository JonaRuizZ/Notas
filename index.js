// Importamos librería que nos permitirá leer lo que el usuario escriba
const readLine = require("node:readline");
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

let notas = ["Mi primera nota", "Mi segunda nota", "Mi tercera nota"];

// CREATE
const crearNota = () => {
    rl.question("Escribe tu nota: ", nota => {
        notas.push(nota)
        console.log("La nota fue agregada correctamente :)")
        console.log("")
        console.log("Este es tu listado de notas:")
        listarNota();
        editarNota();
    });
};

crearNota();

// READ
const listarNota = () => {
    notas.forEach((e, i) => console.log(`${i + 1} - ${e}`));
};

// UPDATE
const editarNota = () => {
    rl.question("¿Qué nota quieres cambiar?", num => {
        rl.question("Escribe el nuevo contenido", text => {
            notas[num-1] = text;
            listarNota();
        })
    })
};
// DELETE