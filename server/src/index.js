import express from 'express';
import morgan from 'morgan';
import passport from 'passport';

import mongoose from './configuration/mongoose';

import users from './routes/users';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Passport middleware
app.use(passport.initialize());
// Passport configure
require('./configuration/passport')(passport);

app.use(morgan('combined'));
// Routes
app.get('/', (req, res) => res.send('hello world'));
app.use('/api/users', users);


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

export default app;
