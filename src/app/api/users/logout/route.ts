
import { connectDB } from "@/db/dbConfig"
import User from "@/models/userModel"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"


connectDB()

export async function GET(request: NextRequest) {
    try {
        const response = NextResponse.json({ message: "User logged out successfully", success: true })
        response.cookies.set("token", "", {
            httpOnly: true,
            expires: new Date(0)
        })
        return response

    } catch (error) {

    }
}