import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req:Request, res:Response) => {
    return res.status(200).send('ok');
})

app.listen((4000),()=>{
    console.log('listening on 4000');
})