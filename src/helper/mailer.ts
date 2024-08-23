import User from "@/models/userModel"
import nodemailer from "nodemailer"
import bcryptjs from "bcryptjs"
export const sendEmail = async ({ email, emailType, userId }: any) => {
    try {
        const hashedToken = await bcryptjs.hash(userId.toString(), 10)
        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId, { verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000 })

        } else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId, { forgotPasswordToken: hashedToken, forgotTokenExpiry: Date.now() + 3600000 })

        }
        const transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "ef7d6274c67e70",
                pass: "e8a5c921998580"
            }
        });
        const mailOption = {
            from: "seerviu690@gmail.com",
            to: email,
            subject: emailType === "VERIFY" ? "Verify your account" : "Reset your Password",
            html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
            or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
            </p>`
        }
        const mailResponse = await transporter.sendMail(mailOption)
        return mailResponse
        // in the below line we are using any bcz we don't know the datatype of the error it is not a good practice to use any but now it's okay to use it x

    } catch (error: any) {
        throw new Error(error.message)

    }
}