import { verify } from "crypto"
import mongoose, { Schema } from "mongoose"
import { type } from "os"
import { deflate } from "zlib"


const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Please provide the username"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please provide the password"],
    },
    email: {
        type: String,
        required: [true, "Please provide the email"],
        unique: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})
/*In Next.js, you can still use uppercase model names like User when defining your Mongoose models. The key difference is that when working with Next.js, which often runs in serverless environments or at the edge, you need to ensure that the model is defined only once. This prevents issues related to hot reloading or multiple instances of the model being created.*/
// const User = mongoose.model('users', userSchema) this wont work in nextJs bcz nextJs runs on a serverless environment and it does not know that it was already connected to the database
/*so here we need to take care of a situation that the model is already created or not if not then the model is created else if the model is already created then the reference of the model is given*/

/*
To avoid that problem we go to mongoose and ask the mongoose to give the reference of all the models from there we can take the models which we require.......
*/
const User = mongoose.models.users || mongoose.model('users',userSchema)
export default User;

