import { String } from "aws-sdk/clients/acm";
import { NextResponse } from "next/server";

var nodemailer = require('nodemailer');

export async function sendMail(toEmail: string, emailSubject: string, html: String) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PASS,
        },
    });

    let mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: toEmail,
        subject: emailSubject,
        html: html,
    };

    await new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (err: NodeJS.ErrnoException, response: NextResponse) => {
            if (err) {
                reject(err);
            } else {
                resolve(response);
            }
        });
    });
};