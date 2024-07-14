import mongoose from "mongoose";
import { ATLAS_DB_URL, NODE_ENV } from "./server.config";

async function connectToDB() {
  try {
    if (NODE_ENV === "development") {
      await mongoose.connect(ATLAS_DB_URL);
    }
  } catch (error) {
    console.log("Unable to connect to the DB Server", error);
  }
}

export default connectToDB;
