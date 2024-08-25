
import { connectDB } from "@/db/dbConfig"
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server"
import { sendEmail } from "@/helper/mailer"

connectDB()

export async function POST(request: NextRequest) {
    try {
        const requestBody = await request.json();
        const { token } = requestBody
        console.log(token)
        const user = await User.findOne({ verifyToken: token, verifyTokenExpiry: { $gt: Date.now() } })
        if (!user) return NextResponse.json({ error: "Invalid Token" }, { status: 400 });
        console.log(user);
        user.isVerified = true;
        user.verifyToken = undefined
        user.verifyTokenExpiry = undefined
        await user.save();
        return NextResponse.json({ message: "Email verified Successfully", success: true })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
