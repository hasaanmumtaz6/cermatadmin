import mongoose from "mongoose";

export function mongooseConnection() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } else {
    const uri = process.env.MONGODB_URI as string;
    return mongoose.connect(uri);
  }
}