import { NextResponse, NextRequest} from 'next/server';
import sql from '../../utils/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../api/auth/[...nextauth]/route';



export async function POST(req:NextRequest, res:NextResponse) {

    // console.log("in the route");
    const session = await getServerSession(authOptions);
    const user_id = await session?.user.userid;







    const  imageUrl: { url: string}  = await req.json();

    // console.log("user_id", user_id);
    // console.log("session", session);
    // console.log("This is the image url", imageUrl.url);
//     try {
        if(user_id) {
            // console.log("Testing this");
        const addProfileImageUrl = await sql`UPDATE users SET profile_picture_url=${imageUrl.url} WHERE user_id=${user_id} RETURNING profile_picture_url`;
        console.log("RETURNED", addProfileImageUrl);
    return NextResponse.json({imageUploaded : "YES"});
    }

    return NextResponse.json({imageUploaded : "NO"});
// }
// catch(err) {
//     console.error(`Error inserting data:`, err)
//    
// }
};



