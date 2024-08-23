import { log } from "console";
import mongoose from "mongoose";


export const connectDB = async () => {
    try {
        /*
        NOTES
        since we are in typescript the below line was giving error bcz we haven't defined its types it can be string or it can be null so if we are very sure that it will be string only then we can use the shortcut '!' to ensure it  or else we could use the usual if else clause to verify it and assign the value to it
        2. mongoose also provide us a connection which is used to check. Bcz after the connection if check the issues which we get after connecting the db like db crashed so we use this 
        the connection has got many events we can use them according to our requirements
        */
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection
        connection.on('connected', () => {
            console.log("MongoDB is connected")
        })
        connection.on('error', (err) => {
            console.error("Error while connecting to MongoDB,Make sure DB is up and running: ", +err)
            process.exit();
        })
    } catch (error) {
        console.log("Something went wrong in connecting the database")
        console.log(error)
    }
}