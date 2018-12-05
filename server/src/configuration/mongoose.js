import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

async function startDB() {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI,
      { useNewUrlParser: true },
    );
    console.log('DB running');
  } catch (e) {
    console.log(`DB_ERROR: ${e}`);
  }
}

startDB();

export default mongoose;
