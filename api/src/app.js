const express = require('express');
const cors = require('cors');

const app = express();

//Route
const index = require('./routes/index');
const productRoute = require('./routes/product.routes');
const userRoute = require('./routes/user.routes');
const hotelRoute = require('./routes/hotels.routes');
const ticketRoute = require('./routes/ticket.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());


app.use(index);
app.use('/api/', productRoute);
app.use('/api/', userRoute);
app.use('/api/', hotelRoute);
app.use('/api/', ticketRoute);

module.exports = app;