import {sendMail} from '../../../service/mailService';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {

  console.log('inside addUser function')

  const handler = async () => {

  console.log('inside handler function')

    try {
      await sendMail(
        'rocknrolldane@gmail.com',
        'Nodemailer Test',
        'This is the fourth test of the Nodemailer system'
      );
      
      return NextResponse.json('Success');

    } catch(err) {
        return NextResponse.json({
            message: 'Error in email server'
        });
    }
  };

  handler();

  return NextResponse.json({
    message: 'Successful Email Sent'
  });

}


