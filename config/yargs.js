
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla a crear'
    })
    .option('u', {
        alias: 'until',
        type: 'number',
        default: 10,
        describe: 'Valor final a multiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'la base tiene que ser un numero'
        } else {
            return true;
        }
    })
    .argv;

module.exports = argv;