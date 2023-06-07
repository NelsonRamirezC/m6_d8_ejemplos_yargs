const usuarios = require("./usuarios.js");

const opcionesBuscar = {
    id: {
        describe: "Argumento querecibe el id del usuario a buscar",
        demand: true,
        alias: "i",
    },
};
const buscar = (argumentos) => {
    let id = argumentos.id;
    let usuario = usuarios.find((usuario) => usuario.id == id);
    usuario ? console.log(usuario) : console.log("Usuario no encontrado.");
};

let configBuscar = {
    opciones: opcionesBuscar,
    callback: buscar,
};

module.exports = configBuscar;
