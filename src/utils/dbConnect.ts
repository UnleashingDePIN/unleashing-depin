import mongoose from 'mongoose';
const uri = process.env.MONGODB_URI;
if (!uri) {throw new Error('Please define the MONGODB_URI environment variable inside .env');}
declare global {var mongoose: { conn: any, promise: any } | undefined;}
let cached = global.mongoose;
if (!cached) {cached = global.mongoose = { conn: null, promise: null };}
async function dbConnect() {
  cached = cached || { conn: null, promise: null };
  if (cached.conn) {return cached.conn;}
  if (!cached.promise) {
    if (!uri) {throw new Error('Please define the MONGODB_URI environment variable inside .env');}
    const opts = { bufferCommands: false, dbName: 'production'};
    cached.promise = mongoose.connect(uri, opts).then((mongoose) => {return mongoose;});
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;