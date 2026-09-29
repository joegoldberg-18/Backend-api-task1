const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const taskRoutes = require('./routes/task.routes');

const app = express();
const port = 3000;

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB!'))
 .catch(err => console.error('Could not connect to MongoDB:', err));

app.use(express.json());

app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) => {
 res.send('API is working!');
});

app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});