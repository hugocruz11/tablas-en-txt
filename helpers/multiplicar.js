const fs = require('fs');
require('colors');

const createFile = async (base = 5, list = false, until = 10) => {
    try {
        console.log('==============');
        console.log('Tabla del:', base);
        console.log('==============');

        let salida = ''
        for (let i = 1; i <= until; i++) {
            salida += `${base} x ${i} = ${base * i}\n`
        }
        if (list) {
            console.log(salida.green);
        }
        await fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`
    } catch (error) {
        throw 'File dosent created'
    }
}

module.exports = {
    createFile,
}