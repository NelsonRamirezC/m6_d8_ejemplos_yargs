const yargs = require("yargs");
const { v4: uuid } = require("uuid");
const configAgregar = require("./agregar");
const configBuscar = require("./buscar");

const argv = yargs
    .command(
        "buscar",
        "Permite buscar usuario por ID",
        configBuscar.opciones,
        configBuscar.callback
    )
    .command(
        "agregar",
        "Permite agregar un usuario al sistema",
        configAgregar.opciones,
        configAgregar.callback
    )
    .help()
    .locale("es").argv;
