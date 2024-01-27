import {sendMail} from '../../service/mailService';
import { redirect } from 'next/navigation'
import sql from '../utils/db';
import { getServerSession } from 'next-auth';
import { User } from '../../types/definitions'

const CryptoJS = require('crypto-js');


export default async function AddMemberPage() {

    const session = await getServerSession();
    const userEmail: (string | null | undefined) = session?.user?.email;

    while (userEmail === undefined) {
        return (<div>...loading</div>)
    }

    const user: User[] = await sql`
        select name, cluster_id, cluster_name from users join clusters using (cluster_id) where email=${userEmail}
    `

    async function addMember(data: FormData) {
        'use server'

        const email = data.get('email')?.toString();
        const userName: string = user[0].name;
        const clusterId: (string | undefined) = user[0].cluster_id;
        const clusterName: (string | undefined) = user[0].cluster_name;

        const urlParams: string =  clusterId + '$' + email;
        let cipherText: any = CryptoJS.AES.encrypt(urlParams, process.env.CIPHER_KEY).toString();
        const encodedURL: string = cipherText.replaceAll('/', 'notikube')

    
        if (email) {
            sendMail(
                email,
                `NotiKube: Invitation to Join ${userName}\'s Cluster`,
                `You have been invited to join <b>${userName}</b>\'s NotiKube team: <b><i>${clusterName}</i></b>.<br><br>

                If you already have a NotiKube user account, <a href="http://localhost:3000/api/addMember/${encodedURL}">click here</a> to connect to <i><b>${clusterName}</b></i>.<br><br>

                If you\'re not already a registered user, <a href="http://localhost:3000/auth/signup">click here</a> to create a NotiKube account, then click the link above to connect to <i><b>${clusterName}</b></i>.`

            )
        } 
        
        redirect('http://localhost:3000/dashboard/incidents')
    }

    return (
        <div style={{margin:0, padding:0 }} className='AddMember'>
            <h3 style={{margin:0, padding:0, fontWeight:"bold" }} className='memberForm'>Invite other users to join this cluster:</h3>
            <form className="space-x-1" action={addMember}>
                <input className="h-12 shadow-2xl" name='email' type='email' required placeholder='example@email.com' style={{width: 350}}></input>
                <button className="border-2 border-black bg-gray-300 text-black shadow-2xl rounded-md min-w-24 h-12 text-center" type="submit">Submit</button>
            </form>
        </div>
    )
}
