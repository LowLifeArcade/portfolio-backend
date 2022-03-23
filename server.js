const express = require('express');
const cors = require('cors');
// const { readdirSync } = require('fs');
const mongoose = require('mongoose');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const csrfProtection = csurf({ cookie: true });

// create express app
const app = express();

// apply middlewares
app.use(helmet());
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })
);
app.use(express.json({ limit: '10mb' }));
app.use(cookieParser());
app.use(morgan('dev'));

// routes
app.use('/api/get-me', async (req, res) => {
  try {
    const userId = 1234;
    const token = jwt.sign({ _id: userId }, 'supersecretkey', {
      expiresIn: '7d',
    });

    // http only flag
    // send token in cookie
    res.cookie('token', token, {
      httpOnly: true,
      // secure: true, // only works on https
    });
    console.log('login headers', JSON.stringify(req.headers));

    // send user as json response
    res.json('Hi');
  } catch (err) {
    console.log(err);
    return await res.status(400).send('Error logging in. Try again.');
  }
});
// app.use('/api', authRoutes)
// app.use('/api', creatorRoutes)
// app.use('/api', fieldRoutes)
// app.use('/api', sceneRoutes)

// csrf
// test
app.use(csrfProtection);

app.get('/api/csrf-token', (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
  console.log(JSON.stringify(req.headers));
});

// db connection
// mongoose
//   .connect(process.env.DATABASE, {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true, // should be true for mongodb >= 3.4
//     useCreateIndex: true,
//   })
//   .then(() => console.log('##DB CONNECTED##'))
//   .catch((err) => console.log('DB CONNECTION ERROR', err));

// Port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`SERVER is running on port: ${port}`));

module.exports = app;
