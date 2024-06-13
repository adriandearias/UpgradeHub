const users = [
  { name: "Abel", years: 43 },
  { name: "Maria", years: 18 },
  { name: "Pedro", years: 14 },
  { name: "Samantha", years: 32 },
  { name: "Raquel", years: 16 },
];

users.forEach(element => {
  if(element.years > 17){
    console.log(`El usuario ${element.name} es mayor de edad con ${element.years} años.`);
  }else{
    console.log(`El usuario ${element.name} es menor de edad con ${element.years} años.`);
  }
});