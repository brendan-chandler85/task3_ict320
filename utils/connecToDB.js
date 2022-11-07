import mongoose from 'mongoose';
import { config } from '../config/config'

const connectToDb = async () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(config.mongo.url, {
    retryWrites: true,
    w: 'majority'
  }).then(() => {
    console.log("Connected to Database.");
  }).catch(err => {
    console.log(err);
    process.exit(1);
  });
}

export default connectToDb;