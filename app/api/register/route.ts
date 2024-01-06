import { NextResponse } from "next/server"
import * from 'bcrypt'
const SALT_FACTOR = 10

export async function POST(req: any) {
    try {
        const {fullName, email, password} = await req.json()
        console.log('full name: ', fullName)
        console.log('password: ', password)
        console.log('email: ', email)

        const findUser = 'SELECT * FROM users WHERE email=$1';
        const result = await db.query(findUser, [email]);

        if (!result.rows[0]) {
        const addUser = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)';
        bcrypt.hash(password, SALT_FACTOR, async (err, hash) => {
        if (err) {
            return next({
            log: `authController.createUser bcrypt hash error: ${err}`,
            message: {
                err: 'Error in authController.createUser. Check server logs'
            }
            });
        }
        try {
            await db.query(addUser, [fullName, email, hash]);
            console.log('User created!');
            return next();
        }
        catch (err) {
            return next({
            log: `authController.createUser add user to db error: ${err}`,
            message: 'Error in authController.createUser. Check server logs'
            });
        }
        });
    }
    else {
        console.log('User already exists!');
        return res.json({ newUser: false });
    }

        return NextResponse.json({message: "User registered."}, {status: 200})
    }
    catch(e) {
        return NextResponse.json({message: 'Error occured while registering the user.'}, {status: 500})
    }
}