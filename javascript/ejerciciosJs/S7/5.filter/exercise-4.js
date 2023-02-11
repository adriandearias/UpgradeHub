// Dado el siguiente array, utiliza .filter() para generar un nuevo array con los
// streamers que tengan el gameMorePlayed = 'League of legends' y tengan menos de 30 años.

const streamers = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
    {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
    {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const lolYoungStreamers = streamers.filter(streamer => streamer.age<30 && streamer.gameMorePlayed.includes('League of Legends'))
console.log(lolYoungStreamers);