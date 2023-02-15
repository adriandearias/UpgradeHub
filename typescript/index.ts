import { MongoClient, WithId, Document } from "mongodb";
import express, {Express, Request, Response} from 'express'

let client: MongoClient|null = null

const app: Express= express()
const puerto: number = 3000

class Alumno{
    nombre:string
    edad:number
    notaMedia:Number
    constructor(n:string, e:number, nm:number){
        this.nombre = n
        this.edad = e
        this.notaMedia = nm
    }
}

app.get('/alumnos', async(req:Request, res: Response)=>{
    const alumnos = await client.db('universidad').collection('alumnos').find().toArray()
    res.json(alumnos)
})

app.listen(puerto, async ()=>{
    client = new MongoClient('mongodb://127.0.0.1')
    await client.connect()
    console.log('La api está en marcha');    
})