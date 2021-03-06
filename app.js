const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config()

require('./config/db');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());


const brandRoutes = require('./routes/brand');
const collectionRoutes = require('./routes/collection');

app.use('/api/brand', brandRoutes);
app.use('/api/collection', collectionRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));