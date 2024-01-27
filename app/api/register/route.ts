import { NextResponse } from "next/server"
import bcrypt from 'bcrypt'
import sql from '../../utils/db'
const SALT_FACTOR = 10

export async function POST(req: any) {
    try {
        const {fullName, email, password} = await req.json()
        console.log('full name: ', fullName)
        console.log('password: ', password)
        console.log('email: ', email)

        const result = await sql`SELECT * FROM users WHERE email=${email}`;
        console.log('result', result)

        if (!result.length) {
            const hashedPassword = await bcrypt.hash(password, SALT_FACTOR)
            await sql`INSERT INTO users (name, email, password) VALUES (${fullName}, ${email}, ${hashedPassword})`
            console.log('User created!');
            return NextResponse.json({newUser: true});
        }
    
        else {
            console.log('User already exists!');
            return NextResponse.json({ newUser: false });
        }
    }
    catch(e) {
        return NextResponse.json({message: 'Error occured while registering the user: ', e}, {status: 500})
    }
}