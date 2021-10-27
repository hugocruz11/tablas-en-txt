const { createFile } = require('./helpers/multiplicar');
const argv = require('./config/yargs')

console.clear()

//const [, , arg3 = 'base=5'] = process.argv
//const [, base = 5] = arg3.split('=');

//const base = 8
createFile(argv.b, argv.l, argv.u)
    .then(nameFile => console.log(nameFile, 'Creado'))
    .catch(err => console.log(err));
