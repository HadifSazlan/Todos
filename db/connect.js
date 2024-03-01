import mongoose from 'mongoose'

export default function connectDB() {

const uri = process.env.MONGO_URI;

/*
attempt to connect DB using connectionString. return log && exit if fail.
exit code 0 signifies success, 1 indicate error.
*/
try {
    mongoose.connect(uri)
    } catch (err) {
        console.error(err.message);
        process.exit(1);
}

//event handlers for connection status.
const dbConnection = mongoose.connection;

dbConnection.once('open', (_) => {
    console.log(`Database connected: ${uri}`);
    });
 
dbConnection.on('error', (err) => {
    console.error(`Connection error: ${err}`);
    });
    return;
}