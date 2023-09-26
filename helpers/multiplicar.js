const fs = require('fs'); //fs = file sistem

const crearArchivo = async(base, listar, hasta) => {
    try {
        let j = 10;
        if(hasta){
            j = hasta;
        }
        var colors = require('colors');
        if(listar == true){
            console.log('============'.rainbow);
            console.log(`tabla del ${base}`.bold);
            console.log('============'.rainbow);
        }
        let salida = '';
        let consola = '';

        for (let i=1;   i<=j;   i++){
            salida += (`${base} x ${i} = ${base * i}\n`);
            consola += (`${base} ${'x'.bgBrightWhite} ${i} = `+`${base * i}`.bgBrightGreen+`\n`);
        }
        if(listar == true){    
            console.log(consola);
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt creado`;
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    //crearArchivo: crearArchivo // redundante
    crearArchivo
}