import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import * as functions from 'firebase-functions';

import { notFound } from '../controller/api';
import userRoutes from '../routes/userRoutes';
import { corsOptions } from '../config/corsConfig';

const app = express();

app.use(cors(corsOptions));

app.use(express.json());

// Routes
app.use('/users', userRoutes);

app.use('/', (req: Request, res: any) => {
    res.status(200).send({message: 'OK'});
});

// Handle not found url
app.use(notFound);

export const api = functions.https.onRequest(app);
