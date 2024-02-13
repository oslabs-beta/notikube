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

  try {

  if (userEmail !== undefined) {

  const user: User[] = await sql`
  select name, cluster_id, cluster_name from users join clusters using (cluster_id) where email=${userEmail}
`
  const urlParams: string =  user[0].cluster_id + '$' + data.email;
  let cipherText: any = CryptoJS.AES.encrypt(urlParams, process.env.CIPHER_KEY).toString();
  const encodedURL: string = cipherText.replaceAll('/', 'notikube');

  let urlStart = '';
  process.env.NODE_ENV === 'development' ? urlStart = 'http://localhost:3000' : urlStart = 'http://www.notikube.com'
  let redirectURL = urlStart + '/auth/signup';
  let addUserURL = urlStart + `/api/addMember/${encodedURL}`


  if (data.email) {
    console.log('sending email to: ', data.email)
    sendMail(
      data.email,
      `NotiKube: Invitation to Join ${user[0].name}\'s Cluster`,
      `You have been invited to join <b>${user[0].name}</b>\'s NotiKube team: <b><i>${user[0].cluster_name}</i></b>.<br><br>

      If you already have a NotiKube user account, <a href=${addUserURL}>click here</a> to connect to <i><b>${user[0].cluster_name}</b></i>.<br><br>
      
      <b>Important Note:</b> NotiKube users can only be associated with one cluster. If you are already associated with a NotiKube cluster, <b><i>clicking the link above will sever your ability to view and manage incidents for your current cluster</b></i>. Only click the confirmation link if you wish to change your NotiKube cluster permissions to view and manage <b>${user[0].cluster_name}</b>.</b><br><br>

      If you\'re not already a registered user, <a href=${redirectURL}>click here</a> to create a NotiKube account, then click the link above to connect to <i><b>${user[0].cluster_name}</b></i>.`

    )
  } 
} 

  return NextResponse.json({message: 'successfullly invited user'});
  
} catch(err) {
  console.log('error', err)
  return NextResponse.json({
      message: `Error inviting new user to cluster. Please ensure you entered a valid email address and try again.`
  });
}

};
