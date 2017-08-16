const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');

app.use(morgan('dev'));
app.use(express.static('./src/client'));

app.get('/', (req, res) => res.sendFile('index.html'));

app.listen(7000, () => 'Server is listening on port 7000');
