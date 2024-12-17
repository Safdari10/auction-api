const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./src/config/db');
const searchRoutes = require('./src/routes/searchRoutes');


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());


connectDB();

app.use('/api', searchRoutes);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})