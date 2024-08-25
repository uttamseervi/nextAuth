
import { connectDB } from "@/db/dbConfig"
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import { getUserDetails } from "@/helper/getUserDetails"

connectDB()
export async function POST(request: NextRequest) {
    const userId = await getUserDetails(request);
    const user = await User.findOne({ _id: userId }).select("-password")
    if (!user) return NextResponse.json({ error: "Invalid Token" }, { status: 400 });
    return NextResponse.json({ message: "User data fetched successfully", data: user, success: true })

}