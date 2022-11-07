import dotenv from 'dotenv';

dotenv.config();

const DB_NAME = process.env.DB_NAME || '';
const PORT = process.env.PORT || '';
const MONGO_URI = `mongodb://localhost:27017/${DB_NAME}`

export const config = {
  mongo: {
    url: MONGO_URI
  },
  server: {
    port: PORT
  }
}