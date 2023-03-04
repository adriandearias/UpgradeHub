const bcrypt = require('bcrypt');

const password = "Pok123";
const password2 = "Pok123";

const passwordEncripted = bcrypt.hashSync(password2, 10);

console.log(bcrypt.hashSync(password, 10));

if(bcrypt.compareSync(password, passwordEncripted)){ //primer valor la no encriptada
    console.log('the passwords match');
}else{
    console.log('the passwords doesnt match');
}