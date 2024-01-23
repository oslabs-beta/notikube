import { NextRequest, NextResponse } from "next/server";
import sql from '../../../utils/db';

const CryptoJS = require('crypto-js');

type User = {
    user_id: number,
    name: string,
    email: string,
    phone: number,
    slack: string,
    cluster_id?: string
}

type Incident = {
    incident_id: string,
    incident_date: Date,
    incident_type: string,
    description: string,
    priority_level: string,
    incident_title: string,
    incident_status: string, 
    comment: string,
    incident_assigned_to: string,
    metric_data_id: string,
}

export async function GET(request: NextRequest, {params}: {params: {urlParams: string}}) {

    let { urlParams } = params; 
    let cipherText: string = urlParams.replaceAll('notikube', '/')
    let bytes = CryptoJS.AES.decrypt(cipherText, process.env.CIPHER_KEY);
    let decrypt = bytes.toString(CryptoJS.enc.Utf8);

    let idValues: Array<string> = decrypt.split('$')

    try {

        const user: User[] = await sql `
        select * from users where email=${idValues[1]};
        `

        if (user[0] !== undefined) {
        await sql `
        update users set cluster_id=${idValues[0]} where email=${idValues[1]};
        `
        return NextResponse.redirect('http://localhost:3000/auth/login');
        } else {
            return NextResponse.json({
                Error:  `Cannot find NotiKube user account for ${idValues[1]}. Please register a NotiKube user account at http://localhost:3000/auth/signup and try again.`
            });
        };
    } catch(err) {
        console.log('error', err)
        return NextResponse.json({
            message: 'Error adding user to cluster. Please ensure you have a valid user account and log in here: http://localhost:3000/auth/login'
        });
    }

};