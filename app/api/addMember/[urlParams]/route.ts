import { NextRequest, NextResponse } from "next/server";
import sql from '../../../utils/db';
import { User, Incident } from '../../../../types/definitions';

const CryptoJS = require('crypto-js');


export async function GET(request: NextRequest, {params}: {params: {urlParams: any}}) {

    let urlStart = '';
    process.env.NODE_ENV === 'development' ? urlStart = 'http://localhost:3000' : urlStart = 'http://www.notikube.com'

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
        update users set cluster_id=${idValues[0]}, cluster_owner=FALSE where email=${idValues[1]};
        `
        return NextResponse.redirect(urlStart + '/auth/login');
        } else {
            const redirectURL = urlStart + '/auth/signup'
            return NextResponse.json({
                Error:  `Cannot find NotiKube user account for ${idValues[1]}. Please register a NotiKube user account at ${redirectURL} and try again.`
            });
        };
    } catch(err) {
        const redirectURL = urlStart + '/auth/login'
        console.log('error', err)
        return NextResponse.json({
            message: `Error adding user to cluster. Please ensure you have a valid user account and log in here: ${redirectURL}`
        });
    }

};