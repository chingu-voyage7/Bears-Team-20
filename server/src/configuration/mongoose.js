import mongoose from 'mongoose';

const MONGODB_URI = require('./keys').MONGODB_URI;

mongoose.Promise = global.Promise;

async function startDB() {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI || MONGODB_URI,
      { useNewUrlParser: true },
    );
    console.log('DB running');
  } catch (e) {
    console.log(`DB_ERROR: ${e}`);
  }
}

startDB();

export default mongoose;
