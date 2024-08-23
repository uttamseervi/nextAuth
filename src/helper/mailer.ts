import nodemailer from "nodemailer"

export const sendEmail = async ({ email, emailType, userId }: any) => {
    try {
        //TODO: configure mail for usage
        const transporter = nodemailer.createTransport({
            host: "",
            port: 465,
            secure: true,
            auth: {
                user: "",
                pass: ""
            },
        })
        const mailOption = {
            from: "seerviu690@gmail.com",
            to: email,
            subject: emailType === "VERIFY" ? "Verify your account" : "Reset your Password",
            html: "",
        }
        const mailResponse = await transporter.sendMail(mailOption)
        return mailResponse
        // in the below line we are using any bcz we don't know the datatype of the error it is not a good practice to use any but now it's okay to use it x

    } catch (error: any) {
        throw new Error(error.message)

    }
}