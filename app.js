const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
                
// option ('l')
// listar
// boolean
// default = false

console.clear();

//console.log(process.argv);
//console.log(argv);
//console.log('base: yargs', argv.b);

//console.log(process.argv);

//const [, ,arg3 = 'base-5' ] = process.argv;
//const [ , base = 5] = arg3.split('=');

//console.log(base);
//const base = 5;

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));
