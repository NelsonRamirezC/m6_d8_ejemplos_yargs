const { v4: uuid } = require("uuid");
const usuarios = require("./usuarios.js");

let opcionesAgregar = {
    nombre: {
        describe: "Argumento que recibe nombre",
        demand: true,
        alias: "n",
    },
    apellido: {
        describe: "Argumento que recibe apellido",
        demand: true,
        alias: "a",
    },
    edad: {
        describe: "Argumento que recibe la edad",
        demand: true,
        alias: "e",
    },
};

const agregar = (argumentos) => {
    let id = uuid().slice(0, 6);
    let { nombre, apellido, edad } = argumentos;
    let nuevoUsuario = {
        id,
        nombre,
        apellido,
        edad: Number(edad),
    };
    usuarios.push(nuevoUsuario);
    console.log("Su lista de usuarios se actualizó:");
    console.table(usuarios);
};

let configAgregar = {
    opciones: opcionesAgregar,
    callback: agregar,
};

module.exports = configAgregar ;
