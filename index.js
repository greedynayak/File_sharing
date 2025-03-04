import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import DBconnection from './database/db.js';
const app=express();

const PORT=8000;
app.use(cors())
app.use('/',router);
DBconnection();

app.listen(PORT,()=>console.log(`Server is working on ${PORT}`));