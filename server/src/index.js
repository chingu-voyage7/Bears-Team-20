import express from 'express';

import mongoose from './configuration/mongoose';
import errorHandler from './utils/error-handler';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(errorHandler);

app.get('/', (req, res) => res.send('hello world'));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

export default app;
