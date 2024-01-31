import { NextRequest, NextResponse } from "next/server";
import sql from '../../../utils/db';
import { User } from '../../../../types/definitions';
import { sendMail } from '../../../../service/mailService';
import { getServerSession } from "next-auth";


const CryptoJS = require('crypto-js');


export async function POST(request: NextRequest, response: NextResponse) {

  const data: {email: string} = await request.json();

  const session = await getServerSession();
  const userEmail: (string | undefined | null) = session?.user.email;

  console.log('email', data.email)

  if (userEmail !== undefined) {

  const user: User[] = await sql`
  select name, cluster_id, cluster_name from users join clusters using (cluster_id) where email=${userEmail}
`
  const urlParams: string =  user[0].cluster_id + '$' + data.email;
  console.log('url before encode', urlParams)
  let cipherText: any = CryptoJS.AES.encrypt(urlParams, process.env.CIPHER_KEY).toString();
  const encodedURL: string = cipherText.replaceAll('/', 'notikube');
  console.log('url', encodedURL)

  if (data.email) {
    console.log('sending email to: ', data.email)
    sendMail(
      data.email,
      `NotiKube: Invitation to Join ${user[0].name}\'s Cluster`,
      `You have been invited to join <b>${user[0].name}</b>\'s NotiKube team: <b><i>${user[0].cluster_name}</i></b>.<br><br>

      If you already have a NotiKube user account, <a href="http://localhost:3000/api/addMember/${encodedURL}">click here</a> to connect to <i><b>${user[0].cluster_name}</b></i>.<br><br>
      
      <b>Important Note:</b> NotiKube users can only be associated with one cluster. If you are already associated with a NotiKube cluster, <b><i>clicking the link above will sever your ability to view and manage incidents for your current cluster</b></i>. Only click the confirmation link if you wish to change your NotiKube cluster permissions to view and manage <b>${user[0].cluster_name}</b>.</b><br><br>

      If you\'re not already a registered user, <a href="http://localhost:3000/auth/signup">click here</a> to create a NotiKube account, then click the link above to connect to <i><b>${user[0].cluster_name}</b></i>.`

    )
  } 
} 

  return NextResponse.json({message: 'successfullly invited user'});

}
