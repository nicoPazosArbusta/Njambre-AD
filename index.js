require('./connection'); // importa el archivo de conexión
const User = require('./user'); // importa el esquema

const user = new User({ name: 'eldevsin.site' }); // crea la entidad
user.save(); // guarda en bd