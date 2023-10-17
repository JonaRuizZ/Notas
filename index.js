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
        console.log("La nota fue AGREGADA correctamente :)")
        menu();
    });
};

// READ
const listarNota = () => {
    console.log("****** Este es tu listado de notas ******")
    notas.forEach((e, i) => console.log(`${i + 1} - ${e}`));
    menu();
};

// UPDATE
const editarNota = () => {
    rl.question("¿Qué nota quieres cambiar?: ", num => {
        rl.question("Escribe el nuevo contenido: ", text => {
            notas[num - 1] = text;
            listarNota();
            eliminarNota();
        });
    });
};

// DELETE
const eliminarNota = () => {
    rl.question("¿Qué nota quieres eliminar? ", num => {
        // Convierte la entrada del usuario en un número
        num = parseInt(num);

        // Verifica si la entrada es un número válido y si la posición existe en el array
        if (!isNaN(num) && num >= 1 && num <= notas.length) {
            // Utiliza el método splice para eliminar la nota en la posición especificada
            notas.splice(num - 1, 1);
            console.log("La nota fue eliminada correctamente :)");
            console.log("");
            console.log("Este es tu listado de notas actualizado:");
            listarNota();
        } else {
            console.log("La posición ingresada no es válida.");
        }
    });
};

// MENÚ
const menu = () => {
    console.log("")
    console.log("****** Bienvenido a las notas ******")
    console.log("")
    console.log(">>> Seleccione una opción <<<")
    console.log("1.- Crear una nota")
    console.log("2.- Ver todas tus notas")
    console.log("3.- Editar una nota")
    console.log("4.- Eliminar una nota")
    console.log("5.- Cerrar el programa")
    console.log("")

    rl.question("Digita la opción seleccionada: ", opcion => {
        switch (opcion) {
            case "1":
                crearNota()
                break;
            case "2":
                listarNota()
                break;
            case "3":
                editarNota()
                break;
            case "4":
                eliminarNota()
                break;
            case "5":
                console.log("Hasta pronto")
                rl.close();
                break;
            default:
                console.log("Opción incorrecta")
                break;
        }
    });
};

menu();