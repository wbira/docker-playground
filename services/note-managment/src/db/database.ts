import { ConnectionOptions, connect } from "mongoose";

//todo remove hardcodes
const urlDB = "database.default.svc.cluster.local:27017";
const user = "test:12345"
console.log("urlDB :: ", urlDB)

const connectDB = async () => {
  try {
    //todo put here real URI  
    const mongoURI: string = `mongodb://${user}@${urlDB}/test`;
    const options: ConnectionOptions = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    };
    await connect(mongoURI, options);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;
