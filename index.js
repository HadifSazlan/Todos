/* NOTES:
GET /tasks get all task
POST /tasks create new task
GET /tasks/:id get single task
DELETE /tasks/:id deletes task
PATCH /tasks/:id updates task (partial modification)
PUT /tasks/:id (overwrite completely)
*/

import express from 'express';

import bodyParser from 'body-parser';

import tasksRoutes from './routes/tasks.js';

import connectDB from './db/connect.js';

import dotenv from 'dotenv';

//load environment variables first before connecting to database
dotenv.config();

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.use('/tasks', tasksRoutes);

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

connectDB();