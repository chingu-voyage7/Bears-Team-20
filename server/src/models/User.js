import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  token: {
    type: String,
  },
  isVerified: {
    type: Boolean,
    default: true
  },
  avatar: {
    type: String,
    default: 'defaultavatarurl.com',
    trim: true
  },
  portfolioUrl: {
    type: String,
    trim: true
  },
  githubUrl: {
    type: String,
    trim: true
  },
  selfDescription: {
    type: String,
    trim: true
  },
  country: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('users', UserSchema);
module.exports = User;

