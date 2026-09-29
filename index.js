const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/task.routes');

const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://awaisnazakatx786_db_user:JrhWTmjuJs5pnrXX@cluster0.n1dq8ln.mongodb.net/?appName=Cluster0')
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