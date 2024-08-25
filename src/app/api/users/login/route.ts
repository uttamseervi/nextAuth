
import { connectDB } from "@/db/dbConfig"
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"


connectDB()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody
        const user = await User.findOne({ email })
        if (!user) return NextResponse.json({ error: "User with this email not found" });
        console.log("user exists", user)
        const validPassword = await bcryptjs.compare(password, user.password);
        if (!validPassword) return NextResponse.json({ error: "Invalid credentials" }, { status: 400 });

        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }
        const token = jwt.sign(
            tokenData, process.env.TOKEN_SECRET || "qwertyuiop",
            {
                expiresIn: '1d'
            },
        )
        const response = NextResponse.json({ message: "User logged in successfully ", success: true })
        response.cookies.set("token", token, {
            httpOnly: true,
            secure: true
        })
        return response;


    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

