const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const searchRoutes = require('./routes/searchRoutes');


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


app.use(bodyParser.json());
