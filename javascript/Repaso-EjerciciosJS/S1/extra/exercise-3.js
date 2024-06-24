const movies = [
  { name: "Your Name", durationInMinutes: 130 },
  { name: "Pesadilla antes de navidad", durationInMinutes: 225 },
  { name: "Origen", durationInMinutes: 165 },
  { name: "El señor de los anillos", durationInMinutes: 967 },
  { name: "Solo en casa", durationInMinutes: 214 },
  { name: "El jardin de las palabras", durationInMinutes: 40 },
];

for (let i = 0; i < movies.length; i++) {
  if (movies[i].durationInMinutes < 100) {
    console.log(
      `La película ${movies[i].name} es Pequeña con ${movies[i].durationInMinutes} minutos de duración.`
    );
  } else if (movies[i].durationInMinutes < 200) {
    console.log(
      `La película ${movies[i].name} es Mediana con ${movies[i].durationInMinutes} minutos de duración.`
    );
  } else {
    console.log(
      `La película ${movies[i].name} es Grande con ${movies[i].durationInMinutes} minutos de duración.`
    );
  }
}
