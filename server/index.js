const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth.router');
const { port, database } = require('./config');

const app = express();

app.use(express.json());
app.use('/api/auth', authRouter);

const start = async () => {
  try {
    await mongoose.connect(database)
    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (e) {
    console.error(e);
  }
}

start();