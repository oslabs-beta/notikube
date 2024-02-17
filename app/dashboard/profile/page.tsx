'use client'
import EmailSwitch from "../../_components/userPreferences/EmailSwitch";
import DeleteAcount from "../../_components/userPreferences/DeleteAccount";
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { User } from '../../../types/definitions';
import Image from "next/image";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { UploadButton } from "../../utils/uploadthings";
import React from 'react';

export default function Profile() {
  // get userid from session 
  const session = useSession().data;
  const userId = session?.user?.userid;
  // set state of email slider
  const [checked, setChecked] = useState<boolean>();
  // set loading state
  const [loading, setLoading] = useState<boolean>(true);
  // set user details in state
  const [user, setUser] = useState<User>();
  // set state for default profile picture
  const [imageUrl, setImageUrl] = useState<string>("")

  // if user has uploaded a profile picture, overwrite default url in state
  // if (user?.profile_picture_url) setImageUrl(user.profile_picture_url)
  // if (user?.profile_picture_url !== null && user?.profile_picture_url !== undefined) {

  //   setImageUrl(user.profile_picture_url);

  // }

  // read month, day, year from timestamp of account creation and then reformat it to more readable version mm//dd/yyy
  let timeStamp = user?.account_created.slice(0,10)
  let month = user?.account_created.slice(5,7)
  let day = user?.account_created.slice(8,10)
  let year = user?.account_created.slice(0,4)
  timeStamp = month + '/' + day + '/' + year;

  const profileImage = imageUrl.length ? imageUrl : "/assets/user.png";


  function done (imgUrl:string) {
    console.log(imgUrl);
    insertProfileImageUrl(imgUrl);
  }

  const insertProfileImageUrl = (url:string) => {
    setImageUrl(url);
    console.log("in here");
    // alert("in here");
     fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify({url : url}),
      headers: {"Content-Type": "application/json" },
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  

  
}

  // function to fetch user data and store it in state
  async function getStatus(user_id:(string | undefined)) {

    if (userId !== undefined) {
    let res = await fetch(`/api/getUser/${userId}`)
    const data: User = await res.json();
    setChecked(data.email_status)
    setUser(data)
    setLoading(false)
    // if (data.profile_picture_url !== null && data.profile_picture_url !== undefined) {

    //   setImageUrl(data.profile_picture_url);
  
    // }
    }


  }

  
  // invoke function to get user data
  useEffect(() => {
    if (userId !== undefined) {
    getStatus(userId);
  }}, [userId])

  // Emmanuel, if you add your upload photo function here, then use the commented out setImageUrl function to set the response image url in state, that's all you need to do on this page
  function addImage(event: React.MouseEvent){
    event.preventDefault()
    console.log('add image')
    // setImageUrl(urlFromResponse)
  }

  // while page is loading, display gray screen with loading circle
  while (loading) {
    return ( 
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )}
  // when page finishes loading, return profile page with email switch and delete button components
  return (
  <>
  <div className="flex justify-center">
 
    <div className="border-2 border-black shadow-2xl rounded-xl w-auto h-fit p-12">
      <div className="relative">
      <div className="flex justify-center h-60 object-scale-down p-8">
      <Image
     className="userImage mx-auto"
      alt='user profile'
      src={profileImage}
      width= {100}
      height= {120}
      />
      <div className="absolute w-full h-full pt-20 opacity-0 hover:opacity-100 flex-col items-center justify-between p-2 ">
      <UploadButton
      appearance={{
        button: "ut-ready:bg-red-500 ut-uploading:cursor-not-allowed rounded-lg bg-grey-500 text-black bg-none p-4",
      }}
        endpoint="imageUploader"
        onClientUploadComplete={ async (res) => {
          done(res[0].url)    
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
      </div>
      </div>
     
      <div className="flex justify-center">
      <h2 className="text-xl font-normal pb-4 pt-10 text-left">{user?.name}</h2>
      </div>
      <div className="flex justify-center">
      <h2 className="text-xl font-normal pb-4 text-left">{user?.email}</h2>
      </div>
      <div className="flex justify-center">
      <h2 className="text-xl font-normal text-left">Account created: {timeStamp}</h2>
      </div>
      </div>
      </div>
      <br></br>
      <div className="flex justify-center">
      <EmailSwitch user_id={userId} status={checked} />
      </div>
      <div className="flex justify-center">
      <DeleteAcount user_id={userId} />
      </div>
  </>
  );
}