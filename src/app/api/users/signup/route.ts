/*
NOTES:
    As we know next js works on edge computing not on servers
    1.In next js if we want anything to be done using the database of i need the database interaction to do something then i have to connect the database every time when i require the DB

    2.We can take the data from user in params or in the request body in node we can write req.body directly but we can't do the same in nextJS so first we take the reqBody from nextJs.Request and then we destructure the body items
    
*/

import { connectDB } from "@/db/dbConfig"
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"
import { sendEmail } from "@/helper/mailer"

connectDB()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        console.log(reqBody)
        const { username, email, password } = reqBody

        const existingUser = await User.findOne({ email })
        if (existingUser) return NextResponse.json({ error: "User with this email is already registered" }, { status: 400 });

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            username,
            password: hashedPassword,
            email
        })
        const savedUser = await newUser.save();
        console.log(savedUser);
        // The user is registered and now we need to verify the user by sending the mail
        await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id })
        return NextResponse.json({ message: "User registered Successfully", savedUser, success: true })


    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}