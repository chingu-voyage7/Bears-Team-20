import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

async function startDB() {
  try {
    await mongoose.connect(
      // process.env.MONGODB_URI || MONGODB_URI,
      process.env.MONGODB_URI,
      { useNewUrlParser: true },
    );
    console.log('DB running');
  } catch (e) {
    console.log(`DB_ERROR: ${e}`);
  }
}

export default startDB;
