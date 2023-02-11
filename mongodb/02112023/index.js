//import {MongoClient} from 'mongodb' // "añadir" -> "type": "module", <- en json 
const {MongoClient} = require('mongodb'); 
// npm i mongodb <-- Instalamos mongodb
// esto añado al package.json -> "dependencies": {"mongodb": "^5.0.1"}
//npm i     -> Escanea las dependencias del package.json y las instala
//Quitar dependencias
// npm uninstall nombredependencia

const alumnosInsertar = [
    {nombre: 'alumno1', edad: 40},
    {nombre: 'alumno2', edad: 41},
    {nombre: 'alumno3', edad: 42},
]

const alumnosEliminar = ['alumno1', 'alumno2']

const asignaturas = ['mates', 'lengua', 'fisica', 'historia', 'Inglés', 'Programación']

class Asignatura {
    constructor(nombre){
        this.nombre = nombre
    }
}

async function main(){
    const uri = "mongodb://127.0.0.1";
    const client = new MongoClient(uri);
    await client.connect();

    // const dbs = await client.db().admin().listDatabases()
    // console.log(dbs);

    // const colecciones = await client.db("universidad").listCollections().toArray()
    // console.log(colecciones);

    // const alumnos = await client.db('universidad').collection('alumnos').find({nombre: 'Adrián'}).toArray()
   
    // for(const alumno of alumnos){
    //     if (alumno.edad>20) {
    //         console.log(alumno);
    //     }
    // }
    // for(const alumno of alumnosInsertar){
    //     await client.db("universidad").collection("alumnos").insertOne(alumno)
    // }
    // for (const nombre of alumnosEliminar) {
    //     await client.db('universidad').collection('alumnos').deleteMany({nombre: nombre})
    // }

    //recorrer array de asignaturas y crear en la colección de asignaturas cada una de ellas
    // for (const asignatura of asignaturas) {
    //     const asignaturaDb = await client.db('universidad').collection('asignaturas').findOne({nombre: asignatura})
    //     if(!asignaturaDb){
    //         await client.db('universidad').collection('asignaturas').insertOne(new Asignatura(asignatura))
    //     }
    // }
    const alumnos = await client.db('universidad').collection('alumnos').find().toArray()
    for (const alumno of alumnos) {
        await client.db('universidad').collection('alumnos').updateOne({_id: alumno._id},{$set: {edad: alumno.edad+1}})
    }
}

// class Asignatura {
//     constructor(nombre){
//         this.nombre = nombre
//     }
// }

main()