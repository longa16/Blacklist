const express = require('express');
const connectDB = require('database.js');
const dotenv = require('dotenv');

dotenv.config();

const app = express();


connectDB();


app.use(express.json({ extended: false }));

// Routes
app.use('/api', require('routes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
